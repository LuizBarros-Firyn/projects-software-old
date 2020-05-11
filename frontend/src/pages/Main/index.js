import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FreelancerMain from '../../components/main/FreelancerMain';
import ClientMain from '../../components/main/ClientMain';

import './styles.css';

export default function Main() {
    const userSession = JSON.parse(localStorage.getItem('userSession'));

    const history = useHistory();

    useEffect(() => {
        if (!userSession) {
            alert('Acesso não autorizado.');
            history.push('/login');
        }
    }, [history, userSession]);

    
    if (userSession.user_is_freelancer) {
        return <FreelancerMain />
    }
    
    if (!userSession.user_is_freelancer) {
        return <ClientMain />
    }
}