import React from 'react';
import styles from './Steps.module.css';
import greenLine from '../../assets/images/svg/Frame 30.svg';

// Define props type
interface StepsProps {
  title: string;
  description: string;
}

const Steps: React.FC<StepsProps> = ({ title, description }) => {
  return (
    <div className={styles.steps_container}>
      <div className={styles.steps_img}>
        <img src={greenLine} alt="" />
      </div>
      <div className={styles.steps}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Steps;
