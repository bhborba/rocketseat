import React, { Component } from 'react';

import profile from '../assets/profile.png'

class Header extends Component {
    render(){
        return(
            <header>
                <nav>
                    <img className='logo' src='https://i.imgur.com/KDIDiSE.png'/>
                    <div>
                        <span id='perfilText'>Meu Perfil</span>
                        <img className='perfil' src={profile}/>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
