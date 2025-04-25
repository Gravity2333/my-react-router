import React from "react";
import styles from "./index.less";

interface DocContentProps {
  id?: string;
  title: string;
  content: any;
}

const DocContent: React.FC<DocContentProps> = ({ id, title, content }) => {
  return (
    <div id={id} className={styles.content}>
      <h2 className={styles.contentTitle}>{title}</h2>
      <div className={styles.contentBody}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default () => (
  <DocContent
    id="introduce"
    title="React Router 简介"
    content="本项目是一个轻量级的React-Router实现，旨在帮助你理解React Router的核心概念。"
  />
);
