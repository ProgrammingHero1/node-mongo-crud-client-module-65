import React from 'react';
import { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});
    const handleAddUser = event =>{
        event.preventDefault();
        console.log(user);
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2>Please add a new User</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='address' placeholder='address' required />
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" id="" placeholder='email' required />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;