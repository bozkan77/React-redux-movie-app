import React, { Component } from 'react';
import { Container,Image,List,Menu,Segment,Visibility,} from 'semantic-ui-react';
import { menuStyle, fixedMenuStyle } from './helpers/styleHelper';
import 'semantic-ui-css/semantic.min.css' ;
import './App.css';

import Logo from './static/img/movie.jpg';
import MoviesPage from './pages/MoviesPage';


import { Link, Route } from 'react-router-dom';






class App extends Component {
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
      <div className="App">

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
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

        <Container text>
         
          <Route path="/movies" component={MoviesPage}></Route>
        </Container>

        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign='center'>
            <Link to="movies">
                <Image src={Logo} centered size='tiny' />
                </Link>
            
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Haritası
              </List.Item>
              <List.Item as='a' href='#'>
                İletişim
              </List.Item>
              <List.Item as='a' href='#'>
               Kullanım Koşulları
              </List.Item>
            </List>
          </Container>
        </Segment>
        
      </div>
    );
  }
  
}

export default App;
