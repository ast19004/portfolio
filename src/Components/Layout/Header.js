import MainNav from "./MainNav";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <MainNav />
    </header>
  );
};

export default Header;
