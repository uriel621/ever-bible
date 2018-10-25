import React from 'react'
import { Link } from 'react-router-dom';

import { Breadcrumb } from 'semantic-ui-react';

const BreadcrumbExampleBigSize = (props) => (
  <Breadcrumb size='large'>
    <Breadcrumb.Section><Link to="/">Books</Link></Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section><Link to={`/${props.activeBook}`}>{props.activeBook}</Link></Breadcrumb.Section>
    {
      props.activeChapter && 
      <Breadcrumb.Divider icon='right chevron' />
    }
    {
      props.activeChapter && 
      <Breadcrumb.Section active>{props.activeChapter}</Breadcrumb.Section>
    }
  </Breadcrumb>
)

export default BreadcrumbExampleBigSize