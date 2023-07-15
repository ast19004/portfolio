import { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "./MainNav.module.css";
import Button from "../UI/Button";

import Hamburger from "hamburger-react";

import { Menu, MenuItem } from "@mui/material";

const MainNav = () => {
  const breakpoint = 600;
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.target);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Nav>
      <Button
        href="#"
        variant="rounded"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          color: "red",
          fontSize: "1.5rem",
        }}
      >
        ME
      </Button>
      {width > breakpoint ? (
        <NavRightContainer>
          <Button href="#about" variant="rounded-left">
            ABOUT
          </Button>
          <Button href="#projects">PROJECTS</Button>
          <Button href="#contact" variant="rounded-right">
            CONTACT
          </Button>
        </NavRightContainer>
      ) : (
        <NavRightMobileContainer>
          <Hamburger
            color="#888"
            toggled={isOpen}
            toggle={setOpen}
            size={30}
            onClick={handleMenuClick}
            aria-controls={isOpen ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : undefined}
          />
          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleMenuClose}
            onClick={handleMenuClick}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 5,
                right: 0,
                left: "unset !important",
                borderRadius: "25px 0 0 25px",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root ": {
                  margin: "0",
                },
              },
            }}
            // transformOrigin={{ horizontal: "right", vertical: "top" }}
            // anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={() => setOpen(false)}>
              <a href="/#about" className={styles.navLink}>
                ABOUT
              </a>
            </MenuItem>
            <MenuItem onClick={() => setOpen(false)}>
              <a href="/#projects" className={styles.navLink}>
                PROJECTS
              </a>
            </MenuItem>
            <MenuItem onClick={() => setOpen(false)}>
              <a href="/#contact" className={styles.navLink}>
                CONTACTS
              </a>
            </MenuItem>
          </Menu>
        </NavRightMobileContainer>
      )}
    </Nav>
  );
};

export default MainNav;
const Nav = styled.nav`
  display: grid;
  grid-template-columns: 100px auto;
  justify-content: space-between;
  align-items: center;

  align-self: flex-start;
`;

const NavRightContainer = styled.div`
  display: flex;
  width: 325px;
  justify-content: space-evenly;
`;

const NavRightMobileContainer = styled.div`
  display: flex;
  justify-content: end;
`;
