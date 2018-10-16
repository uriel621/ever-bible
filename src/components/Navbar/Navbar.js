import React from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Dropdown,
    Image,
    Menu,
} from 'semantic-ui-react'

const Navbar = () => (
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='span' header>
            <Image size='mini' src='./images/logo.png' style={{ marginRight: '1.5em' }} />
            <Link to="/">Evers Bible</Link>
            </Menu.Item>
            <Menu.Item as='span'><Link to="/">Home</Link></Menu.Item>

            <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Menu>
);

export default Navbar;