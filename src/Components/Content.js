import { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [facts, setFacts] = useState([]);

useEffect(() => {
  fetch("https://numbersapi.p.rapidapi.com/random/trivia")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setFacts(result);
      },(error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, []);

if (error) {
  return <div>Error: {error.message}</div>
}else if(!isLoaded){
  return <div>Loading...</div>;
}else{
  return (
    <main>
      <ul>
        {facts.map(facts => (<li key={facts}>{facts}</li>))}
      </ul>
    </main>
  )
}
}

export default Content

