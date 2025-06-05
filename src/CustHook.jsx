import React from 'react';
import useCustHook from './useCustHook';

const CustHook = () => {
    const [val,handleChange] = useCustHook()
    const handleChng = e =>{
        e.preventDefault()
        console.log(val)
    }
    return (
        <div>
            <form onSubmit={handleChng}>
                <input onChange={handleChange} value={val} type="text" name="name" id="" /><br />
                <input type="email" name="email" id="" /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default CustHook;