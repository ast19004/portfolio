import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

import MainLogo from "./MainLogo";
import MenuIcon from "@mui/icons-material/Menu";

const MainNav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Nav>
      <Button href="#" variant="rounded">
        <MainLogo /> WEB DEV
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
          <Button href="#" variant="rounded" sx={{ width: "50px" }}>
            <MenuIcon />
          </Button>
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
