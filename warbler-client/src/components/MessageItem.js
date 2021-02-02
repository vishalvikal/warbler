import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import DefaultProfileImage from '../images/default-profile-image.jpg';

const MessageItem = ({date, profileImageUrl, text, username, removeMessage, isCorrectUser})=>(

<div>
  <li className="list-group-item">
      <img src={profileImageUrl || DefaultProfileImage} alt={username} height="100" className="timeline-image"></img>
      <div className="message-area">
        <Link to='/'>@{username} &nbsp;</Link>
        <span className='text-muted'>
          <Moment className='text-muted' format="DD MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>
          {text}
        </p>
        {isCorrectUser && (<button className="btn btn-danger" onClick={removeMessage}> Delete</button>)}
      
      </div>
  </li>
    
</div>
     
//     <div className="card" style="width: 18rem;">
//       <img className="card-img-top" src={profileImageUrl||DefaultProfileImage} alt="Card image cap"/>
//         <div className="card-body">
//           <h5 className="card-title">{username}</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
// </div>

)


export default MessageItem;