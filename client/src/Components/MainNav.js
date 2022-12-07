import styled from "styled-components";
import Button from "./Button";

const MainNav = () => {
  return (
    <Nav>
      <Button href="#" variant="rounded">
        <b>A</b> WEB DEV
      </Button>

      <NavRightContainer>
        <Button href="#about" variant="rounded-left">
          ABOUT
        </Button>
        <Button href="#projects">PROJECTS</Button>
        <Button href="#contact" variant="rounded-right">
          CONTACT
        </Button>
      </NavRightContainer>
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
