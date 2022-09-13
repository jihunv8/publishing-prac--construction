import styled from 'styled-components';
import { contentsAreaLarge, contentsAreaXLarge, screenLarge } from '../../../global-style/theme/mediaSize';
import Section1Contents from './Section1Contents';
import Section1Header from './Section1Header';

function Section1() {
  return (
    <section>
      <ContentsArea>
        <Section1Header />
        <Section1Contents />
      </ContentsArea>
    </section>
  );
}

export default Section1;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
  padding-top: 140px;

  @media screen and (max-width: ${screenLarge}) {
    width: ${contentsAreaLarge};
  }
`;
