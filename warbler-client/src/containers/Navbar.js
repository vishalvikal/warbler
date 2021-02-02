import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../store/actions/auth'
import Logo from '../images/warbler-logo.png'

class Navbar extends Component{
  
  logout = e=>{
    e.preventDefault();
    this.props.logout();
  }

  render(){
    return(
      <nav className="navbar navbar-expand">
       <div className="container-fluid">
         <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="warbler logo" />
            </Link>
         </div>
       {this.props.currentUser.isAuthenticated?(<ul className=" navbar-nav navbar-right">
            <li className="nav-item ">
              <Link className="nav-link" 
              to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
            </li>
            <li className="nav-item">
              <button
              style={{
                background:'none',
                border:'none',
                color:'inherit',
                fontWeight:'bold',
                cursor:'pointer',
                

            
            }}
              className="nav-link" onClick={this.logout}>Log Out</button>
            </li>
       </ul>):(
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" to="/signup">Sign Up </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/signin">Log In </Link>
                </li>
              </ul>
       )}
        
      </div>
      </nav>
    )
  }


}

function mapStateToProps(state){
  return{
    currentUser:state.currentUser
  }
}

export default connect(mapStateToProps, {logout})(Navbar)