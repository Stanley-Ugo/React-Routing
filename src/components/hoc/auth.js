import React from 'react';

 const Auth = (props) => {
   const pass = 'password123';
   
   if(pass === 'password123'){
       return props.children
   }else{
       return <h3>You shall not pass!! - *inserts Ghandolf's photo*</h3>
   }
}

export default Auth;