import React from "react"
import styles from "./styles.module.css"
const Button = ({ label, onClick = () => {} }) => (
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>
)

export default Button
