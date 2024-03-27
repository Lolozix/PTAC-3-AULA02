import Layout from './components/Layout'; 
import Rodape from './components/Rodape';

export default function Page({ children }) {
  return (
    <Layout>
      {children}
      <Rodape />
    </Layout>
  );
}