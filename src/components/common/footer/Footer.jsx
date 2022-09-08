import styled from 'styled-components';
import { contentsAreaXLarge } from '../../../global-style/theme/mediaSize';
import FooterHeader from './FooterHeader';
import InputMail from './InputMail';
import LinksList from './LinksList';

const resourcesLinksList = {
  title: 'Resources',
  linksList: [
    { href: '', name: 'Our Agents' },
    { href: '', name: 'Member Stories' },
    { href: '', name: 'Video' },
    { href: '', name: 'Free trial' },
  ],
};
const companyLinksList = {
  title: 'Company',
  linksList: [
    { href: '', name: 'Patnerships' },
    { href: '', name: 'Terms of use' },
    { href: '', name: 'Privacy' },
    { href: '', name: 'Sitemap' },
  ],
};

function Footer() {
  return (
    <FooterWrapper>
      <ContentsArea>
        <MainContents>
          <FooterHeader />
          <LinksList title={resourcesLinksList.title} linksList={resourcesLinksList.linksList} />
          <LinksList title={companyLinksList.title} linksList={companyLinksList.linksList} />
          <InputMail />
        </MainContents>
        <Line />
        <Copyright>Copyright construction.com, All rights reserved.</Copyright>
      </ContentsArea>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer``;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;
`;

const MainContents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  margin-top: 68px;
  border: solid 1px #f4f4f4;
`;

const Copyright = styled.p`
  margin-top: 40px;
  margin-bottom: 40px;
  color: #c2c2c2;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  text-align: center;
`;
