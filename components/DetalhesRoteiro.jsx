
export default function DetalhesRoteiro({ roteiro, disciplina }) {
  return (
    <section>
      <h1>{roteiro.titulo}</h1>

      <p>{roteiro.descricao}</p>

      <hr style={{ margin: "24px 0" }} />

      <p><strong>Disciplina:</strong> {disciplina?.nome}</p>
      <p><strong>Ano escolar:</strong> {roteiro.anoEscolar}º ano</p>
      <p><strong>Tema:</strong> {roteiro.tema}</p>
      <p>
        <strong>Tempo estimado:</strong> {roteiro.tempoEstimado} minutos
      </p>

      <h2 style={{ marginTop: "32px" }}>Conteúdo do roteiro</h2>

      <ol>
        {roteiro.conteudo.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      </ol>

      <h2 style={{ marginTop: "32px" }}>Questões de fixação</h2>

      {roteiro.questoes.map((questao, index) => (
        <article
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "12px",
          }}
        >
          <h3>Questão {index + 1}</h3>
          <p>{questao.pergunta}</p>

          <details>
            <summary>Ver resposta</summary>
            <p>{questao.resposta}</p>
          </details>
        </article>
      ))}

      <h2 style={{ marginTop: "32px" }}>Professor revisor</h2>

      <p><strong>Nome:</strong> {roteiro.professorRevisor.nome}</p>
      <p>
        <strong>Disciplina:</strong> {roteiro.professorRevisor.disciplina}
      </p>
      <p><strong>Escola:</strong> {roteiro.professorRevisor.escola}</p>
    </section>
  );
}
