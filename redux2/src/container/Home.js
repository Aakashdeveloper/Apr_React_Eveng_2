import React,{Component} from 'react';
import { connect } from 'react-redux';
import { latestNews} from '../actions';
import { bindActionCreators} from 'redux';
import LatestDisplay  from '../component/Home/LatestDisplay';


class Home extends Component{
    componentDidMount(){
        this.props.latestNews()
    }

    render(){
        return(
           <LatestDisplay ldata={this.props.datalist.latestData}/>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)