import styled from 'styled-components';

function Section2Header() {
  return (
    <Section2HeaderWrapper>
      <Title>Our Best Engineers</Title>
      <Text>
        Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
      </Text>
    </Section2HeaderWrapper>
  );
}

export default Section2Header;

const Section2HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3.375rem;
  font-weight: 600;
  line-height: 3.5rem;
  text-align: center;
`;

const Text = styled.p`
  width: 672px;
  margin-top: 30px;
  color: #6b6b6b;
  font-size: 1.25rem;
  font-family: roboto, sans-serif;
  line-height: 1.75rem;
  text-align: center;
`;
