import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';

import { FiTerminal, FiPower } from 'react-icons/fi';

import './styles.css';

export default function FreelancerMain() {
    const [projects, setProjects] = useState([]);
    const userSession = JSON.parse(localStorage.getItem('userSession'));

    const history = useHistory();

    useEffect(() => {
        if (!userSession.user_is_freelancer) {
            alert('Acesso não autorizado.');
            history.push('/login');
        }

        api.get('available_projects').then(response => {
            setProjects(response.data);
        });        
    });

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    function sendProjectId(projectId) {
        localStorage.setItem('projectId', projectId);
    }

    return(
        <div className="freelancer-main-container">        
            <header>
                <div className="welcome-group">
                    <FiTerminal size={40} color="#e02041" />
                    <span>Bem vindo, {userSession.user_name}</span>
                </div>
                <div className="features">
                    <Link className="button" to="/ongoing_projects" >
                        Projetos em Andamento
                    </Link>
                    <Link className="button" to="/team">
                        Equipe
                    </Link>
                </div>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Projetos disponíveis</h1>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>
                        <strong>TITULO:</strong>
                        <p>{project.title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{project.description}</p>
                        <Link className="button" to="/new_offer" onClick={() => sendProjectId(project._id)}>
                            Fazer proposta
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}