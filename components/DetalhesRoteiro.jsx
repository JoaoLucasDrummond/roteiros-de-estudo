import QuestaoCard from "./QuestaoCard";
import TextoApoio from "./TextoApoio";
export default function DetalhesRoteiro({ roteiro, disciplina }) {
  return (
    <article className="detalhes-roteiro">
      <div className="detalhes-cabecalho">
        <span className="etiqueta">{disciplina?.nome}</span>
        <span className="etiqueta">{roteiro.anoEscolar}º ano</span>
        <h1>{roteiro.titulo}</h1>
        <p>{roteiro.descricao}</p>
      </div>
      <section className="detalhes-info">
        <p><strong>Tema:</strong> {roteiro.tema}</p>
        <p>
          <strong>Tempo estimado:</strong> {roteiro.tempoEstimado} minutos
        </p>
      </section>
      <section className="secao-conteudo">
        <h2>Conteúdo do roteiro</h2>
        <ol>
          {roteiro.conteudo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>
      <section className="secao-questoes">
        <h2>Questões de fixação</h2>
        {roteiro.questoes.map((questao, index) => (
          <QuestaoCard
            key={index}
            questao={questao}
            numero={index + 1}
          />
        ))}
      </section>
      <TextoApoio termo={roteiro.termoWikipedia || roteiro.titulo} />
      <section className="professor-revisor">
        <h2>Professor revisor</h2>
        <p><strong>Nome:</strong> {roteiro.professorRevisor.nome}</p>
        <p>
          <strong>Disciplina:</strong>{" "}
          {roteiro.professorRevisor.disciplina}
        </p>
        <p><strong>Escola:</strong> {roteiro.professorRevisor.escola}</p>
      </section>
    </article>
  );
}
