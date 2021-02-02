import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth';
import {removeError} from '../store/actions/errors';
//import currentUser from '../store/reducers/currentUser';
import withAuth    from '../hocs/withAuth';
import MessageForm from '../containers/MessageForm'


const Main = props =>{
  
  const {authUser, errors, removeError, currentUser} = props;

  
  return(
    <div className="container">
      <Switch>
        <Route exact path="/" render={(props) =><Homepage currentUser={currentUser} {...props}/>}></Route>
        <Route 
        exact 
        path="/signin" 
        render={(props)=>{
          return(
          <AuthForm 
          removeError={removeError}
          errors={errors}
          onAuth={authUser}
          {...props} 
          buttonText="Log in" 
          heading="Welcome Back."></AuthForm>
          )
        }}></Route>
        <Route 
        exact 
        path="/signup" 
        render={(props) => {
          return (
            <AuthForm 
            removeError={removeError}
            errors={errors}
            onAuth={authUser}
            signUp
            {...props} 
            buttonText="Sign Up" 
            heading="Join Warbler Today."></AuthForm>
          )
        }}></Route>
        <Route
        path="/users/:id/messages/new"
        component={withAuth(MessageForm)}

        >

        </Route>
      </Switch>

    </div>
  )
}

function mapStateToProps(state){

  return{
    currentUser:state.currentUser,
    errors:state.errors
  }
}

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));