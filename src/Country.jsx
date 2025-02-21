import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
function Country() {
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [flag, setFlag] = useState('');
  const [capital, setCapital] = useState('');
  const [language, setLanguage] = useState('');

  const getData = () => {
    Axios.get(`https://restcountries.com/v3.1/name/${inputValue}`)
      .then((response) => {
        console.log(response);
        setName(response.data[0].name.common);
        setFlag(response.data[0].flags.png);
        setCapital(response.data[0].capital);
        setLanguage(response.data[0].languages[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>Search a country!</h1>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />

      <button onClick={getData}> Click</button>
      <div>{inputValue}</div>
      <h3> {name}</h3>
      <h3> {capital}</h3>
      <h3>
        <br />
        <img src={flag} alt="" width="200px" />
      </h3>
      <h3> {language}</h3>

      <Link to="/">
        <button>HOME</button>
      </Link>
    </>
  );
}

export default Country;
