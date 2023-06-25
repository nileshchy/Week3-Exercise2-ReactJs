import React from 'react';
import styles from './MyComponent.module.css';

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, CSS Modules!</h1>
      <p className={styles.description}>This is an example of CSS Modules in React.</p>
    </div>
  );
};

export default MyComponent;
