import styled from 'styled-components';

import EngineerProfile from './EngineerProfile';

import profileImage1 from '../../../images/profile-image1.png';
import profileImage2 from '../../../images/profile-image2.png';
import profileImage3 from '../../../images/profile-image3.png';

function EngineersList() {
  return (
    <EngineersListWrapper>
      <EngineerProfile
        imageUrl={profileImage1}
        imageAlt="profile-image1"
        name="Chris Enans"
        workArea="Michigan, TX"
        number="989-653-2986"
        email="ChrisEvans@const.com"
      />
      <EngineerProfile
        imageUrl={profileImage2}
        imageAlt="profile-image2"
        name="Alison Kiara"
        workArea="Michigan, TX"
        number="752-433-1234"
        email="alisonkiara@const.com"
      />
      <EngineerProfile
        imageUrl={profileImage3}
        imageAlt="profile-image3"
        name="Adam Gates"
        workArea="Michigan, TX"
        number="129-345-2685"
        email="adamgates@const.com"
      />
    </EngineersListWrapper>
  );
}

export default EngineersList;

const EngineersListWrapper = styled.ul`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;
