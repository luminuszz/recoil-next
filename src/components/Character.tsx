import React from 'react';

import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { normalizedCharacterState, Character } from '@/recoil/caracters.slice';
import { styled } from '@stitches/react';

const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const P = styled('p', {
  fontSize: '15px',
  marginTop: '5px',
});

const Img = styled('img', {
  width: '200px',
  height: '200px',
  borderRadius: '9999px',
});

export function Character() {
  const { state, contents } = useRecoilValueLoadable(normalizedCharacterState);

  if (state === 'loading') {
    return <p>Carregando</p>;
  }

  if (contents) {
    const { image, name, status } = contents as Character;

    return (
      <Card>
        <Img src={image} alt={name} />
        <P>{name}</P>
        <P>{status === 'unknown' ? 'Desconhecido' : status}</P>
      </Card>
    );
  }

  return null;
}
