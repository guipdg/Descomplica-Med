import React from 'react';
import Button from '../components/Button';
import LoginForm from '../forms/LoginForm';
import Container from '../components/Container';
import { UnauthNavbar } from '../components/Navbar';

const Login = () => {
    const lineStyle = { border: '1px solid var(--color-gray)', marginTop: 15 }
    const titleStyle = { fontWeight: 400 }

    return (
        <div>
            <UnauthNavbar />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 66px)' }}>
                <Container>
                    <div>
                        <h5 align='center' style={titleStyle}>Acesse sua Conta</h5>
                        <hr style={lineStyle} />
                        <LoginForm />
                        <div align='center'>
                            <Button text={'Entrar'} />
                        </div>
                        <p className='link' align='center' style={{ fontSize: 14 }}>
                            Ainda não possui conta?
                            <a style={{ color: 'var(--color-blue-primary)' }} href=''>
                                <br />
                                <b> Clique aqui para cadastrar</b>
                            </a>
                        </p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Login;