import styled from 'styled-components';
import { getProp } from '../../../utils/styledUtil';

function NumberBox({ num = '', shapeColor = '' }) {
  return (
    <NumberBoxWrapper>
      <Number>{num}</Number>
      <Shape shapeColor={shapeColor} />
    </NumberBoxWrapper>
  );
}

export default NumberBox;

const NumberBoxWrapper = styled.div`
  width: 6.375rem;
  height: 6.375rem;
  flex-shrink: 0;
`;

const Number = styled.div`
  width: fit-content;
  color: #313131;
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 4.5rem;
  margin-left: auto;
  margin-right: 0;
`;

const Shape = styled.div`
  background-color: ${getProp('shapeColor')};
  width: 4.75rem;
  height: 4.75rem;
  border-radius: 0.3125rem 2.375rem;
  margin-top: -2.875rem;
`;
