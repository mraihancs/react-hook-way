import React from 'react';
import useHook from './useHook';

const CustomHook = () => {
    // const [name, handleChangeDemand] = useHook('Maruf')
    const emailState = useHook('mr')

    const handleChange=(e)=>{
          
        e.preventDefault()
        console.log(emailState.val)
      
    }
    return (
        <div>
            <form onSubmit={handleChange} >
                <input  type="text" name="name" id="" /><br />
                <input {...emailState} type="email" name="email" id="" /><br />
                <input type="password" name="password" id="" /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default CustomHook;