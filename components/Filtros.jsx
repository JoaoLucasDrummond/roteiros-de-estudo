
"use client";

export default function Filtros({
  disciplinas,
  disciplinaSelecionada,
  setDisciplinaSelecionada,
  anoSelecionado,
  setAnoSelecionado,
}) {
  return (
    <div>
      <label htmlFor="disciplina">Disciplina: </label>
      <select
        id="disciplina"
        value={disciplinaSelecionada}
        onChange={(e) => setDisciplinaSelecionada(e.target.value)}
      >
        <option value="">Todas as disciplinas</option>

        {disciplinas.map((disciplina) => (
          <option key={disciplina.id} value={disciplina.id}>
            {disciplina.nome}
          </option>
        ))}
      </select>

      <label htmlFor="ano"> Ano escolar: </label>
      <select
        id="ano"
        value={anoSelecionado}
        onChange={(e) => setAnoSelecionado(e.target.value)}
      >
        <option value="">Todos os anos</option>
        {[6, 7, 8, 9].map((ano) => (
          <option key={ano} value={ano}>
            {ano}º ano
          </option>
        ))}
      </select>
    </div>
  );
}
