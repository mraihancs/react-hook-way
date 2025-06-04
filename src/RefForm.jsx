import React, { useEffect, useState } from 'react';

const RefForm = () => {

    const handleSubmit = e=>{
        e.preventDefault()
        console.log(e.target.value)
        console.log(nameRef.current.value)
    }

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const nameRef = useState(null)
    return (
        <div>
              <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name='name' />
                <br />
                <input type="email" name="email" defaultValue={'marufraihanofficial@gmail.com'} id="" /><br />
                <input type="password" name="password" id="" />
                <input type="submit" value="submit" name='submit' />
            </form>
        </div>
    );
};

export default RefForm;