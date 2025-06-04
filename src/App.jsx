import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './SimpleForm'
import StatefulForm from './StatefulForm'
import RefForm from './RefForm'
import HookForm from './HookForm'
import CustomHook from './CustomHook'

function App() {


  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm>
      <RefForm></RefForm> */}
      {/* <HookForm></HookForm>  */}
      <CustomHook></CustomHook>
      
   
    </>
  )
}

export default App
