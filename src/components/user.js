import React from 'react';
import UserHoc from './hoc/userHoc';

const User = () => {
    return (
        <div>
            User
        </div>
    )
}

export default UserHoc(User, 'Hello i am');    