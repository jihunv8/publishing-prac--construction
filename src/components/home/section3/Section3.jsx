import styled, { css } from 'styled-components';

import backgroundImage from '../../../images/section3-bg.png';
import bigDoubleQuote from '../../../images/icons/big-double-quote.png';

function Section3() {
  return (
    <Section3Wrapper>
      <Background>
        <Title>Message from CEO</Title>
        <Text>
          Shewing met parties gravity husband sex pleased. On to no kind do next feel held walk. Last own loud and knew
          give gay four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible
          at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he
          nothing be.
          <br />
          <br />
          Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in in brandon of limited unknown
          greatly. Distrusts fulfilled happiness unwilling as explained of difficult. No landlord of peculiar ladyship
          attended if contempt ecstatic. Loud wish made on is am as hard. Court so avoid in plate hence. Of received mr
          breeding concerns peculiar securing landlord. Spot to many it four bred soon well to. Or am promotion in no
          departure abilities. Whatever landlord yourself at by pleasure of children be.
        </Text>
      </Background>
    </Section3Wrapper>
  );
}

export default Section3;

const Section3Wrapper = styled.section`
  margin-top: 140px;
`;

const Background = styled.div`
  margin: 0 auto;
  background: url(${backgroundImage}) no-repeat center / cover;
  width: 1440px;
  padding: 176px 292px 300px;
`;

const Title = styled.h2`
  color: #fafafa;
  font-size: 3.375rem;
  font-weight: 500;
  line-height: 4.75rem;
  text-align: center;
`;

const Quote = css`
  content: '';
  background: url(${bigDoubleQuote}) no-repeat center / cover;
  display: block;
  width: 91px;
  height: 64px;
  position: absolute;
`;

const Text = styled.p`
  margin-top: 50px;
  color: #fafafa;
  font-size: 1.125rem;
  line-height: 1.75rem;
  position: relative;

  &::before {
    ${Quote}
    top: -64px;
    left: -91px;
  }

  &::after {
    ${Quote}
    bottom: -64px;
    right: -91px;
    transform: rotate(180deg);
  }
`;
