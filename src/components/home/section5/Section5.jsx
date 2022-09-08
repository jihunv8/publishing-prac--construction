import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/theme/mediaSize';

import Section5Article from './Section5Article';
import Section5Footer from './Section5Footer';
import Section5Header from './Section5Header';

function Section5() {
  return (
    <Section5Wrapper>
      <ContentsArea>
        <Section5Header />
        <Section5Article />
        <Section5Footer />
      </ContentsArea>
    </Section5Wrapper>
  );
}

export default Section5;

const Section5Wrapper = styled.section`
  margin-top: 140px;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
`;
