import React, { Component } from 'react'
import { fetchUserSuccess } from '../../redux'
import { connect } from 'react-redux'
import { db } from '../../App'
import { Redirect } from 'react-router-dom'

import { CustomisedButton } from '../CustomisedButton'

export class MainContentSignIn extends Component {

    constructor(props) {
        super(props);
        this.state = { id: "", pw: "", err: "" };

        this.handleIDChange = this.handleIDChange.bind(this);
        this.handlePWChange = this.handlePWChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleIDChange(e) {
        this.setState({ id: e.target.value });
    }

    handlePWChange(e) {
        this.setState({ pw: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        // --------- connect to firestore, see if id pw match --------------

        var fetchedUser = null;
        var id_pw_match = false;
        var id_match = false;

        var query = db.collection("users").where("id", "==", this.state.id).where("pw", "==", this.state.pw);
        query.get()
            .then(function (querySnapshot) {
                // if matched user found
                if (querySnapshot.size == 1) {
                    id_pw_match = true
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        fetchedUser = {
                            ...doc.data(),
                            doc: doc.id
                        }
                    });
                }
            })
            .then(() => {
                if (id_pw_match) {
                    // change redux user state
                    this.props.fetchUserSuccess(fetchedUser);
                } else {
                    // show id pw wrong view
                    this.setState({ err: "Wrong ID PW" })
                }
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            })

        // ------------------------------------------------------------

    }

    render() {
        if (this.props.user.signedIn) {
            return (<Redirect to='/' />)
        } else {
            return (
                <div className="MainContentSignIn">

                    <form onSubmit={this.handleSubmit}>
                        <span style={{ marginTop: 10 }} className="lable">ID:</span>
                        <input type="text" value={this.state.value} onChange={this.handleIDChange} />

                        <span style={{ marginTop: 30 }} className="lable">PW:</span>
                        <input type="password" value={this.state.value} onChange={this.handlePWChange} />

                        <input style={{ marginTop: 30 }} type="submit" value="Submit" />

                        <h4 style={{ color: "red" }}>
                            {this.state.err}
                        </h4>

                    </form>

                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserSuccess: (userInfo) => { dispatch(fetchUserSuccess(userInfo)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentSignIn)
