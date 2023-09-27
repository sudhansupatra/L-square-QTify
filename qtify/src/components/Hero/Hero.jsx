import React from "react";
import HeroImage from "../../assets/vibrating-headphone 1.svg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img src={HeroImage} width={212} alt="headphones" />
    </div>
  );
};

export default Hero;
