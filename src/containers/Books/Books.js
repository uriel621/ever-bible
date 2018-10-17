import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchBooks, activeBook} from '../../actions/index';

import './books.css';
import {
    Card,
    Container,
    Header,
    Image,
    Icon,
} from 'semantic-ui-react'

import { TimelineLite, CSSPlugin } from "gsap/all";

export const dataArray = [
	{
		"id": "0837a8f79f4657150c482f9400daea0b",
		"name": "Zathin"
	},
	{
		"id": "73000dccc18fd56c9941ee432a96708d",
		"name": "Tempsoft"
	},
	{
		"id": "33c6b55a4abad5eeaa6b29a3aeee8213",
		"name": "Bamity"
	},
	{
		"id": "7e5baef968a2c8ad3254169126247546",
		"name": "Span"
	},
	{
		"id": "528fcca2b4c1bf6d6190f848837c8d09",
		"name": "Duobam"
	},
	{
		"id": "b2452085516c81bab68c9f244700d8c1",
		"name": "Veribet"
	}
];


class Books extends Component {
    constructor(props) {
        super(props);

		this.cards = [];
		this.tl = new TimelineLite({ paused: true });

        this.bookHandler = this.bookHandler.bind(this);
    }
    componentDidMount() {
        this.props.activeBook('');
        this.props.fetchBooks();

        this.tl.staggerTo( this.cards , 0.5, { autoAlpha: 1, y: -20 }, 0.9); 0.1
        this.tl.play()
    }
    

    bookHandler(book) {
        this.props.activeBook(book);
        this.props.history.push(book);
    }
    
    render(){
        console.log('@BOOKS', this.props.statusBooks.books);
        return (
            <Container text style={{ marginTop: '7em' }}>
        {// map through the elements
        (this.props.statusBooks.books.length) ? 
        this.props.statusBooks.books.map((element, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 card-element"
              ref={div => this.cards[index] = div}
            >
              
              <div className="card mt-3">
                <div className="card-body">
                  <div className="media">
                    <img
                      className="mr-3"
                      src="https://via.placeholder.com/64"
                      alt="Generic placeholder image"
                    />
                    <div className="media-body">
                      <h5 className="mt-0">{index}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          :
          <div>HI</div>
        }
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    "statusBooks": state.books
})

export default connect(mapStateToProps, {fetchBooks, activeBook})(Books);