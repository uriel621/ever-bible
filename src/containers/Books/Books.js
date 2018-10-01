import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../../actions/index';

import {
    Card,
    Container,
    Header,
    Image,
    Icon,
} from 'semantic-ui-react'

class Books extends Component {
    constructor(props) {
        super(props);
        // this.bookHandler = this.bookHandler.bind(this);
    }
    componentDidMount() {
        this.props.fetchBooks();
    }

    bookHandler(event) {
        // make action creator for active book
        // mske react routers 
        console.log(event)
    }
    
    render(){
        console.log('@BOOKS', this.props.books);
        return (
            <Container text style={{ marginTop: '7em' }}>
                {/* <Header as='h1'>Semantic UI React Fixed Template</Header>
                <p>This is a basic fixed menu template using fixed size containers.</p>
                <p>
                    A text container is used for the main container, which is useful for single column layouts.
                </p>
                <Image src='./images/media-paragraph.png' style={{ marginTop: '2em' }} />
                <Image src='./images/paragraph.png' style={{ marginTop: '2em' }} />
                <Image src='./images/paragraph.png' style={{ marginTop: '2em' }} />
                <Image src='./images/paragraph.png' style={{ marginTop: '2em' }} />
                <Image src='./images/paragraph.png' style={{ marginTop: '2em' }} />
                <Image src='./images/paragraph.png' style={{ marginTop: '2em' }} />
                <Image src='./images/paragraph.png' style={{ marginTop: '2em' }} /> */}
                {this.props.books.length &&
                    <Card.Group itemsPerRow={3}>
                        {this.props.books.map(book => {
                            // console.log('@CHARACTERS of '+book.book, book.book.length);
                            let fontSize = '100%';
                            // console.log('@CHARACTERS of '+book.book, book.book.includes(' '))
                            if(book.book.length > 10 || book.book.includes(' ')) {
                                fontSize = '69%';
                            }
                            else if(book.book.length >= 8) {
                                fontSize = '80%';
                            }

                            return (
                                <Card key={book.id} onClick={() => this.bookHandler(book.book)}>
                                    <Image src={book.location} />
                                    <Card.Content>
                                        <span style={{'fontSize':fontSize}}>{book.book}</span>
                                    </Card.Content>
                                </Card>
                            )
                        })}
                    </Card.Group>
                }
                {/* this.props.books.map(book => (
                    <Card id={book.id}>
                        <Image src={book.location} />
                        <Card.Content>
                            <Card.Header>{book.book}</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                )) */}
            </Container>
        );
    }
}

const mapStateToPros = state => ({
    "books": state.books
})

export default connect(mapStateToPros, {fetchBooks})(Books);