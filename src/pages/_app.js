// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, PageProps }) {
  return <Component {...PageProps} />;
}

export default MyApp;
