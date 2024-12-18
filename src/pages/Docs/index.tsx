import React, { useEffect } from "react";
import DocSidebar from "./components/SideBar";
import DocContent from "./components/DocContent";
import styles from "./index.less";
import Install from "./components/Install";
import ApiDoc from "./components/ApiDoc";

const DocPage: React.FC = () => {
  const sidebarItems = [
    { label: "介绍", link: "#introduce" },
    { label: "安装", link: "#install" },
    { label: "API", link: "#api" },
  ];

  // 监听 hash 的变化
  useEffect(() => {
    // 监听 hash 跳转时自动滚动
    const handleHashChange = () => {
        console.log(11)
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
       
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // 组件卸载时移除监听
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className={styles.container}>
      <DocSidebar items={sidebarItems} />
      <div className={styles.mainContent}>
        <DocContent
          id="introduce"
          title="React Router 简介"
          content="本项目是一个轻量级的React-Router实现，旨在帮助你理解React Router的核心概念。"
        />
        <DocContent id={"install"} title="安装" content={<Install />} />
        <DocContent
          id="api"
          title="API"
          content={<ApiDoc/>}
        />
      </div>
    </div>
  );
};

export default DocPage;
