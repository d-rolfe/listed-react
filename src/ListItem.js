// ListItem.js

import React from 'react';

// images
import upvote from './images/upvote.png';
import downvote from './images/downvote.png';

const ListItem = (props) => {

  return (
    <li className="list__item">
      {props.itemInfo.item}
      <div className="item__scoreCard">
        <span className="scoreCard__score">{props.itemInfo.score}</span>
        <button onClick={() => props.updateScore(props.itemInfo._id, props.listId, 1)}>
          <img src={upvote} alt="thumbs up" />
          Upvote
        </button>
        <button onClick={() => props.updateScore(props.itemInfo._id, props.listId, -1)}>
          <img src={downvote} alt="thumbs down" />Downvote
        </button>
      </div>
    </li>
  )
}

export default ListItem;