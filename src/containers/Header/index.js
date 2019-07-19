import React, { Component } from 'react';
import { Container,Image,Menu,Visibility,} from 'semantic-ui-react';

import { menuStyle, fixedMenuStyle } from '../../helpers/styleHelper';
import Logo from '../../static/img/movie.jpg';
import { Link, Route } from 'react-router-dom';


class Header extends Component {

  state = {
    menuFixed: null,
    overlayFixed: false,
  }
 
  stickOverlay = () => this.setState({ overlayFixed: true })
  stickTopMenu = () => this.setState({ menuFixed: null })
  unStickOverlay = () => this.setState({ overlayFixed: false })
  unStickTopMenu = () => this.setState({ menuFixed: false })


  render() {

    const { menuFixed } = this.state
    return (
      <Visibility
      onBottomPassed={this.stickTopMenu}
      onBottomVisible={this.unStickTopMenu}
      once={false}
    >
      <Menu
        borderless
        fixed={menuFixed ? 'top' : undefined}
        style={menuFixed ? fixedMenuStyle : menuStyle}
      >
        <Container text>
          <Menu.Item>
            <Link to="/">
            <Image src={Logo} centered size='mini' />
            </Link>
          </Menu.Item>
          <Menu.Item header>Movie App</Menu.Item>
          <Menu.Item as={Link} to="/movies">
            Filmler
          </Menu.Item>
          
          <Menu.Item as='a'>Yeni Ekle</Menu.Item>
        </Container>
      </Menu>
    </Visibility>
    );
  }
}

export default Header;