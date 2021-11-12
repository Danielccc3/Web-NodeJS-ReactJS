import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    render() {
  
      let img = 'https://cdn.discordapp.com/attachments/231201450305388546/907407214971592794/Jhingo.png';

      return (
        <img src={img} width={300} height={300} />
      );
    }
  }

  export default Perfil;