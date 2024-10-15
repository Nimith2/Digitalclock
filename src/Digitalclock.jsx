import { Component } from 'react'
import "./Styling/style.css"
export default class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : new Date().toLocaleTimeString()
        };
    }
    componentDidMount(){   
        this.timeId = setInterval(()=>{
            this.setState({time: new Date().toLocaleTimeString()})
        },1000);
    }
    render(){
        return(
            <div className='clock-container' >
                <div className='clock'>
                    {this.state.time}
                </div>
            </div>
        )
    }
}