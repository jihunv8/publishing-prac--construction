import styled from 'styled-components';
import { screenLarge, screenMiddle, screenSmall, screenXSmall } from '../../../global-style/theme/mediaSize';

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
  height: 180px;
  padding: 74px 82px;
  margin-top: 170px;
  border-radius: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${screenLarge}) {
    height: 140px;
    padding: 45px 60px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    margin-top: 80px;
    height: 160px;
    padding: 20px 30px;
    flex-wrap: wrap;
    justify-content: center;

    > img {
      padding: 0 30px;
    }
  }

  @media screen and (max-width: ${screenSmall}) {
    height: 160px;
    padding: 20px 0;

    > img {
      padding: 0 20px;
    }
  }

  @media screen and (max-width: ${screenXSmall}) {
    height: auto;
    flex-direction: column;
    border-radius: 50px;

    > img {
      padding: 10px 0;
    }
  }
`;
