import React, { useState } from 'react';

const StatefulForm = () => {
    const [email,setEmail]=useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = e=>{
        e.preventDefault()

        console.log(email)
        console.log(password)
    
    
    }

    const handleEmail = e =>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword = e=>{
        setPassword(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="text" name='name' defaultValue={'Name'} />
                <br />
                <input type="email" onChange={handleEmail} name="email" defaultValue={'Email'} id="" /><br />
                <input onChange={handlePassword} type="password" name="password" id="" defaultValue={'Password'} /><br />
                <input type="submit" value="submit" name='submit' />
            </form>
        </div>
    );
};

export default StatefulForm;