import Menu from "./components/Menu";
import Rodape from "./components/Rodape";

export default function Layout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        {children}
        <Rodape />
      </body>
    </html>
  );
}