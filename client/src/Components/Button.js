import styles from "../Components/Button.module.css";

const Button = (props) => {
  const propClasses = props.className ? props.className : "";
  const variant = props.variant ? styles[`${props.variant}`] : "";

  const classes = `${styles.button} ${variant} ${propClasses}`;

  return (
    <button type="button" className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
