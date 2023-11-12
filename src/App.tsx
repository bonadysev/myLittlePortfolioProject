import './App.css';
import React from "react";
import { Header } from './layout/header/Header';
import styled from "styled-components";




function App() {
    return (
        <div className="App">
           <Header/>
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: forestgreen;
`

