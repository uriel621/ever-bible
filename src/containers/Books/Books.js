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
    Transition
} from 'semantic-ui-react'

class Books extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.activeBook('');
        this.props.fetchBooks();
    }

    bookHandler(book) {
        this.props.activeBook(book);
        this.props.history.push(book);
    }
    
    render(){
        console.log('@BOOKS');
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Card.Group itemsPerRow={3}>
                    {this.props.statusBooks.books.map((book, index) => (
                        <Card as="div" key={book.id} onClick={(() => this.bookHandler(book.book))} >
                            <Image src={book.location} />
                            <Card.Content className='nameOverflow'>
                                <span>{book.book}</span>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    "statusBooks": state.books
})

export default connect(mapStateToProps, {fetchBooks, activeBook})(Books);
