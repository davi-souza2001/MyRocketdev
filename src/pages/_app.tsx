import { AuthProvider } from "../data/context/AuthContext";
import { AppProvider } from "../data/context/ProfileContext";
import ForceAuthentication from "../data/ForceAuthentication";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <ForceAuthentication>
          <Component {...pageProps} />
        </ForceAuthentication>
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
