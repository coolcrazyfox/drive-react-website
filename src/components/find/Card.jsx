import React from 'react';
import styles from './Find.module.css';

const Card = ({ image, make, href }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
        <p><a href={href} alt={make}>{make}</a></p>
    </div>
  );
};

export default Card;
