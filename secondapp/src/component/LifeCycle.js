//Get Default State
//Set Default State
//Before get Created
//Render
//After get Created


import React, {Component, Fragment} from 'react';

class LifeCycle extends Component {

    //1 Get Default State
    constructor(props){
        super(props)

        //2Set Default State
        this.state={
            title:'LifeCycle'
        }

        console.log(">>>>>>In Side constructor<<<<")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>>>In Side shouldComponentUpdate<<<<")
        if(nextState.title === this.state.title){
            return false;
        }else{
            return true;
        }
    }

    //3 Before get Created
    componentWillMount(){
        console.log(">>>>>>In Side componentWillMount<<<<")
    
    }

    componentWillUpdate(){
        console.log(">>>>>>In Side componentWillUpdate<<<<")
    
    }

    componentDidUpdate()
    {
        console.log(">>>>>>In Side componentDidUpdate<<<<")
    
    }


    //4 Render
    render(){
        console.log(">>>>>>In Side render<<<<")
        const data = this.state;
        return(
            <Fragment>
                <div>{data.title}</div>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something Else'})}}>
                    Click Me
                </div>
            </Fragment>
            
        )
    }

    //5 After get Created
    componentDidMount(){
        console.log(">>>>>>I2222n Side componentDidMount<<<<")
    

    }

    componentWillUnmount(){
        alert("Do you want to leave")
    }

}


export default LifeCycle;