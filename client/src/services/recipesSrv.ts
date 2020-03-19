import axios from 'axios';

interface IrecipeDetails {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
}

export interface Irecipe {
  recipe: IrecipeDetails;
}

export interface Iresult {
  hits: Irecipe[];
}
export const fetchResults = async (field: string = 'chicken') => {
  const {
    data: { hits },
  } = await axios.get<Iresult>(
    `https://api.edamam.com/search?q=${field}&app_id=3c7fe3ec&app_key=129ba5ea668041d288ff2c606247d564`
  );
  console.log(hits, 'hello');
  return hits;
};
