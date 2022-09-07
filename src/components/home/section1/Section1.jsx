import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/theme/mediaSize';
import Section1Contents from './Section1Contents';
import Section1Header from './Section1Header';

function Section1() {
  return (
    <Section1Wrapper>
      <ContentsArea>
        <Section1Header />
        <Section1Contents />
      </ContentsArea>
    </Section1Wrapper>
  );
}

export default Section1;

const Section1Wrapper = styled.section``;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
  padding-top: 140px;
`;
