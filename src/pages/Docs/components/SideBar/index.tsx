import React from "react";
import styles from "./index.less";
import { NavLink } from "@/lib/react-router-dom";

interface SidebarProps {
  items: { label: string; link: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>目录</h3>
      <ul className={styles.menu}>
        {items.map((item, index) => (
          <li key={index} className={styles.menuItem}>
             <NavLink to={item.link}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
