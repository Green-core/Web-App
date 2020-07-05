import React, {Component} from 'react';
import axios from 'axios';

export default class Signup extends Component{
    constructor(props){
        super(props);

        this.onChangeFirstname=this.onChangeFirstname.bind(this);
        this.onChangeLastname=this.onChangeLastname.bind(this);
        this.onChangeGender=this.onChangeGender.bind(this);
        this.onChangeEmailadress=this.onChangeEmailadress.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeContactno=this.onChangeContactno.bind(this);
        this.onChangeAdress=this.onChangeAdress.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            firstname:'',
            lastname:'',
            gender:'',
            emailadress:'',
            password:'',
            contactno:'',
            adress:''
    
        }
    }

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
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

    onChangeContactno(e) {
        this.setState({
            contactno: e.target.value
        });
    }

    onChangeAdress(e) {
        this.setState({
            adress: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const signup = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            gender:this.state.gender,
            emailadress:this.state.emailadress,
            password:this.state.password,
            contactno:this.state.contactno,
            adress:this.state.adress
        }

        console.log(signup);

        axios.post('http://localhost:5000/signup/add',signup)
           .then(res=>console.log(res.data));

        // this.setState({
        //     firstname:'',
        //     lastname:'',
        //     gender:'',
        //     emailadress:'',
        //     password:'',
        //     contactno:'',
        //     adress:''
        // })
    }

    render(){
       return(
        <div>
            <h2>GREEN_CORE</h2>
            <h3>Sign Up</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input type="test"
                required
                className="form-control"
                value={this.state.firstname}
                onChange={this.onChangeFirstname}
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="test"
                required
                className="form-control"
                value={this.state.lastname}
                onChange={this.onChangeLastname}
                />
            </div>
            <div className="form-group">
                <label>Gender</label>
                {/* <select onChange={this.gender} defaultValue="Select Gender">
                <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /> */}
                    <input type="test"
                required
                className="form-control"
                value={this.state.gender}
                onChange={this.onChangeGender}
                />

                
            </div>
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
            <div className="form-group">
                <label>Contact No</label>
                <input type="test"
                required
                className="form-control"
                value={this.state.contactno}
                onChange={this.onChangeContactno}
                />
            </div>
            <div className="form-group">
                <label>Adress</label>
                <input type="test"
                required
                className="form-control"
                value={this.state.adress}
                onChange={this.onChangeAdress}
                />
            </div>
            <div className ="form-group">
                <input type="submit" value="SUBMIT" className="btn btn-primary" />

            </div>
            </form>
          </div>
        )
}
}