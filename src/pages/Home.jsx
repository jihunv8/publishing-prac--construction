import styled from 'styled-components';

import Header from '../components/home/header/Header';
import Section1 from '../components/home/section1/Section1';
import Seciton2 from '../components/home/section2/Section2';

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Section1 />
      <Seciton2 />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;
