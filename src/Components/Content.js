import { useState, useEffect } from 'react';
import axios from 'axios';

//Content component
const Content = () => {
  //display data from https://api.chucknorris.io/jokes/random
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/random').then(res => {
      setData(res.data);
    });
  }
  , []);

  return (
    <main className="flex-grow">
      <p className="text-center px-2 pt-44 text-2xl">{data.value}</p>
    </main>
  );
}

export default Content;
