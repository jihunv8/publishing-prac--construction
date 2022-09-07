import styled from 'styled-components';

import NumberBox from './NumberBox';

function Content({
  num = '01',
  shapeColor = 'tomato',
  text = 'And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.',
}) {
  return (
    <ContentWrapper>
      <NumberBox num={num} shapeColor={shapeColor} />
      <Text>{text}</Text>
    </ContentWrapper>
  );
}

export default Content;

const ContentWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: flex-end;
`;

const Text = styled.p`
  color: #6b6b6b;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-left: 37px;
`;
