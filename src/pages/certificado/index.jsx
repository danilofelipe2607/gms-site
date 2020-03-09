import React from 'react';
import { Layout } from 'layouts';
import { Header, PostList } from 'components';
import Helmet from 'react-helmet';
import { Formik } from 'formik';
import {
  Button,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  FormText,
  Row,
  Card,
  CardBody,
  CardHeader,
} from 'reactstrap';

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
      <Helmet title={'Home '} />
      <Header title="Home ">GMS- GOIÁS MERCANTIL SOLUÇÕES</Header>
      <Helmet />
      <div
        style={{
          marginTop: '25px',
          textAlign: 'center',
          alignItems: 'center',
          width: '45px',
          position: 'relative',
          display: 'inline',
        }}
      >
        <Card>
          <CardHeader>
            Faça a validação do seu certificado de informática Básica a baixo:
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ handleSubmit, handleChange }) => (
                <Form row onSubmit={handleSubmit}>
                  <FormGroup>
                    <Col sm="10">
                      <Label for="exampleEmail" hidden>
                        Email
                      </Label>
                      <Input
                        type="text"
                        name="cpf"
                        onChange={handleChange('cpf')}
                        id="cpf"
                        placeholder="Digite seu Cpf sem pontos"
                      />
                    </Col>
                  </FormGroup>{' '}
                  <FormGroup>
                    <Col sm="10">
                      <Label for="examplePassword" hidden>
                        Password
                      </Label>
                      <Input
                        onChange={handleChange('token')}
                        type="text"
                        name="token"
                        id="token"
                        placeholder="Digite o Token do seu certificado"
                      />
                    </Col>
                  </FormGroup>{' '}
                  <Button type="submit">Validar Certificado</Button>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
