import * as yup from 'yup';

const phoneRegExp = /^\(\d{2}\) \d{5}-\d{4}$/;

export const contactSchema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório.'),
  email: yup
    .string()
    .email('Informe um e-mail válido.')
    .required('O campo e-mail é obrigatório.'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Informe um número válido.')
    .required('O campo Whatsapp é obrigatório.'),
});
