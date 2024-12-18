import React from 'react';
import styles from './index.less';

const About = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>关于作者</h1>
        <p>了解作者及其开源项目</p>
      </header>
      
      <div className={styles.content}>
        <section className={styles.bio}>
          <h2>作者简介</h2>
          <p>
            您好，我是 <strong>Gravity2333</strong>，一名热爱编程的开发者，专注于前端技术。
            通过不断学习和实践，我希望能为开源社区贡献更多有用的工具和库。
            本项目是我为更好地理解 React Router 原理所做的实践，旨在为开发者提供一个简洁的路由解决方案。
          </p>
        </section>
        
        <section className={styles.project}>
          <h2>项目地址</h2>
          <p>
            这个项目是我在学习 React Router 的过程中，尝试实现其核心功能的过程。
            你可以在我的 GitHub 上查看该项目的源码，欢迎提出问题、意见或者贡献代码！
          </p>
          <a
            href="https://github.com/Gravity2333/my-react-router"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            查看项目
          </a>
        </section>

        <section className={styles.contact}>
          <h2>联系我</h2>
          <p>
            我乐于与大家交流技术和思想，欢迎通过 GitHub 与我联系，或者通过我的博客与我沟通。
          </p>
          <a
            href="https://github.com/Gravity2333"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            访问我的 GitHub
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
