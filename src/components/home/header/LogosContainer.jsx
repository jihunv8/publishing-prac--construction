import styled from 'styled-components';
import { screenLarge } from '../../../global-style/theme/mediaSize';

import logoAsana from '../../../images/logo-asana.png';
import logoBuzzfeed from '../../../images/logo-buzzfeed.png';
import logoChase from '../../../images/logo-chase.png';
import logoToggl from '../../../images/logo-toggl.png';
import logoWalmart from '../../../images/logo-walmart.png';

function LogosContainer() {
  return (
    <LogosContainerWrapper>
      <img src={logoAsana} />
      <img src={logoBuzzfeed} />
      <img src={logoChase} />
      <img src={logoToggl} />
      <img src={logoWalmart} />
    </LogosContainerWrapper>
  );
}

export default LogosContainer;

const LogosContainerWrapper = styled.div`
  background-color: #fafafa;
  width: 1170px;
  height: 180px;
  padding: 74px 82px;
  margin-top: 170px;
  border-radius: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${screenLarge}) {
    width: 940px;
    height: 140px;
    padding: 45px 60px;
  }
`;
