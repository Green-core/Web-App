import React, {Component} from 'react';
import axoios from 'axios';

export default class Forgot extends Component{


   handleSubmit =e=>{
      e.preventDefault();

      const data = {
         email:this.email
      };

      axoios.post('user/forgotPassword',data).then(
         res => {
            console.log(res)
         }
      ).catch(
         err =>{
            console.log(err);
         }
      )
   };
    render(){
    return(
        <div>
        
        <center>
           <h1> GREEN_CORE</h1>
           <br/>
           <br/>

           <div>
             <form onSubmit={this.handleSubmit}>
              <h2> Forgot Password</h2>
              <br/>
              <br/>

              <input 
                 type="email" 
                 width="100" 
                 height="50"
                 size='50'
                 placeholder=" Enter Your Email Adress" 
                 
                 onChange={e => this.email=e.target.value}

                />
             
              
              <br />
              <br/>
              <button>Submit</button><br/><br/>
              

              </form>
           </div>
           </center>
           
           
        </div>
    );
            }
        }

