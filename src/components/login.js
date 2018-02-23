import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { login } from '../ducks/reducer';
// import 'images/auth_logo.png';


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            user: []
        }
        this.login = this.login.bind(this)
    }

    login(){
        axios.get(`/api/login?username=${this.state.username}`).then( (res)=> this.setState({user: res.data}))
            
    }

    register(){
        axios.put('/api/register', {username: this.state.username, password: this.state.password}).then( (res) => this.setState({user: res.data}))
    }




    handleChange( prop, val ) {
        this.setState({ [prop]: val });
        
      }



    render(){
        return(
            <div className='main'>
                <div>

                        <img source="images/auth_logo.png" alt="logo"/>
                        <p>username</p>
                        <input className="inputbox" placeholder="username" onChange={ (e) => this.handleChange('username' , e.target.value) } ></input>
                        <p>password</p>
                        <input className="inputbox" placeholder="password" onChange={ (e) => this.handleChange('password' , e.target.value) } ></input>
                        
                </div>

                <div>

                        <Link to="/dashboard"><button onClick={this.login}>Login</button></Link>
                        
                        <Link to="/dashboard"><button>Register</button></Link>

                </div>

            </div>
        )
    }
}



export default Login