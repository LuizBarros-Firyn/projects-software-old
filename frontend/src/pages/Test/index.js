import React from 'react';
import { FiTerminal } from 'react-icons/fi';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import './styles.css';

export default function Home() {
    return (
        <div className="home-container">
            <section className="logo">
                <div className="logo-style">
                    <FiTerminal size={80} color="#FFF"/>
                    <strong>Projects</strong>
                </div>
            </section>

            <section className="info">
                <header>
                    <span className="header-links">
                        <a href="/about">
                            SOBRE A PLATAFORMA
                        </a>
                    </span>
                    <span className="logon-buttons">
                        <a className="register" href="/register">
                            REGISTRE-SE
                        </a>
                        <a href="/login">
                            LOGIN
                        </a>
                    </span>
                </header>

                <section className="info-elements">
                    <strong>Freelancing. Reformulado.</strong>
                    <p>Faça parte do revolucionário sistema de freelancing
                        que está mundando a maneira que os profissionais autonomos
                        trabalham. Na plataforma Projects, você pode formar sua
                        equipe com outros programadores e dominar o mercado!
                    </p>
                    <text className="company-email">luizbarros.incode@gmail.com</text>
                    <text className="company-phone">(43) 98989-9797</text>
                    <div className="social-media">
                        <FaFacebookSquare className="first-icon" size={30} color="#FFF"/>
                        <FaInstagram size={30} color="#FFF"/>
                        <FaWhatsapp size={30} color="#FFF"/>
                    </div>
                </section>
            </section>
        </div>
    );
}