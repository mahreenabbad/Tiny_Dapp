import { useState,useEffect } from 'react'
import ABI from"./ABI/ABI.json"

import Web3 from 'web3'
import './App.css'
import ReadContract from './components/ReadContract'
import WriteContract from './components/WriteContract'
//1st create components
//2nd connect to blockchain
//3rd create an instance of smart contract

function App() {
  const [state, setState] = useState({web3:null,contract:null})
  useEffect(()=>{
    const template=async()=>{
     let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
     const contrctAddress ="0x031F7Fe190C750FbED292638EFbA6E589b0851dB"
     const contractinstance = new web3.eth.Contract(ABI,contrctAddress)
     setState({web3:web3,contract:contractinstance})
    }
    template()
  },[])

  return (
    <>
      <ReadContract state={state}/><br/>

      <WriteContract state={state}/>
    </>
  )
}

export default App
