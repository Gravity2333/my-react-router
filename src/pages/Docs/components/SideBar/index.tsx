import React from "react";
import styles from "./index.less";

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
            <a href={item.link} className={styles.menuLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
