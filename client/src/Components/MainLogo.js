const MainLogo = (props) => {
  const classes = props.className ? props.className : "";
  const fontSize = props.fontSize ? props.fontSize : "inherit";
  return (
    <b className={`decorative ${classes}`} style={{ fontSize: fontSize }}>
      A
    </b>
  );
};

export default MainLogo;
