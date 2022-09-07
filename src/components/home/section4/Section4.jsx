import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/theme/mediaSize';

import Form from './Form';
import Section4Header from './Section4Header';

import mapImage from '../../../images/map.png';

function Section4() {
  return (
    <Section4Wrapper>
      <ContentsArea>
        <Section4Header />
        <Seciton4Article>
          <Form />
          <Image src={mapImage} />
        </Seciton4Article>
      </ContentsArea>
    </Section4Wrapper>
  );
}

export default Section4;

const Section4Wrapper = styled.section`
  margin-top: 140px;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
`;

const Seciton4Article = styled.article`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 600px;
  object-fit: contain;
`;
