import React, { Component } from 'react';

class Conditional extends Component {

    state = {
        loading: false,
    }


    render(){
        if(this.state.loading){
            return(
                <div>Loading. . .</div>
            )
        }else{
            return(
                <div>Hello this is the conditional Component</div>
            )
        }
    }
}

export default Conditional;