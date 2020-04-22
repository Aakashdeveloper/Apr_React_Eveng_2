import React, {Component} from 'react'
import { connect } from 'react-redux';


class LikeCounter extends Component{

    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How About Articles</h3>
                <div className="addlikes-container">
                    <div className="btn likes"
                   >
                        <div className="hits">
                            {this.props.likes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn dislikes"
                     >
                        <div className="hits">
                            {this.props.dislikes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(LikeCounter)