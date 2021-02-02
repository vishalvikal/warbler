import {apiCall} from '../../services/api'
import {addError} from './errors';
import {LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes';

export const loadMessages = messages =>{

 return  {
  type:LOAD_MESSAGES,
  messages
}
};

export const remove = id =>({
  type:REMOVE_MESSAGE,
  id
})

export const removeMessage=(user_id, message_id)=>{

  return dipsatch=>{
    return apiCall('delete', `/api/users/${user_id}/messages/${message_id}`)
    .then(() => dipsatch(remove(message_id)))
    .catch(err=>addError(err.message));
    
  }

}

export const fetchMessages = ()=>{
  
  return dispatch=>{
    return apiCall("get", '/api/messages')
    
      .then(res=>{
       
        return dispatch(loadMessages(res))
      }
       
     
      )
      .catch(err => 
      dispatch(addError(err.messages)));
  };
};

export const postNewMessage = text =>(dispatch, getState)=>{
  let {currentUser} = getState();
  const id = currentUser.user.id;
  return apiCall('post', `/api/users/${id}/messages`, {text})
          .then(res=>{})
          .catch(err=>dispatch(addError(err.message)));
}