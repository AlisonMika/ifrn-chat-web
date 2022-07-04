import React, { useState } from 'react';

import Head from 'next/head';
import {useRouter} from 'next/router';
import {AppButton, AppContainer, AppInput} from '../src/components';

import Fingerprint from '@mui/icons-material/Fingerprint';
import HomeIcon from '@mui/icons-material/Home';

const Login = props => {
  const router = useRouter ();
  const [userName, setUserName] = useState("teste");
  const [userPassword, setUserPassword] = useState("")


  return (
    <div>
      <Head>
        <title>Infoweb chat - Login</title>
      </Head>
      <main>
        <AppContainer>
          <AppInput label="Usuário" title="apelido ou email do usuário" value={userName} />
          <AppInput label="Senha" type="password" />
          <AppButton
            onClick={event => router.back ()}
            label="voltar"
            color="secondary"
            startIcon={<HomeIcon />}
          />
          <AppButton
            title="Clique aqui para entrar no chat"
            label="Entrar no chat"
            disabled={userName === "" || userPassword === ""}
            endIcon={<Fingerprint />}
          />
        </AppContainer>
      </main>
    </div>
  );
};

export default Login;
