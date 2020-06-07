import React, {Component} from 'react';



// class Template extends React.Component{

  // constructor(){}

  // render() {
  //     return (
  //         <div className="sample-grid">
  //             <div className="grid-container">
  //                 <div className="item1"><Header /></div>
  //                 <div className="item2"><Menu /></div>
  //                 <div className="item3"><Content /></div>  
  //                 <div className="item4">Right 1</div>
  //                 <div className="item5">Right 2</div>
  //                 <div className="item6"><Footer /></div>
  //             </div>
  //         </div>
  //     )
  // }    

// }
// class Form extends Component {
//   constructor(props) {
//       super(props)

//       this.state = {
//           firstName: "",
//           lastName: "",
//           password: "",
//           gender: "",


//       }
//       this.handleSubmit=this.handleSubmit.bind(this)
//   }

//   firsthandler = (event) => {
//       this.setState({
//           firstName: event.target.value
//       })
//   }
//   lasthandler = (event) => {
//       this.setState({
//           lastName: event.target.value
//       })
//   }
//   passwordhandler = (event) => {
//       this.setState({
//           password: event.target.value
//       })
//   }

//   genderhandler = (event) => {
//       this.setState({
//           gender: event.target.value
//       })
//   }


class Viewusers extends Component{
  // render(){
    // return(
    //   <div className="mt-5 d- flex justify -cnntent -left">
    //       <h3>Hii MOda HASINI GONA</h3>
          constructor(props) {
      super(props)

      this.state = {
          firstName: "",
          lastName: "",
          password: "",
          gender: "",


      }
      this.handleSubmit=this.handleSubmit.bind(this)
  }
// </div>    );
  // }


firsthandler = (event) => {
  this.setState({
      firstName: event.target.value
  })
}
lasthandler = (event) => {
  this.setState({
      lastName: event.target.value
  })
}
passwordhandler = (event) => {
  this.setState({
      password: event.target.value
  })
}

genderhandler = (event) => {
  this.setState({
      gender: event.target.value
  })
}

handleSubmit = (event) => {
  alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
  console.log(this.state);
  this.setState({
      firstName: "",
      lastName: "",
      password: '',
      gender: "",
  })
event.preventDefault()
  
}




render() {
  return (
      <div>

          <form onSubmit={this.handleSubmit}>
              <h1>User Registration</h1>
              <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
              <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
              <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
              <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                  <option defaultValue>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
              </select><br />
              <input type="submit" value="Submit" />
          </form>

      </div>
      
  )
}
}
export default Viewusers;