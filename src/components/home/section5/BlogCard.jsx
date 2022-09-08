import styled from 'styled-components';
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
`;

const Title = styled.h3`
  color: #fff;
  font-family: source-sans-pro, sans-serif;
  font-size: 1.6875rem;
  font-weight: bold;
  line-height: 2.125rem;
`;

const Text = styled.p`
  margin-top: 22px;
  color: #fff;
  font-family: source-sans-pro, sans-serif;
  line-height: 1.25rem;
`;

const ReadMoreButton = styled(CommonButton)`
  margin-top: 36px;
  width: 202px;
  color: #fff;
  border-color: #fff;
`;
