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
import { Divider } from 'semantic-ui-react';

class Chapters extends Component {
    componentDidMount() {
        this.props.activeBook(this.props.match.params.book);
        // chapterList
        this.props.fetchChapters(this.props.match.params.book);
        console.log('@Chapters');
    }

    icons(chapters) {
        let card = [];
        for(let i = 1; i <= chapters; i++) {
            card.push(
                <Card key={i} onClick={() => this.props.history.push(`${this.props.match.params.book}/${i}`)}>
                    <Card.Content textAlign="center" className='nameOverflow'>
                        <span>{i}</span>
                    </Card.Content>
                </Card>
            )
        }
        return card
    }

    render(){
        window.scrollTo(0, 0);
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Breadcrumbs activeBook={this.props.match.params.book}/>
                <Divider />
                <Card.Group itemsPerRow={3}>
                    {
                        this.icons(this.props.numberOfChapters)
                    }
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
