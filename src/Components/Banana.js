import React, {Component} from 'react';
import {connect} from "react-redux";
import { updateApple } from "../reducer/marketReducer";

class Banana extends Component {
    render() {
        return (
            <div>
                I am Banana
                <br />
                {this.props.market.apple}
                <br />
                <button onClick={() => {this.props.dispatch(updateApple('2'))}}>Click me to change number</button>
            </div>
        );
    }
}

const mapStateToProps = state => state
const dispatchToProps = dispatch => ({ dispatch })
export default connect(mapStateToProps, dispatchToProps)(Banana)

