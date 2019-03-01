import React from 'react';
import { connect } from "react-redux";
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    render() {
        // const user = this.props.users.find(user => {
        //     return user.id === this.props.userId;
        // });
        const { user } = this.props; 
        if (!user) {
            return null;
        }
        return <div className='header'>{user.name}</div>;
    }
}

// const mapStateToProps = state => {
//     return { users: state.users };
// };

// https://react-redux.js.org/using-react-redux/connect-mapstate
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

