import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../../actions/index';

import {
    Container,
    Header,
    Image,
} from 'semantic-ui-react'

class Books extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    
    render(){
        console.log(this)
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Semantic UI React Fixed Template</Header>
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
                <Image src='./images/paragraph.png' style={{ marginTop: '2em' }} />
            </Container>
        );
    }
}

const mapStateToPros = state => ({
    "books": state.books
})

export default connect(mapStateToPros, {fetchBooks})(Books);