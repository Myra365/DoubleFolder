import React from 'react'

class LeftApi extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        const url = 'https://raw.githubusercontent.com/robertom123/Quote/master/Quote.json'
        fetch(url)
        .then(res=> res.json())
        .then(
            res => {
                console.log(res)
                this.setState({
                    isLoaded: true,
                    items: res[this.props.rando].text
                })
            }
        )
    }
    render(){
        if(!this.state.isLoaded){
            return<div>Loading...</div>
        }
        else{
            return (
                <div>
                    <h2 className = "tc bb bw2">Wall of Encouragement</h2>
                    <h4 className = "tc">{this.state.items}</h4>
                    
                </div>
            )
        }
    }
}

export default LeftApi;