import { AuthProvider } from "../data/context/AuthContext";
import { AppProvider } from "../data/context/ProfileContext";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
