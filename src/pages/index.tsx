import { useEffect } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { Character } from '@/components/Character';
import { characterIdState, characterState } from '@/recoil/caracters.slice';
import { api } from '@/services/api';
import { styled } from '@stitches/react';

const Flex = styled('div', {
  display: 'flex',
  flexDirection: '',
  variants: {
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
  },

  defaultVariants: {
    direction: 'row',
  },
});

const P = styled('p', {
  cursor: 'pointer',
});

export default function HomePage() {
  const [characters, setCharacters] = useRecoilState(characterState);

  const setCharacterId = useSetRecoilState(characterIdState);

  const handleClickCharacterName = (id: number) => setCharacterId(id);

  useEffect(() => {
    api
      .get('/character?page=4')
      .then(({ data }) => setCharacters(data.results));
  }, [setCharacters]);

  return (
    <Flex direction="column">
      {characters.map((character) => (
        <P
          onClick={() => handleClickCharacterName(character.id)}
          key={character.id}
        >
          {character.name}
        </P>
      ))}

      <Character />
    </Flex>
  );
}
