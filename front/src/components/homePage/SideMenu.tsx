import React from 'react';
import styles from '../../styles/Home.module.scss';

function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <p>DISCOVER </p>
      {['history', 'our products', 'JoJo Ceo'].map((x) => (
        <button type="button" className={styles.sideMenuItem} key={x}>
          {x}
        </button>
      ))}
    </div>
  );
}

export default SideMenu;
