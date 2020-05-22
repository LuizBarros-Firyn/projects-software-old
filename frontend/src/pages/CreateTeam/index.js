import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage,   } from 'formik';
import api from '../../services/api';

import { createTeamValidation } from '../../validators/YupValidations';
import { createTeamInitialValues as initialValues } from '../../utils/constants'

import { FiArrowLeft, FiTerminal } from 'react-icons/fi';

import './styles.css'

export default function CreateTeam() {
    var userSession = JSON.parse(localStorage.getItem('userSession'));
    const userIsAuthenticated = localStorage.getItem('userIsAuthenticated');

    const history = useHistory();

    useEffect(() => {
        if (!userIsAuthenticated || !userSession.user_is_freelancer) {
            alert('Acesso não autorizado.');
            history.push('/login');
        }
    });
    
    async function handleCreateTeam(values) {
        const data = {
            title: values.title,
            description: values.description
        };

        try {
            await api.post('teams', data, {
                headers: {
                    user_id: userSession.user_id
                }
            }).then(async response => {
                userSession.user_has_team = true;
                userSession.user_team_id = response.data._id;
                localStorage.setItem('userSession', JSON.stringify(userSession));
            });

            alert('Equipe cadastrada com sucesso!');
            history.push('/main');
        } catch (error) {
            alert('Erro ao cadastrar sua equipe, tente novamente mais tarde!');
        }
    }

    return (
        <div className="create-team-container">
            <div className="content">
                <section>
                    <div className="page-welcome">
                        <FiTerminal size={40} color="#e02041"/>
                        <h1>Crie sua equipe!</h1>
                    </div>
                    <p>Crie sua equipe e chame os melhores profissionais para trabalhar com você!</p>
                    <Link className="back-link" to="/main">
                        <FiArrowLeft size={16} color="#E02041" />
                        <span>Voltar</span>
                    </Link>
                </section>
                <Formik initialValues={initialValues} onSubmit={handleCreateTeam} validationSchema={createTeamValidation}>
                    { props => {
                        const {
                            touched, errors, isSubmitting
                        } = props;

                        return(
                            <Form autoComplete="off">
                                <Field placeholder="Nome da sua equipe" name="title" className={errors.title && touched.title && "failed-field"} />
                                <div className="error-messages">
                                    <ErrorMessage component="span" name="title" />
                                </div>
                                <Field component="textarea" placeholder="Breve descrição sobre sua equipe" name="description" className={errors.description && touched.description && "failed-field"} />
                                <div className="error-messages">
                                    <ErrorMessage component="span" name="description" />
                                </div>
                                <button className="button" type="submit" disabled={isSubmitting}>Cadastrar</button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>   
    );
}