import * as Yup from 'yup';
// import { cnpj as cnpjValidator, cpf as cpfValidator } from 'cpf-cnpj-validator';

export function clientRegisterValidation() {
    const schema = Yup.object().shape({
        firstName: Yup.string().min(2, "Nome inválido").max(50, "Nome inválido").required("Nome obrigatório"),
        lastName: Yup.string().min(2, "Sobrenome inválido").max(50, "Sobrenome inválido").required("Sobrenome obrigatório"),
        login: Yup.string().min(5, "Login muito curto").max(30, "Login muito longo").required("Login obrigatório"),
        password: Yup.string().min(5, "Senha muito curta").max(30, "Senha muito longa").required("Senha obrigatória"),
        age: Yup.number("Idade inválidade").moreThan(17, "Apenas maiores de idade").lessThan(120, "Idade inválida").required("Idade obrigatória"),
        email: Yup.string().min(6, "O e-mail precisa ter mais de 6 carácteres").max(90, "E-mail inválido").email("E-mail inválido").required("O e-mail é obrigatório"),
        cnpj: Yup.string().min(11, "Documento inválido").max(16, "Documento inválido").required("Documento obrigatório"),
        companyName: Yup.string().min(2, "Negócio inválido").max(80, "Negócio inválido").required("Campo obrigatório"),
        city: Yup.string().min(2, "Cidade inválida").max(60, "Cidade inválida").required("Cidade obrigatória"),
        uf: Yup.string().min(2, "UF inválido").max(2, "UF inválido").required("UF obrigatório"),
    });

    return schema;
};

export function freelancerRegisterValidation() {
    const schema = Yup.object().shape({
        firstName: Yup.string().min(2, "Nome inválido").max(50, "Nome inválido").required("Nome obrigatório"),
        lastName: Yup.string().min(2, "Sobrenome inválido").max(50, "Sobrenome inválido").required("Sobrenome obrigatório"),
        login: Yup.string().min(5, "Login muito curto").max(30, "Login muito longo").required("Login obrigatório"),
        password: Yup.string().min(5, "Senha muito curta").max(30, "Senha muito longa").required("Senha obrigatória"),
        age: Yup.number("Idade inválidade").moreThan(18, "Apenas maiores de idade").lessThan(120, "Idade inválida").required("Idade obrigatória"),
        email: Yup.string().min(6, "O e-mail precisa ter mais de 6 carácteres").max(90, "E-mail inválido").email("E-mail inválido").required("O e-mail é obrigatório"),
        cpf: Yup.string().min(11, "Documento inválido").max(14, "Documento inválido").required("Documento obrigatório"),
        city: Yup.string().min(2, "Cidade inválida").max(60, "Cidade inválida").required("Cidade obrigatória"),
        uf: Yup.string().min(2, "UF inválido").max(2, "UF inválido").required("UF obrigatório"),
    });

    return schema;
};