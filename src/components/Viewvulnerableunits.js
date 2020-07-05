import React, {Component} from 'react';
import axios from 'axios';

const User=props => (
    <tr>
        <td>{props.user.firstname}</td>
        <td>{props.user.lastname}</td>
        <td>{props.user.gender}</td>
        <td>{props.user.emailadress}</td>
        <td>{props.user.password}</td>
        <td>{props.user.contactno}</td>
        <td>{props.user.adress}</td>
    </tr>
)

export default class VulnerableUnits extends Component{
    constructor(props){
        super(props);

        this.state = {users:[]};



        }

        componentDidMount(){
            axios.get('http://localhost:5000/signup/')
              .then(response =>{
                  this.setState({users :response.data})
              })
              .catch((error)=>{
                  console.log(error);
              })

        }
        userList(){
            return this.state.users.map(currentuser=>{
                return <User user={currentuser} />;
            })
        }
    render(){
        return(
            <div>
                {/* <h1>greencore</h1> */}
                <h3>Vulnerable Units</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>User Name</th>
                            <th>Location</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                           
                        </tr>
                    </thead>
                        <tr>
                            <td>Minura</td>
                            <td>Nugegoda</td>
                            <td>2020-06-27T17:42:25724Z</td>
                            <td>2020-06-27T17:42:25724Z</td>
                            

                        
                        </tr>
                    

                    <tbody>
                        {this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}