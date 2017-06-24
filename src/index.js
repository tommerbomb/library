import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Book(props){
    return (
      <div
      id={props.id}
      className='book-container'
      onClick={props.onClick}>
        <img src={props.info.imgPath} alt={props.info.title} />
      </div>
    );
}

const books = [
 {
  title: 'Lean Startup',
  author: 'Eric Ries',
  imgPath: './img/lean-startup.jpg'
 },
 {
   title: 'Cryptonomicon',
   author: 'Neal Stephenson',
   imgPath: './img/cryptonomicon.jpg'
 },
 {
   title: 'Zero to One',
   author: 'Peter Thiel',
   imgPath: './img/zero-to-one.jpg'
 },
 {
   title: 'The Goal',
   author: 'Eliyahu M. Goldratt',
   imgPath: './img/the-goal.jpg'
 },
 {
   title: 'How to Win Friends and Influence People',
   imgPath: './img/htwfaip.jpg'
 }];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBook: null
    };
  }

  handleClick(i, info) {
    this.setState({selectedBook: i})
    console.log('This book has ID:' + i);
    console.log('This book has title: ' + info.title);
    console.log('This book has image url: ' + info.imgPath)
  }

  renderBooks() {
    let bookList = [];
    for(let i = 0; i < books.length ; i ++) {
        bookList.push(<Book
        id={i}
        info={books[i]}
        onClick = {() => this.handleClick(i,books[i])}
        />);

    }
    return bookList;
  }

  renderBookInfo(i) {
    if(this.state.selectedBook!==null){
      return (
        <div>
          <div>{"Title: " + books[i].title}</div>
          <div>{"Author: " + books[i].author}</div>
        </div>
      )
    }
  }

  render() {
    const { selectedBook } = this.state;
    return (
      <div className='app'>
        <div className='app-header'></div>
        <div className='app-wrapper'>
          <div className='scroll-window'>
              {this.renderBooks()}
          </div>
          <div className='display-window'>
            {this.renderBookInfo(selectedBook)}
          </div>
        </div>
      </div>

    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
