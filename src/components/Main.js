import React, { Component } from 'react';
import { Link } from '@chakra-ui/react';

export default class Main extends Component {
  render() {
    return (
      <div>
        Mau masuk ke Area Rahasia?
        <br />
        <Link color="teal.500" href="/secret">
          Area Rahasia!
        </Link>
        <br />
        Contoh Props -> {this.props.name}
      </div>
    );
  }
}
