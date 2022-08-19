import React, { Component } from 'react';
import '../../scss/all.css';

class ReactDay1C extends Component {
    state = { 
        user : {
            firstName: 'Candy',
            lastName: 'Wang',
            description: '前端工程師',
            avatar: 'https://i.pravatar.cc/300?img=31'
        }
        
     } 


    formatName=()=>{
        return this.state.user.firstName + ' ' + this.state.user.lastName ;
    }

    render() { 
        return (
            <>
            <div className='card'>
                <img src={this.state.user.avatar} alt="頭貼" />
                <h3><b>{this.formatName()}</b></h3>
                <p>{this.state.user.description}</p>
                <p className='text-blue'> 每天練習 React 1次!</p>
            </div>
           
            </>
        );
    }
}
 
export default ReactDay1C;