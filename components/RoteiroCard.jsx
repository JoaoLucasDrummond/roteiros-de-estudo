import Link from "next/link";
export default function RoteiroCard({ roteiro, disciplina }) {
return (
    <article className="roteiro-card">
        <div className="card-etiquetas">
            <span className="etiqueta">{disciplina?.nome || "Disciplina"}</span>
            <span className="etiqueta">{roteiro.anoEscolar}º ano</span>
        </div>
        <h3>{roteiro.titulo}</h3>
        <p className="card-tema">{roteiro.tema}</p>
        <p>{roteiro.descricao}</p>
        <div className="card-rodape">
            <span>⏱ {roteiro.tempoEstimado} minutos</span>
            <Link href={`/roteiros/${roteiro.id}`} className="botao">
                Ver roteiro →
            </Link>
        </div>
    </article>
    );
}
