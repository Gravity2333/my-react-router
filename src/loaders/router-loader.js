function transformComponent(obj) {
    if (Array.isArray(obj)) {
      return obj.map(item => transformComponent(item));
    }
  
    if (typeof obj === "object" && obj !== null) {
      const transformedObj = {};
      for (const [key, value] of Object.entries(obj)) {
        if (key === "component" && typeof value === "string") {
          // Remove quotes around the import path
          const updatedValue = value.replace(/"([^"]+)"/g, '$1');
          // Use the updated format for React.lazy
          transformedObj[key] = `React.lazy(() => import('${updatedValue}'))`;
        } else {
          transformedObj[key] = transformComponent(value);
        }
      }
      return transformedObj;
    }
  
    return obj;
  }
  
  // Function to convert the object into a string and remove extra quotes around React.lazy
  function convertToString(obj) {
    // Transform the object to convert all 'React.lazy' strings
    const transformed = transformComponent(obj);
  
    // Convert the transformed object into a string
    let resultString = JSON.stringify(transformed, null, 2);
  
    // Remove quotes around React.lazy calls
    resultString = resultString.replace(/"React\.lazy\((.*)\)"/g, 'React.lazy($1)');
  
    return resultString;
  }
  
function transformLazyRoute(input) {
  const objJson = input.replace("export default", "");
  let result;
  eval(`
    result = ${objJson}
    `);
  const lazyRouter = convertToString(result);

  return `
  import React from 'react'
  export default ${lazyRouter}`
}

module.exports = function (content) {
  return transformLazyRoute(content);
};
