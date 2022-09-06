import styled from 'styled-components';

import image from '../../../images/millo-lin.png';

function HeaderBackground() {
  return (
    <HeaderBackgroundArea>
      <Background>
        <Shape1 />
        <Shape2 />
        <Image />
      </Background>
    </HeaderBackgroundArea>
  );
}

export default HeaderBackground;

const HeaderBackgroundArea = styled.div`
  width: 1340px;
  margin: 0 auto;
`;

const Background = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: 0;
  display: grid;
  grid-template:
    'shape1 image' auto
    'shape2 shape2' auto
    / auto auto;
`;

const Image = styled.div`
  grid-area: image;
  width: 647px;
  height: 850px;
  background: url(${image}) no-repeat center / cover;
  border-radius: 10px 10px 10px 300px;
`;

const Shape = styled.div`
  background-color: #c9e7ff;
  opacity: 0.4;
`;

const Shape1 = styled(Shape)`
  grid-area: shape1;
  width: 97px;
  height: 213px;
  margin-top: 97px;
  border-radius: 106.5px 0 0 5px;
`;

const Shape2 = styled(Shape)`
  grid-area: shape2;
  width: 238px;
  height: 83px;
  margin-right: 26px;
  margin-left: auto;
  border-radius: 0 0 106.5px 5px;
`;
