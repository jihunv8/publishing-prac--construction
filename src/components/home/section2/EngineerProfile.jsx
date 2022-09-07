import styled from 'styled-components';

import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';

function EngineerProfile({ imageUrl = '', imageAlt = 'image', name = 'none', workArea = '', number = '', email = '' }) {
  return (
    <EngineerProfileWrapper>
      <ProfileHeader />
      <ProfileContent
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        name={name}
        workArea={workArea}
        number={number}
        email={email}
      />
    </EngineerProfileWrapper>
  );
}

export default EngineerProfile;

const EngineerProfileWrapper = styled.li`
  width: 362px;
  padding: 30px 30px 60px;
  box-shadow: 20px 20px 50px rgba(198, 217, 225, 0.3);
`;
