import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends React.Component {
    // state = { isSignedIn: null };
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '476161633016-72cd2hvhe27pb8kt022vovt77s4cbm3f.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    // onAuthChange = () => {
    //     this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    // }
    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    
    renderAuthBtn() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button 
                    className='ui red google button'
                    onClick={this.onSignOutClick}
                >
                    <i className='google icon' />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button 
                    className='ui red google button'
                    onClick={this.onSignInClick}
                >
                    <i className='google icon' />
                    Sign In
                </button>
            );
        }
    }
    
    render() {
        return <div>{this.renderAuthBtn()}</div>;
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

// export default GoogleAuth;
export default connect(
    mapStateToProps, 
    { signIn, signOut }
)(GoogleAuth);

