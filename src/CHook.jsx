import React from 'react';
import useCHook from './useCHook';

const CHook = () => {
    const valueSet = useCHook()

    const handleChange = e=>{
        e.preventDefault()
        console.log(valueSet.val)
    }
    return (
        <div>
            <form onSubmit={handleChange}>
                <input type="text" />
                <br />
                <input {...valueSet} type="email" name="" id="" /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default CHook;