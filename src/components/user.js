import React from 'react';
import UserHoc from './hoc/userHoc';

const User2 = () => {
    return (
        <div>
            User2
        </div>
    )
}
const User = () => {
    return (
        <div>
            User
        </div>
    )
}

export default UserHoc(User,User2, 'Hello i am');    