import React from 'react';

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(handleSubmit)
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        
        

    }
    return (
        <div>
            {/*    <form>
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" defaultValue={'marufraihanofficial@gmail.com'} id="" /><br />
                <input type="password" name="password" id="" />
                <input type="submit" value="submit" name='submit' />
            </form> */}

            
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' defaultValue={'Name'} />
                <br />
                <input type="email" name="email" defaultValue={'Email'} id="" /><br />
                <input type="password" name="password" id="" defaultValue={'Password'} /><br />
                <input type="submit" value="submit" name='submit' />
            </form>
        </div>
    );
};

export default SimpleForm;