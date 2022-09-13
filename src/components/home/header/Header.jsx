import styled from 'styled-components';
import HeaderBackground from './HeaderBackground';
import NavBar from './NavBar';
import HeaderContent from './HeaderContent';
import LogosContainer from './LogosContainer';
import { contentsAreaLarge, contentsAreaXLarge, screenLarge } from '../../../global-style/theme/mediaSize';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderBackground />
      <ContentsArea>
        <NavBar />
        <HeaderContent />
        <LogosContainer />
      </ContentsArea>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  padding-top: 50px;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: -933px auto 0;
  position: relative;

  @media screen and (max-width: ${screenLarge}) {
    width: ${contentsAreaLarge};
    margin-top: -793px;
  }
`;
