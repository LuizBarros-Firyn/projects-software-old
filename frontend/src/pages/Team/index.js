import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import { FiTerminal, FiLogOut } from 'react-icons/fi';

import './styles.css';

export default function Team() {
    const userSession = JSON.parse(localStorage.getItem('userSession'));

    const history = useHistory();

    useEffect(() => {
        if (!userSession.isFreelancer) {
            alert('Acesso não autorizado.');
            history.push('/login');
        }
    }, [history, userSession]);

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return(
        <div className="team-container">        
            <header>
                <FiTerminal size={20} color="000" />
                <span>Bem vindo, {userSession.name}</span>
                <Link to="/projects" onClick={handleLogout} >
                    <span>Projetos</span>
                </Link>
                <Link to="/team" onClick={handleLogout} >
                    <span>Equipe</span>
                </Link>
                <Link to="/" onClick={handleLogout} >
                    <FiLogOut size={18} color="#E02041" />
                    <span>Deslogar</span>
                </Link>
            </header>
            
        </div>
    );
}