import { Fingerprint } from '@mui/icons-material';
import Head from 'next/head';
import Link from 'next/link';
import { AppButton } from '../components';
import { useAuth } from '../hooks/useAuth';

export default function Home () {
  const { logout, user } = useAuth()
  
  return (
    <div>
      <Head>
        <title>Chat de Infoweb</title>
        <meta name="description" content="Chat do curso de Infoweb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <p>Chat de Infoweb</p>
          <p style={{ display: user ? 'block' : 'none' }}>LOGADO COMO {user?.name}</p>
          <Link href="/login"><p>login</p></Link>
          <AppButton 
            title="Clique aqui para deslogar"
            label="Logout"
            variant='contained'
            onClick={logout}
          />
        </nav>
        <h1>Landing page do chat de Infoweb</h1>
      </main>
    </div>
  );
}
