import styled from 'styled-components';

import Header from '../components/home/header/Header';
import Section1 from '../components/home/section1/Section1';
import Seciton2 from '../components/home/section2/Section2';
import Section3 from '../components/home/section3/Section3';

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Section1 />
      <Seciton2 />
      <Section3 />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;
