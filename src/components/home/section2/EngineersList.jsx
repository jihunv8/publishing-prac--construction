import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { screenSmall, screenXSmall } from '../../../global-style/theme/mediaSize';

import EngineerProfile from './EngineerProfile';

import profileImage1 from '../../../images/profile-image1.png';
import profileImage2 from '../../../images/profile-image2.png';
import profileImage3 from '../../../images/profile-image3.png';

const dummyData = [
  {
    imageUrl: profileImage1,
    imageAlt: 'profile-image1',
    name: 'Chris Enans',
    workArea: 'Michigan, TX',
    number: '989-653-2986',
    email: 'ChrisEvans@const.com',
  },
  {
    imageUrl: profileImage2,
    imageAlt: 'profile-image2',
    name: 'Alison Kiara',
    workArea: 'Michigan, TX',
    number: '752-433-1234',
    email: 'alisonkiara@const.com',
  },
  {
    imageUrl: profileImage3,
    imageAlt: 'profile-image3',
    name: 'Adam Gates',
    workArea: 'Michigan, TX',
    number: '129-345-2685',
    email: 'adamgates@const.com',
  },
];

function EngineersList({ profileDataList = dummyData }) {
  const isScreenSmall = useMediaQuery({ query: `(max-width: ${screenSmall})` });
  const isScreenXSmall = useMediaQuery({ query: `(max-width: ${screenXSmall})` });

  let displayNum = 3;
  if (isScreenSmall) displayNum = 2;
  if (isScreenXSmall) displayNum = 1;

  return (
    <EngineersListWrapper>
      {profileDataList.slice(0, displayNum).map((data, i) => {
        return (
          <EngineerProfile
            key={i}
            imageUrl={data.imageUrl}
            imageAlt={data.imageAlt}
            name={data.name}
            workArea={data.workArea}
            number={data.number}
            email={data.email}
          />
        );
      })}
    </EngineersListWrapper>
  );
}

export default EngineersList;

const EngineersListWrapper = styled.ul`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;
