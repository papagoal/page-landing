import React from 'react'
import './assert/Cherry.css'

// export default function Cherry () {
//     return (
//         <h2>This is cherry</h2>
//     )
// }

export default class Cherry extends React.Component {
    render() {
        return (
            <div>
                this is cherry
                {/*{this.props.cherry.description} ({this.props.cherry.url})*/}
            </div>
        );
    }
}
