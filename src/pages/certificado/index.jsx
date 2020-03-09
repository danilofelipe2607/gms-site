import React from 'react';
import { Layout } from 'layouts';
import { Header, PostList } from 'components';
import Helmet from 'react-helmet';
import { Formik } from 'formik';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function CertificadoIndex() {
  function handleSubmit(values) {
    console.log(values, 'event');
  }
  const initialValues = {
    cpf: '',
    token: '',
  };
  return (
    <Layout>
      <Helmet title={'Home Page'} />
      <Header title="Home Page">GMS- GOIÁS MERCANTIL SOLUÇÕES</Header>
      <Helmet />
      <h3>
        Faça a validação do seu certificado de informática Básica a baixo:
      </h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {props => (
          <form onSubmit={props.handleSubmit}>
            <FormGroup>
              <Label for="cpf">CPF:</Label>
              <Input type="text" name="cpf" placeholder="Digite o cpf" />
            </FormGroup>
            <FormGroup>
              <Label for="token">TOKEN:</Label>
              <Input
                type="text"
                name="token"
                placeholder="Digite o token"
                onChange={(values, event) => console.log(values, event, 'dasd')}
              />
            </FormGroup>

            <Button>Validar certificado</Button>
          </form>
        )}
      </Formik>
    </Layout>
  );
}
