import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [teste, setTeste] = useState()

  useEffect(() => {

    if (teste === undefined) {

      axios.get('http://localhost:3001/')
        .then(function (response) {
          setTeste(response)
          console.log(response)
        })
        .catch(function (error) {
          console.error(error);
        });

    }

  }, [teste])

  return (
    <>
      <h1>sadhasjkhdkjsah</h1>
    </>
  );
}

export default App;
