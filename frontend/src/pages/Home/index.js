import React from 'react';
import { Link } from 'react-router-dom'

import { FiTerminal } from 'react-icons/fi';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import './styles.css';

export default function Home() {
    return (
        <div className="home-container">
            <section className="info">
                <header>
                    <span className="header-links">
                        <Link to="/about">
                            SOBRE A PLATAFORMA
                        </Link>
                    </span>
                    <span className="logon-buttons">
                        <Link to="/register">
                            REGISTRE-SE
                        </Link>
                        <Link to="/login">
                            LOGIN
                        </Link>
                    </span>
                </header>

                <section className="info-elements">
                    <div className="logo-style">
                        <FiTerminal size={80} color="#FFF" />
                        <strong>Projects</strong>
                    </div>
                    <strong>Freelancing, reimaginado.</strong>
                    <p>Faça parte do revolucionário sistema de freelancing
                        que está mundando a maneira que os profissionais autonomos
                        trabalham. Na plataforma Projects, você pode contratar ou formar sua
                        equipe com programadores e dominar o mercado!
                    </p>
                    <text className="company-email">emaildaplataforma@gmail.com</text>
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