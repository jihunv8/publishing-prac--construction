import styled from 'styled-components';
import Footer from '../components/common/footer/Footer';

import Header from '../components/home/header/Header';
import Section1 from '../components/home/section1/Section1';
import Seciton2 from '../components/home/section2/Section2';
import Section3 from '../components/home/section3/Section3';
import Section4 from '../components/home/section4/Section4';
import Section5 from '../components/home/section5/Section5';

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Section1 />
      <Seciton2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;
