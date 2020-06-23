import React from 'react'
import LeftApi from './API/LeftApi'

class Left extends React.Component{
    render(){
        return(
            <div>
                
                <LeftApi rando = {Math.floor(Math.random() * 10)}/>
                
            </div>
        )
    }
}
export default Left