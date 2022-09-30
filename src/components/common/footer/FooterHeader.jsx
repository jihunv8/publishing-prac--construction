import styled from 'styled-components';

import Logo from '../Logo';
import SNSButton from './SNSButton';

import facebookIcon from '../../../images/icons/facebook.png';
import twiterIcon from '../../../images/icons/twiter.png';
import instaIcon from '../../../images/icons/insta.png';
import { screenSmall } from '../../../global-style/theme/mediaSize';

function FooterHeader() {
  return (
    <FooterHeaderWrapper>
      <Logo />
      <Text>You’ll find your next Home loan valu you prefer.</Text>
      <ButtonContainer>
        <SNSButton iconUrl={facebookIcon} iconAlt="facebook" />
        <SNSButton iconUrl={twiterIcon} iconAlt="twiter" />
        <SNSButton iconUrl={instaIcon} iconAlt="insta" />
      </ButtonContainer>
    </FooterHeaderWrapper>
  );
}

export default FooterHeader;

const FooterHeaderWrapper = styled.div`
  width: 236px;

  @media screen and (max-width: ${screenSmall}) {
    order: 0;
  }
`;

const Text = styled.p`
  margin-top: 30px;
  color: #6b6b6b;
  line-height: 1.75rem;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 117px;
  display: flex;
  justify-content: space-between;
`;
