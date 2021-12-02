import { useRecoilValue } from 'recoil';

import { userSlice } from '@/recoil/user.slice';
import { styled } from '@stitches/react';

const Container = styled('div', {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
});

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const AvatarWrapper = styled('div', {
  width: '200px',
  alignItems: '200px',
  marginBottom: '2px',
});

const Avatar = styled('img', {
  borderRadius: '9999px',
  width: '100%',
  height: '100%',
});

const Text = styled('p', {
  fontSize: '16px',
  textAlign: 'center',
  fontWeight: 500,
});

export default function UserProfilePage() {
  const user = useRecoilValue(userSlice);
  return (
    <Container>
      <Content>
        <AvatarWrapper>
          <Avatar src={user.avatarUrl} />
        </AvatarWrapper>
        <Text>
          {user.name} {user.lastname}
        </Text>
        <Text>{user.email}</Text>
      </Content>
    </Container>
  );
}
