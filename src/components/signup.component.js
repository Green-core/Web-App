// import React, {Component} from 'react';
// import axios from 'axios';

// export default class Signup extends Component{
//     constructor(props){
//         super(props);

//         this.onChangeName=this.onChangeName.bind(this);
        
//         this.onChangeEmail=this.onChangeEmail.bind(this);
//         this.onChangePassword=this.onChangePassword.bind(this);
//         this.onChangeMobile=this.onChangeMobile.bind(this);
        
//         this.onSubmit=this.onSubmit.bind(this);

//         this.state={
//             name:'',
//             email:'',
//             password:'',
//             mobile:'',
        
    
//         }
//     }

//     onChangeName(e) {
//         this.setState({
//             name: e.target.value
//         });
//     }

   

   
//     onChangeEmail(e) {
//         this.setState({
//             email: e.target.value
//         });
//     }

//     onChangePassword(e) {
//         this.setState({
//             password: e.target.value
//         });
//     }

//     onChangeMobile(e) {
//         this.setState({
//             mobile: e.target.value
//         });
//     }

    

//     onSubmit(e){
//         e.preventDefault();

//         const signup = {
//             name:this.state.name,
            
//             email:this.state.email,
//             password:this.state.password,
//             mobile:this.state.mobile,
           
//         }

//         console.log(signup);

//         axios.post('/signin/register')
//            .then(res=>console.log(res.data));

//         this.setState({
//            name:'',
        
//          emailadress:'',
//          password:'',
//         mobile:'',
//         //     adress:''
//      })
//     }

//     render(){
//        return(
//         <div>
//             <h2>GREEN_CORE</h2>
//             <h3>Sign Up</h3>
//             <form onSubmit={this.onSubmit}>
//               <div className="form-group">
//                 <label> Name</label>
//                 <input type="test"
//                 required
//                 className="form-control"
//                 value={this.state.name}
//                 onChange={this.onChangeName}
//                 />
//             </div>
            
            
//             <div className="form-group">
//                 <label>Email Adress</label>
//                 <input type="test"
//                 required
//                 className="form-control"
//                 value={this.state.email}
//                 onChange={this.onChangeEmail}
//                 />
//             </div>
//             <div className="form-group">
//                 <label>Password</label>
//                 <input type="password"
//                 required
//                 className="form-control"
//                 value={this.state.password}
//                 onChange={this.onChangePassword}
//                 />
//             </div>
//             <div className="form-group">
//                 <label>Mobile No</label>
//                 <input type="test"
//                 required
//                 className="form-control"
//                 value={this.state.mobile}
//                 onChange={this.onChangeMobile}
//                 />
//             </div>
           
//             <div className ="form-group">
//                 <input type="submit" value="SUBMIT" className="btn btn-primary" />

//             </div>
//             </form>
//           </div>
//         )
// }
// }

import React, {Component} from 'react';
import axios from 'axios';
import 'whatwg-fetch';
import{
    getFromStorage,
    setInStorage,
}from '../utils/storage';


