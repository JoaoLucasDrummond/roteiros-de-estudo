import Link from "next/link";
export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <Link href="/" className="logo">    
                    📚 Roteiros de Estudo
                </Link>
                <nav className="menu" aria-label="Navegação principal">
                    <Link href="/">Início</Link>
                    <Link href="/solicitar">Solicitar roteiro</Link>
                </nav>
            </div>
        </header>
    );
}
