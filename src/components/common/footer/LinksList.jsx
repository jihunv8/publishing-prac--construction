import styled from 'styled-components';

function LinksList({ title = '', linksList = [] }) {
  return (
    <div>
      <Title>{title}</Title>
      <LinksContainer>
        {linksList.map((link) => (
          <Link href={link.hrek}>{link.name}</Link>
        ))}
      </LinksContainer>
    </div>
  );
}

export default LinksList;

const Title = styled.h2`
  color: #313131;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.6875rem;
`;

const LinksContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: #6b6b6b;
  line-height: 1.5rem;

  &:not(:first-child) {
    margin-top: 18px;
  }
`;
