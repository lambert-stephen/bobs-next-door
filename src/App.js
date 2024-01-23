import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import {useEffect, useState} from "react"
function App() {

  const [stores, setStores] = useState([])
  const [search, setSearch] = useState("")
  console.log(search)

  useEffect(()=> {
    fetch("http://localhost:8085/stores")
    .then(response => response.json())
    .then(setStores)
  }, [])

  function addNewStore(newStore){
    setStores([...stores, newStore])
  }

  const storesToDisplay = stores.filter((store)=> {
    return store.name.toUpperCase().includes(search.toUpperCase())
  })

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search search={search} setSearch = {setSearch}/>
      <NewStoreForm addNewStore={addNewStore}/>
      <StoreList stores = {storesToDisplay} />
    </div>
  );
}

export default App;
