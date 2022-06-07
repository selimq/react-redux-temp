import React from 'react';
import { connect } from "react-redux"
import { signIn, signOut } from "../actions"

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: '482478116297-7sp2klcle1vhhqo8urrmq24j5d8n3jl1.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }
    onSıgnInClick = () => {
        this.auth.signIn()
    }
    onSıgnOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button
                    onClick={this.onSıgnOutClick}
                    className='ui red google button'>
                    <i className='google button' />
                    Sıgn Out
                </button>
            )
        } else {
            return (
                <button
                    onClick={this.onSıgnInClick}
                    className='ui red google button'>
                    <i className='google button' />
                    Sıng In With Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {
    signIn, signOut
})(GoogleAuth);
