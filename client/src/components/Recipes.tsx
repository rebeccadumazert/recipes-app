import React, { useState, useEffect } from 'react';
import { Recipe } from './Recipe';
import { Irecipe, fetchResults } from '../services/recipesSrv';

export const Recipes = () => {
  const [recipes, setRecipes] = useState<Irecipe[]>([]);
  useEffect(() => {
    const getResults = async () => {
      const datas = await fetchResults();
      setRecipes(datas);
    };
    getResults();
  }, []);
  return (
    <div>
      {recipes.map(recipe => (
        <Recipe recipe={recipe} />
      ))}
    </div>
  );
};
