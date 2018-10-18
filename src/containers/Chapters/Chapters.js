import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchChapters, activeBook, activeChapter} from '../../actions/index';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import {
    Card,
    Container,
    Header,
    Image,
    Icon,
} from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'

class Chapters extends Component {
    componentDidMount() {
        this.props.activeBook(this.props.match.params.id);
        this.props.fetchChapters(this.props.match.params.id);
        console.log('@Chapters');
    }

    icons(chapters) {
        let card = [];
        for(let i = 1; i <= chapters; i++) {
            card.push(
                <Card centered={true} key={i} >
                    {/* <Image src={book.location} /> */}
                    <Card.Content className='nameOverflow'>
                        <span>{i}</span>
                    </Card.Content>
                </Card>
            )
        }
        console.log(card);
        return card
    }

    render(){
        window.scrollTo(0, 0);
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Breadcrumbs activeBook={this.props.match.params.id}/>
                <Divider />
                This book has {this.props.numberOfChapters} chapters
                <Card.Group itemsPerRow={3}>
                    {
                        this.icons(this.props.numberOfChapters)
                    }
                    {/* {this.props.statusBooks.books.map((book, index) => (
                        <Card as="div" key={book.id} onClick={(() => this.bookHandler(book.book))} >
                            <Image src={book.location} />
                            <Card.Content className='nameOverflow'>
                                <span>{book.book}</span>
                            </Card.Content>
                        </Card>
                    ))} */}
                </Card.Group>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ 
    "activeBook": state.books.activeBook,
    "numberOfChapters": state.chapter.chapters
})

export default connect(mapStateToProps, {fetchChapters, activeBook, activeChapter})(Chapters);
