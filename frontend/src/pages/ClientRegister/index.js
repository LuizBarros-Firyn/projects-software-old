import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { clientRegisterValidation } from '../../validators/YupValidations.js';
import { clientRegisterInitialValues as initialValues } from '../../utils/constants'

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function clientRegister() {
    async function handleClientRegister(values){
        const data = {
            name: values.firstName.trim() + " " + values.lastName.trim(),
            login: values.login,
            password: values.password,
            age: values.age,
            phone: '',
            email: values.email,
            photo: '',
            person_identifier: values.cnpj,
            company_name: values.companyName,
            city: values.city,
            uf: values.uf,
            isFreelancer: false
        };

        try {
            const user = await api.post('users', data);
            
            alert(`Seja bem vindo, ${user.data.name}`);
        } catch (error) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="client-register-container">
            <section className="info">
                <header>
                    <Link to="/register">
                        <FiArrowLeft size={30} color="#e02041" />
                        <text>Voltar</text>
                    </Link>
                </header>
            
                <section className="info-elements">
                    <div className="content">
                        <h1>Seja bem vindo, cliente!</h1>
                        <Formik initialValues={initialValues} onSubmit={handleClientRegister} validationSchema={clientRegisterValidation}>
                            { props => {
                                const {
                                    touched, errors, isSubmitting
                                } = props;

                                return(
                                    <Form autoComplete="off">
                                        <div className="input-group">
                                            <Field placeholder="Primeiro Nome" name="firstName" className={errors.firstName && touched.firstName && "failed-field"} />
                                            <Field placeholder="Ultimo Nome" name="lastName" className={errors.lastName && touched.lastName && "failed-field"} />
                                        </div>
                                        <div className="error-messages">
                                            <div className="left-field-error">
                                                <ErrorMessage component="span" name="firstName" />
                                            </div>
                                            <div className="right-field-error">
                                                <ErrorMessage component="span" name="lastName" />
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <Field placeholder="Login" name="login" className={errors.login && touched.login && "failed-field"} />                       
                                            <Field placeholder="Senha" name="password" type="password" className={errors.password && touched.password && "failed-field"} />
                                        </div>
                                        <div className="error-messages">
                                            <div className="left-field-error">
                                                <ErrorMessage component="span" name="login" />
                                            </div>
                                            <div className="right-field-error">
                                                <ErrorMessage component="span" name="password" />
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <Field placeholder="Idade" style={{ width: 120 }} name="age" className={errors.age && touched.age && "failed-field"} />
                                            <Field placeholder="E-mail" name="email" className={errors.email && touched.email && "failed-field"} />
                                        </div>
                                        <div className="error-messages">
                                            <div className="left-field-error">
                                                <ErrorMessage component="span" name="age" />
                                            </div>
                                            <div className="right-field-error">
                                                <ErrorMessage component="span" name="email" />
                                            </div>
                                        </div>
                                        <Field placeholder="CNPJ" name="cnpj" className={errors.cnpj && touched.cnpj && "failed-field"} />
                                        <div className="error-messages">
                                            <ErrorMessage component="span" name="cnpj" />
                                        </div>
                                        <Field placeholder="Nome do seu negócio" name="companyName" className={errors.companyName && touched.companyName && "failed-field"} />
                                        <div className="error-messages">
                                            <ErrorMessage component="span" name="companyName" />
                                        </div>
                                        <div className="input-group">
                                            <Field placeholder="Cidade" name="city" className={errors.city && touched.city && "failed-field"} />
                                            <Field placeholder="UF" style={{ width: 80 }} name="uf" className={errors.uf && touched.uf && "failed-field"} />
                                        </div>
                                        <div className="error-messages">
                                            <div className="left-field-message">
                                                <ErrorMessage component="span" name="city" />
                                            </div>
                                            <div className="right-error-message">
                                                <ErrorMessage component="span" name="uf" />
                                            </div>
                                        </div>
                                        <button className="button" type="submit" disabled={isSubmitting}>Cadastrar</button>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </section>
            </section>
        </div>
    );
}