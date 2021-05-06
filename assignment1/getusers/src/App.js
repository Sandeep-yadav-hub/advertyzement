import React,{useEffect,useState} from "react"
import './App.css';

import Header from "./components/header/Header"
import Users from "./components/users/Users"
import axios from "axios";


function App() {
  const [users,setUsers] = useState([])
  const [loadingState, setLoadingState] = useState();

  const getUser = async()=>{
    setLoadingState(true)
    const response = await axios.get("https://reqres.in/api/users?page=1")
    setTimeout(() => {
      setUsers(response.data.data)
      setLoadingState(false)
    }, 100);
  }


  return (
    <div className="App">
      <Header getUser={getUser} />
      <Users loadingState={loadingState} users={users} />
    </div>
  );
}

export default App;
