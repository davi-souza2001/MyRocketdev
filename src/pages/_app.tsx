import { AuthProvider } from "../data/context/AuthContext";
import { AppProvider } from "../data/context/ProfileContext";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // O "Component" representa toda a aplicação e o AppProvider e AuthProvider seria os dois provideres criados
  // anteriormente para ter acesso facilitado as funções de login e a lista de perfis
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
