import styled from 'styled-components';
import { screenLarge, screenMiddle, screenSmall, screenXSmall } from '../../../global-style/theme/mediaSize';
import { getProp } from '../../../utils/styledUtil';
import CommonButton from '../../common/buttons/CommonButton.styled';

function BlogCard({ title = '', text = '', bgUrl = '', readmoreBtn = false }) {
  return (
    <BlogCardWrapper bgUrl={bgUrl}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {readmoreBtn && <ReadMoreButton>Read More</ReadMoreButton>}
    </BlogCardWrapper>
  );
}

export default BlogCard;

const BlogCardWrapper = styled.div`
  width: 496px;
  height: 467px;
  padding-bottom: 60px;
  background: url(${getProp('bgUrl')}) no-repeat center / cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: ${screenLarge}) {
    width: 394px;
    height: 371px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: 331px;
    height: 312px;
    padding-bottom: 40px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 394px;
    height: 371px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: 285px;
    height: 269px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Title = styled.h3`
  color: #fff;
  font-family: source-sans-pro, sans-serif;
  font-size: 1.6875rem;
  font-weight: bold;
  line-height: 2.125rem;

  @media screen and (max-width: ${screenMiddle}) {
    font-size: 1.375rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 1.125rem;
  }
`;

const Text = styled.p`
  margin-top: 22px;
  color: #fff;
  font-family: source-sans-pro, sans-serif;
  line-height: 1.25rem;

  @media screen and (max-width: ${screenMiddle}) {
    margin-top: 16px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 0.875rem;
  }
`;

const ReadMoreButton = styled(CommonButton)`
  margin-top: 36px;
  width: 202px;
  color: #fff;
  border-color: #fff;

  @media screen and (max-width: ${screenMiddle}) {
    margin-top: 28px;
    font-size: 1rem;
    min-height: 56px;
  }
`;
