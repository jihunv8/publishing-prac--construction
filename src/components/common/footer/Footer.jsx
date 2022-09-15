import styled from 'styled-components';
import {
  contentsAreaLarge,
  contentsAreaMiddle,
  contentsAreaSmall,
  contentsAreaXLarge,
  contentsAreaXSmall,
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '../../../global-style/theme/mediaSize';
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
    <footer>
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
    </footer>
  );
}

export default Footer;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;

  @media screen and (max-width: ${screenLarge}) {
    width: ${contentsAreaLarge};
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: ${contentsAreaMiddle};
  }

  @media screen and (max-width: ${screenSmall}) {
    width: ${contentsAreaSmall};
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: ${contentsAreaXSmall};
  }
`;

const MainContents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;

  @media screen and (max-width: ${screenSmall}) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
    row-gap: 50px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(1, auto);
    justify-content: center;
  }
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
