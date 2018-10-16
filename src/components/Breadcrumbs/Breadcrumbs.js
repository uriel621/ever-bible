import React from 'react'
import { Link } from 'react-router-dom';

import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbExampleBigSize = (props) => (
  <Breadcrumb size='large'>
    {console.log('Props', props.length)}
    <Breadcrumb.Section><Link to="/">Books</Link></Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section active>{props.activeBook}</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbExampleBigSize