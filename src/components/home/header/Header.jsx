import styled from 'styled-components';
import HeaderBackground from './HeaderBackground';
import NavBar from './NavBar';
import HeaderContent from './HeaderContent';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderBackground />
      <ContentsArea>
        <NavBar />
        <HeaderContent />
      </ContentsArea>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  padding-top: 50px;
`;

const ContentsArea = styled.div`
  width: 1170px;
  margin: -933px auto 0;
  position: relative;
`;
