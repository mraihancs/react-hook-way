import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './SimpleForm'
import StatefulForm from './StatefulForm'
import RefForm from './RefForm'
import HookForm from './HookForm'
import CustomHook from './CustomHook'
import CustHook from './CustHook'

import CHook from './CHook'
import ReUsableForm from '../ReUsableForm'
import ReUse from './ReUse'
function App() {
  // const handleSignupChange = data => {
  //   console.log('sign up data', data)
  // }
  // const handleUpdateprofileChange = data => {
  //   console.log(' update profile data', data)
  // }


  const handleSignup = data =>{
    console.log(data)
  }

  const handleUpdate = data =>{
    console.log(data)
  }
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm>
      <RefForm></RefForm> */}
      {/* <HookForm></HookForm>  */}
      {/* <CustomHook></CustomHook> */}
      {/* <CustHook></CustHook> */}
      {/* <CHook></CHook> */}
      {/* <ReUsableForm formTitle={'Sign Up'} handleChange={handleSignupChange}>
        <div><h3>Sign Up Form</h3>
          <p>We are concern about your credential</p>
        </div>
      </ReUsableForm>
      <ReUsableForm formTitle={'Profile Update'} handleChange={handleUpdateprofileChange} submitBtn='Update'>
        <div><h3>Update Form</h3>
          <p>We are concern about your credential</p>
        </div>
      </ReUsableForm> */}


      <ReUse submitBtn='Submit' handleChange={handleSignup}>
        <div><h3>Sign Up</h3>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, harum.</p></div>
      </ReUse>
      <ReUse submitBtn='Update' handleChange={handleUpdate}>
        <div><h3>Update Form</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, harum.</p></div>
      </ReUse>
    </>
  )
}

export default App
