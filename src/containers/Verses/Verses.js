import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchChapter, fetchChapters, activeBook, activeChapter} from '../../actions/index';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import {
    Container
} from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';

class Verses extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchChapter(this.props.match.params.book, this.props.match.params.chapter);
    }
    
    // componentDidUpdate(){
    //     console.log(this.props.chapter);
    //     // for (let verse in this.props.chapter) {
    //     //     this.verses.push(this.props.chapter[verse])
    //     // }
    // }

    render(){
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Breadcrumbs activeBook={this.props.match.params.book} activeChapter={this.props.match.params.chapter}/>
                <Divider />
                {this.props.chapter && this.props.chapter.map((verses, index) => {
                    return <div key={index}>{verses}</div>;
                })}
            </Container>
        )
    }
}

const mapStateToProps = state => ({ 
    "activeBook": state.books.activeBook,
    "numberOfChapters": state.chapter.chapters,
    "chapter": state.chapterx.chapter
})

export default connect(mapStateToProps, {fetchChapter, fetchChapters, activeBook, activeChapter})(Verses);
