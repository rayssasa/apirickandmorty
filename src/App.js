import React, { useState } from 'react'
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import Logo from './images/logo.png';
import './App.css';
import './Components/Styles.css';
import Pagination from './Components/Pagination';
import Search from './Components/Search';
import Loading from './images/loading.png';


const App = () => {
  const [query, setQuery] = useState ("");
  const [itens, setItens] = useState ([])
  const [loading, setLoading] = useState (false);

  const [ itensPerPage, setItensPerPage ] = useState(10);
  const [ currentPage, setCurrentPage ] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

  const url = `https://rickandmortyapi.com/api/character/?name=${query}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setItens(result.data.results)
    console.log(result)
    setQuery("");
  };
  const onChange = e => {
    setQuery(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getData();
  }
  return (
    <body>
      <div>
      { loading ? (
        <img className="loading" src={Loading} loading={loading} alt="imagemloading"/>
        ) : (
      <>
        <div>
          <img className="logo" src={Logo} alt="Rick and Morty"/>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input 
              type="text" 
              className="input" 
              placeholder="  Search characters" 
              autocomplete="off" 
              onChange={onChange}
              value={query}
            />
            <input type="submit" className="btn" value="Search" />
          </form>
        </div>
            <div className="list">
              {itens !== [] && currentItens.map(item => <Search key={uuidv4()} item={item} />)}
            </div>
            <Pagination
              itensPerPage={itensPerPage}
              setItensPerPage={setItensPerPage}
              pages={pages}
              setCurrentPage={setCurrentPage}
            />
          </>
      )}
    </div>
    </body>
  )
}

export default App
