import styled from 'styled-components';

import starIcon from '../../../images/icons/star-icon.png';
import menuIcon from '../../../images/icons/menu-icon.png';

function ProfileHeader() {
  return (
    <ProfileHeaderWrapper>
      <Icon src={starIcon} alt="star-icon" />
      <Icon src={menuIcon} alt="menu-icon" />
    </ProfileHeaderWrapper>
  );
}

export default ProfileHeader;

const ProfileHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.img`
  height: 22px;
`;
