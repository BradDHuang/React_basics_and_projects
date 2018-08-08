
import React, {Component} from 'react';

class Table extends Component {
    render() {
        return (<table>
                    <tbody>
                    {this.props.r1}
                    {this.props.r2}
                    {this.props.r3}
                    {this.props.r4}
                    {this.props.r5}
                    </tbody>
        </table>);
    }
}

export default Table;





