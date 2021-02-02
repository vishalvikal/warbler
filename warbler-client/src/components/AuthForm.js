import React,{Component} from 'react';

class AuthForm extends Component{
  constructor(props){
    super(props)
    this.state={
      email:"",
      username:"",
      password:"",
      profileImageUrl:""
    }
 
  }

  handleSubmit=e=>{
    e.preventDefault();
    const authType = this.props.signUp?"signup":"signin";
    this.props.onAuth(authType, this.state).then(()=>{
      this.props.history.push('/')
      
    }).catch(()=>{
      return;
    })
    this.setState({
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    })
    
  }

  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
    
  }

render(){

  const {email, username, password, profileImageUrl} = this.state;
  const {
        heading, 
        buttonText, 
        signUp,
        errors,
        history,
        removeError
  }  = this.props;
    history.listen(()=>{
      removeError();
    })
  return(
    <div>
      <div className="row justify-content-md-center text-center">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <h2>{heading} </h2>
            {errors.message && <div className='alert alert-danger'>{errors.message}</div>}
            <label htmlFor="email">Email:</label>
            <input className="form-control" name="email" id="username" onChange={this.handleChange} value={email} type="email" required></input>
            <label htmlFor="password">Password:</label>
            <input className="form-control" name="password" id="email" onChange={this.handleChange} value={password} type="password" required></input>
            {signUp&&(<div>
              <label htmlFor="username" >User Name:</label>
              <input className="form-control" name="username" id="password" onChange={this.handleChange} value={username}  required></input>
              <label htmlFor="profileImageUrl">Profile Image Url:</label>
              <input className="form-control" name="profileImageUrl" id="profileImageUrl" onChange={this.handleChange} value={profileImageUrl} ></input>
            </div>

            )}
            
            <button className="btn btn-primary btn-block " type="submit">{buttonText}</button>
          </form>
        </div>

      </div>
    </div>
  )
}
}

export default AuthForm;