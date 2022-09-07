import styled from 'styled-components';

import Header from '../components/home/header/Header';
import LogosContainer from '../components/home/header/LogosContainer';

function Home() {
  return (
    <HomeWrapper>
      <Header />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;
