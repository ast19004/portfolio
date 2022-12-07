const ListImage = (props) => {
  return (
    <li>
      <img src={props.src} alt={props.alt} />
    </li>
  );
};
export default ListImage;
