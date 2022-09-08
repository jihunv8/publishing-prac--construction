import styled from 'styled-components';
import CommonButton from '../../common/buttons/CommonButton.styled';

import arrowIcon from '../../../images/icons/subscribe-icon.png';

function Section5Footer() {
  return (
    <Section5FooterWrapper>
      <Title>Subscribe to our Newsletter</Title>
      <Text>Age sold some full like rich new. Amounted repeated as believed in confined juvenile.</Text>
      <SubscribeButton inversion>
        SUBSCRIBE
        <img src={arrowIcon} />
      </SubscribeButton>
    </Section5FooterWrapper>
  );
}

export default Section5Footer;

const Section5FooterWrapper = styled.footer`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  width: 462px;
  color: #313131;
  font-size: 3.375rem;
  font-weight: 500;
  line-height: 3.5rem;
  text-align: center;
`;

const Text = styled.p`
  margin-top: 40px;
  width: 556px;
  color: #6b6b6b;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
`;

const SubscribeButton = styled(CommonButton)`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    margin-left: 20px;
  }
`;
