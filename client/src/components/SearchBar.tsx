import React, { useState, useEffect } from 'react';
import { Irecipe, fetchResults } from '../services/recipesSrv';

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const [resultSearch, setResults] = useState<Irecipe[]>([]);

  const getSearch = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) => {
    setSearch(value);
  };

  return (
    <div>
      <input type="text" placeholder="Une recette..." onChange={getSearch} />
      <button>Let's go...</button>
    </div>
  );
};
