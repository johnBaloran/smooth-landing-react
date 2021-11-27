// NPM MODULES
import { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENET IMPORTS
import Form from './componenets/Form';

import './App.css';

function App() {

  const [imageCatalogue, setImageCatalogue] = useState({})


  useEffect(() => {
    // a variable that holds your api key
    const apikey = '5q5uAORY7EjGub7EtQCRVbF5fN39wHzDRL0huQkWVtg';
    axios({
      url: "https://api.unsplash.com/search/photos",
      method: 'GET',
      responseType: 'json',
      params: {
        query: "galaxy",
        client_id: apikey,
        per_page: 30
      }
    }).then((results) => {
      setImageCatalogue(results.data.results)
    })
  }, [])

  return (
    <div className="App">
      <Form
        images={imageCatalogue}
      />
    </div>
  );
}

export default App;
