import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '476161633016-72cd2hvhe27pb8kt022vovt77s4cbm3f.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                // this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    
    renderAuthBtn() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
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

export default GoogleAuth;
