import React, {Component} from 'react';
import axios from 'axios';

const User=props => (
    <tr>
        <td>{props.user.firstname}</td>
        <td>{props.user.lastname}</td>
        <td>{props.user.gender}</td>
        <td>{props.user.emailadress}</td>
        <td>{props.user.contactno}</td>
        <td>{props.user.adress}</td>
    </tr>
)

export default class Viewadmindetails extends Component{
    constructor(props){
        super(props);

        this.state = {users:[]};



        }

        componentDidMount(){
            axios.get('/users/get-all-admins')
              .then(response =>{
                  this.setState({users :response.data})
              })
              .catch((error)=>{
                  console.log(error);
              })

        }
        userList(){
            return this.state.users.map(currentuser=>{
                return <User user={currentuser} key={currentuser._id}/>;
            })
        }
    render(){
        return(
            <div>
                <h2></h2>
                <h3>Admin Details</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            {/* <th>Password</th> */}
                            <th>Contact No</th>
                            <th>Adress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}