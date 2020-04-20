import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function FreelancerRegister() {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[age, setAge] = useState('');
    const[ddd, setDdd] = useState('');
    const[email, setEmail] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[cpf, setCpf] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    async function handleFreelancerRegister(e){
        e.preventDefault();

        const data = {
            name: firstName.trim() + " " + lastName.trim(),
            age,
            phone: "55" + ddd + phoneNumber,
            email,
            photo: '',
            person_identifier: cpf,
            company_name: '',
            city,
            uf,
            isFreelancer: true,
        };

        try {
            const user = await api.post('users', data);
            
            alert(`Seja bem vindo, ${user.data.name}`);
        } catch (error) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="freelancer-register-container">
            <section className="info">
                <header>
                    <Link to="/register">
                        <FiArrowLeft size={30} color="#0dc6ff" />
                        <text>Voltar</text>
                    </Link>
                </header>
            
                <section className="info-elements">
                    <div className="content">
                        <h1>Seja bem vindo, freelancer!</h1>
                        <form onSubmit={handleFreelancerRegister}>
                            <div className="input-group">
                                <input 
                                    placeholder="Primeiro Nome"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                                <input 
                                    placeholder="Ultimo Nome"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    // type="number"
                                    placeholder="DDD"
                                    style={{ width: 90 }}
                                    value={ddd}
                                    onChange={e => setDdd(e.target.value)}
                                />                       
                                <input 
                                    placeholder="Numero de Telefone"
                                    value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                        // type="number"
                                        placeholder="Idade"
                                        style={{ width: 120 }}
                                        value={age}
                                        onChange={e => setAge(e.target.value)}
                                    />
                                <input 
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <input 
                                placeholder="CPF"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                            />
                            <div className="input-group">
                                <input 
                                    placeholder="Cidade"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                />
                                <input 
                                    placeholder="UF"
                                    style={{ width: 80 }}
                                    value={uf}
                                    onChange={e => setUf(e.target.value)}
                                />
                            </div>
                            <button className="button" type="submit">Cadastrar</button>
                        </form>
                    </div>
                </section>
            </section>
        </div>
    );
}