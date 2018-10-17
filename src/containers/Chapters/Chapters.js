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

    render(){
        window.scrollTo(0, 0);
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Breadcrumbs activeBook={this.props.match.params.id}/>
                <Divider />
                This book has {this.props.numberOfChapters} chapters
            </Container>
        );
    }
}

const mapStateToProps = state => ({ 
    "activeBook": state.books.activeBook,
    "numberOfChapters": state.chapter.chapters
})

export default connect(mapStateToProps, {fetchChapters, activeBook, activeChapter})(Chapters);
