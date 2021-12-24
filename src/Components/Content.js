import { useState, useEffect } from "react";
import axios from "axios";

//Content component
const Content = () => {
  //display data from https://api.chucknorris.io/jokes/random
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setData(res.data);
    });
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <main className="flex-grow">
      <p className="text-center px-2 pt-44 text-2xl">{data.value}</p>
      <div className="button flex items-center">
        <div className="button2 flex justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={refreshPage}
          >
            Click for a new joke
          </button>
        </div>
      </div>
    </main>
  );
};

export default Content;
