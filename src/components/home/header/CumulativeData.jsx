import styled from 'styled-components';

function CumulativeData({ data = '', dataName = '', shapeColor = '#FE8432' }) {
  return (
    <CumulativeDataWrapper>
      <Shape shapeColor={shapeColor} />
      <Data>{data}</Data>
      <DataName>{dataName}</DataName>
    </CumulativeDataWrapper>
  );
}

export default CumulativeData;

const CumulativeDataWrapper = styled.div`
  position: relative;
`;

const Shape = styled.div`
  background-color: ${({ shapeColor }) => shapeColor};
  width: 40px;
  height: 20px;
  border-radius: 20px 20px 0 0;
  transform: rotate(-54deg);
  position: absolute;
  top: -11px;
  left: -8px;
`;

const Data = styled.div`
  position: relative;
  color: #313131;
  font-size: 2.5rem;
  font-weight: 500;
  line-break: 2.5rem;
`;

const DataName = styled.div`
  margin-top: 15px;
  color: #6b6b6b;
  font-size: 1.25rem;
  line-height: 1.625rem;
`;
