import styled from 'styled-components';
import { screenLarge } from '../../../global-style/theme/mediaSize';

import CommonButton from '../../common/buttons/CommonButton.styled';
import CumulativeData from './CumulativeData';

function HeaderContent() {
  return (
    <HeaderContentWrapper>
      <Title>
        <span>Masters</span> of Consistency and <span>Quality</span>.
      </Title>
      <Text>
        Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
      </Text>
      <ButtonContainer>
        <CommonButton inversion>Explore </CommonButton>
        <CommonButton>Contact Us</CommonButton>
      </ButtonContainer>
      <DataContainer>
        <CumulativeData data="25,356" dataName="Projects Done" />
        <CumulativeData data="15,200" dataName="Buildings Done" shapeColor="#40A2D5" />
        <CumulativeData data="350+" dataName="Total Employees" shapeColor="#42B918" />
      </DataContainer>
    </HeaderContentWrapper>
  );
}

export default HeaderContent;

const HeaderContentWrapper = styled.div`
  margin-top: 118px;
  padding: 0 20px;
`;

const Title = styled.h2`
  width: 680px;
  color: #313131;
  font-size: 4rem;
  line-height: 1.2;
  > span {
    color: #40a2d5;
  }
`;

const Text = styled.p`
  width: 540px;
  margin-top: 40px;
  color: #6b6b6b;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @media screen and (max-width: ${screenLarge}) {
    width: 420px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 443px;
  display: flex;
  justify-content: space-between;
`;

const DataContainer = styled.div`
  width: 554px;
  display: flex;
  justify-content: space-between;
  margin-top: 90px;
`;
