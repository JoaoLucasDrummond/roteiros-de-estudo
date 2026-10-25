import "./globals.css";
import Header from "../components/Header";
export const metadata = {
  title: "Roteiros de Estudo",
  description:
    "Plataforma de roteiros educacionais para alunos do 6º ao 9º ano.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <footer className="site-footer">
          <p>Roteiros de Estudo — Projeto de Desenvolvimento Web</p>
        </footer>
      </body>
    </html>
  );
}
