const fs = require("fs");
const path = require("path");

function removeQuotesFromLazy(input) {
  // 正则表达式：匹配 "React.lazy(() => import("...)")" 中的路径部分
  const regex = /React\.lazy\(\(\) => import\("([^"]+)"\)\)/g;

  // 替换匹配项，将路径部分提取出来，不包括引号
  return input.replace(regex, (match, p1) => {
    return `React.lazy(() => import(${p1}))`;
  });
}

function transformComponent(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => transformComponent(item));
  }

  if (typeof obj === "object" && obj !== null) {
    // 如果是对象，递归处理每个属性
    const transformedObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (key === "component" && typeof value === "string") {
        // 替换 component 字段的字符串值
        transformedObj[key] = `React.lazy(() => import(${value}))`;
      } else {
        transformedObj[key] = transformComponent(value);
      }
    }
    return transformedObj;
  }

  return obj;
}

function transformLazyRoute(input) {
  const objJson = input.replace("export default", "");
  let result;
  eval(`
    result = ${objJson}
    `);
  return (
    "export default " +
    removeQuotesFromLazy(JSON.stringify(transformComponent(result)))
  );
}

class MyWebpackPlugin {
  constructor(options = {}) {
    // 配置项，你可以传递配置用于指定目录或者其他操作
    this.configDir = path.resolve(__dirname, "../../config/");
  }

  apply(compiler) {
    // 在 `emit` 阶段执行插件逻辑
    compiler.hooks.emit.tapAsync("MyWebpackPlugin", (compilation, callback) => {
      this.readAndTransformFiles()
        .then((transformedData) => {
          const r = JSON.stringify(transformedData[0].originalContent, null, 2);
          // 假设你想把转换后的数据注入到 webpack 打包结果中
          // 可以通过 assets 或其他方式进行进一步处理
          compilation.assets["router.js"] = {
            source: () => r,
            size: () => r.length,
          };

          callback();
        })
        .catch((err) => {
          console.error("插件出错:", err);
          callback();
        });
    });
  }

  async readAndTransformFiles() {
    const files = await this.readFilesInDir(this.configDir);
    const transformedData = files.map((file) => this.transformFile(file));
    return transformedData;
  }

  async readFilesInDir(dir) {
    return new Promise((resolve, reject) => {
      fs.readdir(dir, (err, files) => {
        if (err) {
          return reject(err);
        }
        resolve(files.filter((file) => file.endsWith(".js"))); // 只处理 JS 文件
      });
    });
  }

  transformFile(fileName) {
    const filePath = path.join(this.configDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    let transformed = fileContent;
    // 在这里做你自定义的转换操作
    // 比如你想将路由配置转换成不同格式
    if (fileName === "router.js") {
      transformed = this.convertRouterData(fileContent);
    }
    return transformed;
  }

  convertRouterData(content) {
    // 这里可以做你需要的转换逻辑
    // 比如你可以解析 JS 配置或者 JSON，进行结构转换等
    // 这里只是一个示例
    console.log(transformLazyRoute(content));
    return { originalContent: content }; // 这是一个简单的例子
  }
}

module.exports = MyWebpackPlugin;
