import React, { useState } from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';

import Fingerprint from '@mui/icons-material/Fingerprint';
import HomeIcon from '@mui/icons-material/Home';

import {AppButton, AppContainer, AppInput} from '../src/components';
import { Grid } from '@mui/material';

const Login = props => {
  const router = useRouter ();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <Head>
        <title>Infoweb chat - Login</title>
      </Head>
      <main>
        <AppContainer>
          <AppInput 
            label="Usuário" 
            title="apelido ou email do usuário" 
            value={name} 
            onChange={handleChangeName}
          />
          <AppInput 
            label="Senha" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AppButton 
            onClick={event => router.back ()}
            label="voltar"
            variant="outlined"
            color="secondary"
            startIcon={<HomeIcon />} 
          />
          <AppButton 
            title="Clique aqui para entrar no chat"
            label="Entrar no chat"
            variant='contained'
            disabled={!(!!name && !!password)}
            endIcon={<Fingerprint />}
          />
        </AppContainer>
      </main>
    </div>
  );
};

export default Login;