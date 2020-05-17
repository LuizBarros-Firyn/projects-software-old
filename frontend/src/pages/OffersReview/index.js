import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiTerminal, FiPower } from 'react-icons/fi';

import './styles.css';

export default function OffersReview() {
    const [offers, setOffers] = useState([]);
    const userSession = JSON.parse(localStorage.getItem('userSession'));
    const projectId = localStorage.getItem('projectId');
    const projectTitle = localStorage.getItem('projectTitle');

    const history = useHistory();

    useEffect(() => {
        if (userSession.user_is_freelancer) {
            alert('Acesso não autorizado.');
            history.push('/login');
        }

        api.get('offers', {
            headers: {
                user_id: userSession.user_id,
                project_id: projectId
            }
        }).then(response => {
            setOffers(response.data);
        });
    }, [history, userSession.user_is_freelancer, userSession.user_id, projectId]);

    function handleLogout() {
        localStorage.clear();

        history.push('/login');
    }

    async function handleDeleteOffer(id) {
        try {
            await api.delete(`offers/${id}`, {
                headers: {
                    user_id: userSession.user_id,
                }
            });

            setOffers(offers.filter(offers => offers._id !== id));
        } catch {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    async function handleAcceptOffer(offer) {
        const data = {
            price: offer.price,
            start_date: offer.start_date,
            finish_date: offer.finish_date
        }

        try {
            await api.put(`assign_project_team/${offer.project}`, data, {
                headers: {
                    user_id: userSession.user_id,
                    team_id: offer.team._id
                }
            });

            history.push('/ongoing_projects');
        } catch {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    return(
        <div className="offers-review-container">        
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
            <h1>Propostas referentes ao projeto: {projectTitle}</h1>
            <ul>
                {offers.map(offer => (
                    <li key={offer._id}>
                        <strong>NOME DA EQUIPE:</strong>
                        <p>{offer.team.title}</p>
                        <strong>DESCRIÇÃO DA PROPOSTA:</strong>
                        <p>{offer.description}</p>
                        <strong>DATA DE INICIO:</strong>
                        <p>{offer.start_date}</p>
                        <strong>DATA DE ENTREGA:</strong>
                        <p>{offer.finish_date}</p>
                        <strong>PREÇO:</strong>
                        <p>R$: {offer.price}</p>
                        <div className="choice-buttons">
                            <button className="button" onClick={() => handleDeleteOffer(offer._id)} style={{backgroundColor: "#e02041"}}>
                                Recusar
                            </button>
                            <button className="button" onClick={() => handleAcceptOffer(offer)} style={{backgroundColor: "#e02041"}}>
                                Aceitar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}