export default class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            isLoading:true,
            token:'',
            signUpError:'',
            signInError:'',
            signInEmail:'',
            signInPassword:'',
            signUpEmail:'',
            signUpName:'',
            signUpPassword:'',
            signUpMobile:'',
            
        };
        this.onTextboxChangeSignInEmail=this.onTextboxChangeSignInEmail.bind(this);
        this.onTextboxChangeSignInPassword=this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignUpName=this.onTextboxChangeSignUpName.bind(this);
        this.onTextboxChangeSignUpEmail=this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword=this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpMobile=this.onTextboxChangeSignUpMobile.bind(this);


        this.onSignIn=this.onSignIn.bind(this);
        this.onSignUp=this.onSignUp.bind(this);




    }
    componentDidMount(){
        const obj = getFromStorage ('the_main_app');
        
        if(obj && obj.token) {
            const {token} =obj;
            //Verify token
            fetch('/verify?token='+token)
            .then(res => res.json())
            .then(json => {
                if(json.success){
                    this.setState({
                        token,
                        isLoading:false
                    });
                } else{
                    this.setState({
                        isLoading:false,
                    });
                }
            });

        } else {
            this.setState({
                isLoading:false,
            });
        }

    }

    onTextboxChangeSignInEmail(event){
        this.setState({
            signInEmail:event.target.value,
        });
    }

    onTextboxChangeSignInPassword(event){
        this.setState({
            signInPassword:event.target.value,
        });
    }

    onTextboxChangeSignUpName(event){
        this.setState({
            signUpName:event.target.value,
        });
    }

    onTextboxChangeSignUpEmail(event){
        this.setState({
            signUpEmail:event.target.value,
        });
    }

    onTextboxChangeSignUpPassword(event){
        this.setState({
            signUpPassword:event.target.value,
        });
    }

    onTextboxChangeSignUpMobile(event){
        this.setState({
            signUpMobile:event.target.value,
        });
    }

    onSignUp() {
        //Grab state
       const {
        signUpName,
        signUpEmail,
        signUpPassword,
        signUpMobile,
       } = this.state;

       this.setState({
           isLoading:true,
       });

       //Post request to backend
       fetch('signin/register',{
           method:'POST',
           headers:{
            'Content-Type' : 'application/json'
           },
           body:JSON.stringify({
               name:signUpName,
               email:signUpEmail,
               password:signUpPassword,
               mobile:signUpMobile,

           }),
        })
       .then(res=>res.json())
       .then(json=>{
           if(json.success){
               

               if(json.success){
                this.setState({
                    signUpError:json.message,
                    isLoading:false,
                    signUpEmail:'',
                    signUpPassword:'',
                    signUpName:'',
                    signUpMobile:'',
                });
             }else{
                this.setState({
                    signUpError:json.message,
                    isLoading:false,
                });
             }
           }
       });

    }

    onSignIn() {
        //Grab state
       const {
        signInEmail,
        signInPassword,
       } = this.state;

       this.setState({
           isLoading:true,
       });
        //Post request to backend

        fetch ('/signin/signin' , {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'

            },
            body: JSON.stringify({
                email:signInEmail,
                password:signInPassword,

            }),
        }).then(res => res.json())
        .then(json => {
            if(json.success){
                setInStorage('the_main_app', {token:json.token});
                this.setState({
                    signInError:json.message,
                    isLoading:false,
                    signInEmail:'',
                    signInPassword:'',
                    token: json.token,
                    


                });
            } else {
                this.setState({
                    signInError:json.message,
                    isLoading:false,
                });
            }
        });
        
    }




    render() {
        const {
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
            signUpName,
            signUpEmail,
            signUpPassword,
            signUpMobile,
            signUpError,
        } = this.state;

        if(isLoading){
            return(<div><p>Loading....</p></div>);
        }

        if(!token){
            return(
                <div>
                <center>
                   <h1> GREEN_CORE</h1>
                  
                   <div>
                    <p> SIGN UP</p>
                      <input type="text" 
                         required
                         width="100" 
                         height="50"
                         size='50'
                       placeholder="Name" 
                       value={signUpName}
                       
                       onChange={this.onTextboxChangeSignUpName}

                       />
                        <br /><br />
                      <input type="email"
                        required
                        placeholder="Email" 
                        width="100" 
                         height="50"
                         size='50'
                        value={signUpEmail}
                        
                        onChange={this.onTextboxChangeSignUpEmail}


                        /> <br /><br />
                      <input type="password"
                        required 
                        placeholder="Password" 
                        width="100" 
                         height="50"
                         size='50'
                        value={signUpPassword}
                        
                        onChange={this.onTextboxChangeSignUpPassword}

                        /> <br /><br />

                      <input type="text" 
                       required
                       placeholder="Mobile"
                       width="100" 
                         height="50"
                         size='50'
                       value={signUpMobile}
                       required
                       onChange={this.onTextboxChangeSignUpMobile}


                        /> <br /><br />
                      <button onClick={this.onSignUp}> Sign Up</button>
                      
                   

                   </div>
                   </center>
                </div>
            );
        }

        return(
            <div>
              <p>Account</p>
            </div>
        );
    }



}

