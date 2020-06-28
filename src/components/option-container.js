import React from "react"
import styles from '../styles/content-container.module.scss'

const TextBox = ({ color, textColor, name, children }) => {
  console.log(color, name)
  return (
  <div className={styles.TextBox} style={{ backgroundColor: color, color: textColor == undefined ? "black" : textColor }}>
    {children}
  </div>
  );
}

const OptionContainer = ({text, color, textColor}) => (
  <div className={styles.ContentContainer}>
    <TextBox color={color} textColor={textColor} name={text}>
      <div className={styles.Text}>
        <h2/>
        <p>{text}</p>
      </div>
    </TextBox>
  </div>
);

export default OptionContainer