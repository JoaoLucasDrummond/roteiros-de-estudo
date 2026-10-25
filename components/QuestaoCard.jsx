export default function QuestaoCard({ questao, numero }) {
    return (
        <article className="questao-card">
            <h3>Questão {numero}</h3>
            <p>{questao.pergunta}</p>
            <details>
                <summary>Ver resposta</summary>
                <div className="resposta">
                    <strong>Resposta:</strong> {questao.resposta}
                </div>
            </details>
        </article>
    );
}
