import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiTerminal, FiPower, FiArrowRight } from 'react-icons/fi';

import './styles.css';

export default function ProjectsOffers() {
    const [projects, setProjects] = useState([]);
    const userSession = JSON.parse(localStorage.getItem('userSession'));

    const history = useHistory();

    useEffect(() => {
        if (userSession.user_is_freelancer) {
            alert('Acesso não autorizado.');
            history.push('/login');
        }

        api.get('projects_offers', {
            headers: {
                user_id: userSession.user_id
            }
        }).then(response => {
            setProjects(response.data);
        });
        
    }, [history, userSession.user_is_freelancer, userSession.user_id]);

    function handleLogout() {
        localStorage.clear();

        history.push('/login');
    }

    function sendProjectInfo(projectId, projectTitle) {
        localStorage.setItem('projectId', projectId);
        localStorage.setItem('projectTitle', projectTitle);
    }

    return(
        <div className="projects-offers-container">        
            <header>
                <div className="welcome-group">
                    <FiTerminal size={40} color="#e02041" />
                    <span>Bem vindo, {userSession.user_name}</span>
                </div>
                <Link className="button" to="/main" >
                    Home
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Projetos Publicados</h1>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>
                        <strong>NOME:</strong>
                        <p>{project.title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{project.description}</p>
                        <Link to="/offers_review" onClick={() => sendProjectInfo(project._id, project.title)}>
                            <FiArrowRight size={30} color="#000" />
                            <h3>Rever {project.offers_quantity} ofertas disponíveis para este projeto</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}