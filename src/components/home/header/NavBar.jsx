import styled from 'styled-components';

function NavBar() {
  return (
    <NavBarWrapper>
      <h1>
        <Logo href="">CONSTRUCTION</Logo>
      </h1>
      <Nav>
        <NavContent href="">Home</NavContent>
        <NavContent href="">Abtou Us</NavContent>
        <NavContent href="">Services</NavContent>
        <NavContent href="">Project</NavContent>
      </Nav>
    </NavBarWrapper>
  );
}

export default NavBar;

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Logo = styled.a`
  color: #40a2d5;
  font-weight: 600;
  font-size: 25px; //Logo 고정된 크기. rem 사용하지 않음.
`;

const Nav = styled.nav`
  width: 380px;
  display: flex;
  justify-content: space-between;
`;

const NavContent = styled.a`
  color: #fff;
  font-size: 1.125rem;
  position: relative;

  &:hover {
    font-weight: 600;

    &::after {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background-color: #fff;
      border-radius: 100%;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-2px);
    }
  }
`;
