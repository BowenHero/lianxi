
import React from "react";
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
        }

    }
    componentDidMount(){
        console.log(this.props.title);
        console.log(88888);
        this.timer = setInterval(() => this.tick(),1000)
    }


    
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }

    render(){
        return(
            <div>
                <h1>hello world</h1>
                <h2>现在是{this.state.date.toLocaleString()}</h2>  
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default Clock;