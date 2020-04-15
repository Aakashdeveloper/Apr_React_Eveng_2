import React,{Component,Fragment} from 'react';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User Text'
        }
        
    }

    inputChanges = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text'})                                                                                     
    }

    render(){
        return(
            <Fragment>
                <center>
                    <h1>{this.state.title}</h1>
                    <input onChange={this.inputChanges}/>
                    <p>{this.state.keyword}</p>
                </center>
                <hr/>
            </Fragment>
        )
    }
}


/*
const Header = () => {
    return(
        <Fragment>
            <center>
                <h1>React App</h1>
            </center>
            <hr/>
        </Fragment>
    )
}
*/


export default Header;