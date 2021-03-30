import React from 'react';

export const characters = [
  {
    name: 'Boy',
    description: 'This boy looks like a boy',
    image: require('./../assets/images/characters/boy.png')
  },
  {
    name: 'Cat Girl',
    description: 'This girl looks like a cat',
    image: require('./../assets/images/characters/cat_girl.png')
  },
  {
    name: 'Horn Girl',
    description: 'This girl seems to have horns',
    image: require('./../assets/images/characters/horn_girl.png')
  },
  {
    name: 'Pink Girl',
    description: 'This girl loves pink',
    image: require('./../assets/images/characters/pink_girl.png')
  },
  {
    name: 'Princess Girl',
    description: 'Have you ever dreamed of being a princess?',
    image: require('./../assets/images/characters/princess_girl.png')
  },
];

const defaultCharactersState = {
  selected: characters[0],
  accLove: 0
};

export const CharactersStateContext = React.createContext(defaultCharactersState);
export const DispatchStateContext = React.createContext(undefined);

export const CharactersStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultCharactersState
  );
  return (
    <CharactersStateContext.Provider value={{state, dispatch}}>
      {children}
    </CharactersStateContext.Provider>
  );
};