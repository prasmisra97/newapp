import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState,useEffect} from "react";

const url ="https://gorest.co.in/public/v2/users";
function App() {
  const[users, setUsers] =useState(null);
  useEffect(()=>{
    axios.get(url).then(res =>{
        setUsers(res.data[0]);
        console.log(res.data);
        
    });
    function App() {
      const[users, setUsers] =useState(null);
      useEffect(()=>{
        axios.get(url).then(res =>{
            setUsers(res.data[0]);
            console.log(res.data);
            
        });
  },[]);
  if(!users) return "No post!"
  return (
    <div className="App">
     <h1>{users.name}</h1>
    </div>
  );
}

export default App;
