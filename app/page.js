"use client";
import { useState } from "react";
import disciplinas from "../data/disciplinas.json";
import roteiros from "../data/roteiros.json";
import Filtros from "../components/Filtros";
import RoteiroCard from "../components/RoteiroCard";
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
    <main className="container">
      <section className="hero">
        <span className="hero-etiqueta">Aprenda no seu ritmo</span>
        <h1>Roteiros de Estudo</h1>
        <p>
          Explore materiais organizados por disciplina e ano escolar,
          com conteúdos e questões para ajudar nos seus estudos.
        </p>
      </section>
      <section className="secao-filtros">
        <h2>Encontre seu roteiro</h2>
        <Filtros
          disciplinas={disciplinas}
          disciplinaSelecionada={disciplinaSelecionada}
          setDisciplinaSelecionada={setDisciplinaSelecionada}
          anoSelecionado={anoSelecionado}
          setAnoSelecionado={setAnoSelecionado}
        />
      </section>
      <section className="secao-roteiros">
        <h2>Roteiros disponíveis ({roteirosFiltrados.length})</h2>
        <div className="grade-roteiros">
          {roteirosFiltrados.map((roteiro) => {
            const disciplina = disciplinas.find(
              (item) => item.id === roteiro.disciplinaId
            );
            return (
              <RoteiroCard
                key={roteiro.id}
                roteiro={roteiro}
                disciplina={disciplina}
              />
            );
          })}
        </div>
        {roteirosFiltrados.length === 0 && (
          <p className="sem-resultados">
            Nenhum roteiro encontrado para os filtros selecionados.
          </p>
        )}
      </section>
    </main>
  );
}
