import React, { Component } from 'react';
import ListItem from './ListItem';

// images
import latest from './images/latest.png';
import popular from './images/popular.png';

class List extends Component {
  constructor(){
    super();

    this.state = {
        currentValue: '',
        sortBy: 'popular'
    }
  }
  renderItems = () => {
    const popular = (a, b) => b.score - a.score;
    const latest = (a, b) => b.created_at - a.created_at;

    const sortedList = Array.from(this.props.listInfo.items)
      .sort(this.state.sortBy === 'popular' ? popular : latest);

   return sortedList.map((item) => {
      return <ListItem key={item._id} itemInfo={item} listId={this.props.listInfo._id} updateScore={this.props.updateScore} listId={this.props.listInfo._id}/> 
    })
  }

  handleChange = (e) => {
      this.setState({
          currentValue: e.target.value
      });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addToList(this.props.listInfo._id, this.state.currentValue);

      this.setState({
          currentValue: ''
      })
  }

  setSortBy = (e) => {
      this.setState({
          sortBy: e.target.id
      });
  }
  render(){
    return(
      <div className="list">
        <header>
          <h2>{this.props.listInfo.title}</h2>
          <div className='list__sorting'>
            <p>Sort by:</p>
            <button id='popular' onClick={this.setSortBy}><img src={popular}alt="thumbs up icon"/>Most Popular</button>
            <button id='latest' onClick={this.setSortBy}><img src={latest} alt="" />Latest</button></div>
        </header>
        <ul>
          {this.renderItems()}
          <li className="list__item">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="newItem" className="visually-hidden">Add To List:</label>
              <input type="text" id="newItem" placeholder="add item to list" value={this.state.currentValue} onChange={this.handleChange} />
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default List;
