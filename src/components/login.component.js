import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);

        
        this.onChangeEmailadress=this.onChangeEmailadress.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
       
        this.state={
            
            emailadress:'',
            password:'',
            
        }
    }

   
    

    

    onChangeEmailadress(e) {
        this.setState({
            emailadress: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

   

    onSubmit(e){
        e.preventDefault();

        let request = {
           
            emailadress:this.state.emailadress,
            password:this.state.password,
           
        }

        //console.log(login);

         axios.post('http://localhost:5000/signup/login',request)
           .then(resp=>{
               alert(resp.data.message);
           })
           .catch(err=>{
               console.log(err);
           })

        
    }

    render(){
       return(
        <div>
            <h2>GREEN_CORE</h2>
            <h3>Login</h3>
            <form onSubmit>
              
            
            
            <div className="form-group">
                <label>Email Adress</label>
                <input type="test" 
                required
                className="form-control"
                value={this.state.emailadress}
                onChange={this.onChangeEmailadress}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
            </div>
            
            
            <div className ="form-group">
                <input type="submit" value="ENTER" className="btn btn-primary" />

            </div>
            </form>
          </div>
        )
}
}