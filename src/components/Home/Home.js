import React, {Component} from 'react';
import axios from 'axios';
import 'whatwg-fetch';
import{
    getFromStorage,
    setInStorage,
}from '../../utils/storage';


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
                   <br/>
                   <br/>

                   <div>
                     {
                         (signInError) ? (
                             <p>{signInError}</p>
                         ) :(null)
                     }
                      <h2> Sign In</h2>
                      <br/>
                      <br/>

                      <input 
                         type="email" 
                         width="100" 
                         height="50"
                         size='50'
                         placeholder="Email" 
                         value={signInEmail}
                         onChange={this.onTextboxChangeSignInEmail}

                        />
                      <br />
                      <br />
                      <input 
                         type="password" 
                         width="100" 
                         height="50"
                         size='50'
                         placeholder="Password" 
                         value={signInPassword}
                         onChange={this.onTextboxChangeSignInPassword}
                        />
                      <br />
                      <br />
                      <br/>
                      <button onClick={this.onSignIn}>Sign In</button>

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

