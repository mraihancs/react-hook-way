import React from 'react';

const ReUsableForm = ({ formTitle, children, handleChange, submitBtn = 'Submit' }) => {
    // const handleChange=e=>{
    //     e.preventDefault()
    // }
    const handleLocalSubmit = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleChange(data)

    }
    return (
        <div>
            <h2>{children}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input name='name' type="text" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtn} />
            </form>
        </div>
    );
};

export default ReUsableForm;