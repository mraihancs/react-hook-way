import React from 'react';
import useInput from './useInput';

const HookForm = () => {
    const [value, handleChange] = useInput('Maruf')
    const handleManage=(e)=>{
e.preventDefault()
console.log(value)

    }
    return (
        <div>
            <form onSubmit={handleManage}>
                <input onChange={handleChange} value={value} type="text" name='name' />
                <input type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;