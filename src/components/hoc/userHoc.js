import React from 'react';

const UserHoc = (WrappedComponent, arg1) => {

    const value = arg1;
    return (props) => (
        <div>
            { value }
            <WrappedComponent/>
        </div>
    )
}

export default UserHoc;