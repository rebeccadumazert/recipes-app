import React from 'react';
import { Irecipe } from '../services/recipesSrv';

interface IrecipeProps {
  recipe: Irecipe;
}
export const Recipe: React.FC<IrecipeProps> = ({
  recipe: {
    recipe: { uri, image, label },
  },
}) => {
  return (
    <div>
      <div>
        <img src={image} alt={label} />
      </div>
      <p>{label}</p>
    </div>
  );
};
