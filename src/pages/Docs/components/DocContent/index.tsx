import React from "react";
import styles from "./index.less";

interface DocContentProps {
id?: string,
  title: string;
  content: any;
}

const DocContent: React.FC<DocContentProps> = ({ id,title, content }) => {
  return (
    <div id={id} className={styles.content}>
      <h2 className={styles.contentTitle}>{title}</h2>
      <div className={styles.contentBody}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DocContent;
