import React from 'react';

import { Container,Image,List,Segment} from 'semantic-ui-react';
import Logo from '../../static/img/movie.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
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
  );
}
export default Footer;