import React from 'react';

const UserHoc = (WrappedComponent,WrappedComponent2, arg1) => {

    const value = arg1;
    return (props) => (
        <div>
            { value }
            <WrappedComponent {...props}/>
            <WrappedComponent2 {...props}/>
        </div>
    )
}

export default UserHoc;