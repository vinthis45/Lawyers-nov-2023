import React from 'react';
import styles from './SuccessCard.module.css';
import Ribbon from "../../Assets/ribbon.svg"
import { Typography } from '@mui/material';

export default function SuccessCard({ heading }) {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={Ribbon} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.heading}>{heading}</h4>
        <Typography className={styles.lightText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati modi velit qui vitae corrupti illum porro corporis aperiam? Cum hic magnam unde doloribus? Laborum in laboriosam ex quo voluptatum?</Typography>
      </div>
      
      <button className={styles.readMoreBtn}>Read More</button>
    </div>
  );
};


