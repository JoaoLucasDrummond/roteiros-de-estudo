
"use client";

import { useState } from "react";
import Link from "next/link";

import disciplinas from "../data/disciplinas.json";
import roteiros from "../data/roteiros.json";
import Filtros from "../components/Filtros";

export default function Home() {
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState("");
  const [anoSelecionado, setAnoSelecionado] = useState("");

  const roteirosFiltrados = roteiros.filter((roteiro) => {
    const correspondeDisciplina =
      disciplinaSelecionada === "" ||
      roteiro.disciplinaId === Number(disciplinaSelecionada);

    const correspondeAno =
      anoSelecionado === "" ||
      roteiro.anoEscolar === Number(anoSelecionado);

    return correspondeDisciplina && correspondeAno;
  });

  return (
    <main style={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>
      <h1>Roteiros de Estudo</h1>

      <p>
        Encontre materiais de estudo organizados por disciplina
        e ano escolar.
      </p>

      <hr style={{ margin: "24px 0" }} />

      <h2>Buscar roteiros</h2>

      <Filtros
        disciplinas={disciplinas}
        disciplinaSelecionada={disciplinaSelecionada}
        setDisciplinaSelecionada={setDisciplinaSelecionada}
        anoSelecionado={anoSelecionado}
        setAnoSelecionado={setAnoSelecionado}
      />

      <h2 style={{ marginTop: "32px" }}>
        Roteiros disponíveis ({roteirosFiltrados.length})
      </h2>

      <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
        {roteirosFiltrados.map((roteiro) => {
          const disciplina = disciplinas.find(
            (item) => item.id === roteiro.disciplinaId
          );

          return (
            <article
              key={roteiro.id}
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h3>{roteiro.titulo}</h3>

              <p>
                <strong>Disciplina:</strong> {disciplina?.nome}
              </p>

              <p>
                <strong>Ano:</strong> {roteiro.anoEscolar}º ano
              </p>

              <p>{roteiro.descricao}</p>

              <p>
                <strong>Tempo estimado:</strong> {roteiro.tempoEstimado} minutos
              </p>

              <Link href={`/roteiros/${roteiro.id}`}>
                Ver roteiro →
              </Link>
            </article>
          );
        })}

        {roteirosFiltrados.length === 0 && (
          <p>Nenhum roteiro encontrado para os filtros selecionados.</p>
        )}
      </div>
    </main>
  );
}
