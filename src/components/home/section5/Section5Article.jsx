import styled from 'styled-components';

import BlogCard from './BlogCard';

import blog1Image from '../../../images/blog1-img.png';
import blog2Image from '../../../images/blog2-img.png';

const tempTitle = 'Unleash Your Creativity';
const tempText = 'Nine for Mortal Men, doomed to die, One for';

function Section5Article() {
  return (
    <Section5ArticleWrapper>
      <BlogCard title={tempTitle} text={tempText} bgUrl={blog1Image} />
      <BlogCard title={tempTitle} text={tempText} bgUrl={blog2Image} readmoreBtn />
    </Section5ArticleWrapper>
  );
}

export default Section5Article;

const Section5ArticleWrapper = styled.article`
  margin-top: 80px;
  padding-right: 92px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 2px;
    background-color: #cbcbcb;
  }

  &::-webkit-scrollbar-thumb {
    width: 3px;
    background-color: #40a2d5;
  }

  &::-webkit-scrollbar-track {
  }
`;
