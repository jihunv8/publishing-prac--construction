import styled from 'styled-components';

import blackArrow from '../../../images/icons/black-arrow.png';
import whiteArrow from '../../../images/icons/white-arrow.png';

function ArrowButton({ right = false }) {
  return (
    <ArrowButtonWrapper right={right}>
      <img src={right ? whiteArrow : blackArrow} />
    </ArrowButtonWrapper>
  );
}

export default ArrowButton;

const ArrowButtonWrapper = styled.button`
  background-color: ${({ right }) => (right ? '#40A2D5' : '#fff')};
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
