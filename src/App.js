import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [value,setValue]= useState();
  const [list,setList]= useState([]);
  useEffect(() => {
    console.log('val', value)
    setTimeout(() => {
      setValue('2')
    }, 1000)
  }, [value])
  return (
      <span>
          <input
              onChange={(e)=>{
                  setValue(e.target.value)
              }}
              value={value}
          />
          {
              list.map((elem) => {
                  return (<span key={elem.name}>{elem.name}</span>);
              })
          }
      </span>);
}

export default App;
