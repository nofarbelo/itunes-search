import React, { Component } from 'react';
import apis from '../api/api-users';
import '../styles/Login.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "", 
            error: ""
        };
    }

    handleChangeName = (event) => {
        this.setState({userName: event.target.value});
    } 

    handleChangePassword = (event) => { 
        this.setState({password: event.target.value})
    }

    login = async (event) => {
        //save to db
        if (this.state.userName !== "" && this.state.password !== "") {
            apis.createUser({username: this.state.userName, password: this.state.password}).then(result => {
                console.log(result)
                this.props.history.push('/main')
            })
        }
    }

    render () {
        return (
            <div className="flex-container">
                <input type="text" value={this.state.userName} placeholder="User Name"
                    onChange={this.handleChangeName} className="form"/>
                <input type="text" value={this.state.password} placeholder="Password"
                    onChange={this.handleChangePassword} className="form"/>
                <button onClick={this.login} className="form">Log In</button>
            </div>
        )
    }
}

export default Login;