import React, { Component } from "react";
import "./LifeCycleComp.css";


class LifeCycleComp extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor')  
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps')
        return null; 
    }

    componentDidMount (){
        console.log('componentDidMount')
        // setTimeout(
        //     () => this.setState({ count: 2 }), 
        //     5000
        // );
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log("nextState", nextProps);
        console.log("this.state", this.state)
        if(nextState.count >= 4){
            return  false
        }
        return true;
    }


    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate');

    }
    
    componentWillUnmount(){
        console.log('compoenentWillMount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('render')
        return(
            <div>
                <button onClick={this.changeCount} className="btn-primary">Component Button {this.state.count}</button>
            </div>
        )
    }
}




export default LifeCycleComp;