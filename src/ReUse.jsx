import React from 'react';

const ReUse = ({children, submitBtn='Submit', handleChange}) => {

    const handleLocalChange = e=>{
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value
        }
        handleChange(data)
    }

    return (
        <div>
            <h3>{children}</h3>
            <form onSubmit={handleLocalChange} >
                <input defaultValue={'Name'} type="text" />
                <br />
                <br />
                <input type="email" name='email' />
                <br />
                <br />
                <input type="submit" value={submitBtn} />
            </form>
        </div>
    );
};

export default ReUse;