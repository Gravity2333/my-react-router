import React, { useEffect } from "react";
import DocSidebar from "./components/SideBar";
import styles from "./index.less";
import { Outlet } from "@/lib/react-router-dom";

const DocPage: React.FC = () => {
  const sidebarItems = [
    { label: "介绍", link: "/docs/introduce" },
    { label: "安装", link: "/docs/install" },
    { label: "API", link: "/docs/api" },
  ];

  // 监听 hash 的变化
  useEffect(() => {
    // 监听 hash 跳转时自动滚动
    const handleHashChange = () => {
      console.log(11);
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
        <Outlet />
      </div>
    </div>
  );
};

export default DocPage;
