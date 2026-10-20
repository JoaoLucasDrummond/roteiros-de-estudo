
"use client";

import { useState } from "react";
import disciplinas from "../data/disciplinas.json";

const estadoInicial = {
  nome: "",
  email: "",
  disciplinaId: "",
  anoEscolar: "",
  tema: "",
  quantidadeQuestoes: 3,
  dataUtilizacao: "",
};

export default function FormularioSolicitacao() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [erros, setErros] = useState({});
  const [confirmacao, setConfirmacao] = useState(false);

  function atualizarCampo(evento) {
    const { name, value } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    setErros((anterior) => ({
      ...anterior,
      [name]: "",
    }));

    setConfirmacao(false);
  }

  function validarFormulario() {
    const novosErros = {};

    if (!formulario.nome.trim()) {
      novosErros.nome = "Informe o nome do professor.";
    }

    const email = formulario.email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      novosErros.email = "Informe um e-mail válido.";
    }

    if (!formulario.disciplinaId) {
      novosErros.disciplinaId = "Selecione uma disciplina.";
    }

    if (!formulario.anoEscolar) {
      novosErros.anoEscolar = "Selecione o ano escolar.";
    }

    if (!formulario.tema.trim()) {
      novosErros.tema = "Informe o tema do roteiro.";
    }

    const quantidade = Number(formulario.quantidadeQuestoes);

    if (!Number.isInteger(quantidade) || quantidade < 3 || quantidade > 10) {
      novosErros.quantidadeQuestoes =
        "A quantidade deve estar entre 3 e 10.";
    }

    if (!formulario.dataUtilizacao) {
      novosErros.dataUtilizacao = "Selecione uma data.";
    } else {
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);

      const dataMinima = new Date(hoje);
      dataMinima.setDate(dataMinima.getDate() + 7);

      const [ano, mes, dia] = formulario.dataUtilizacao
        .split("-")
        .map(Number);

      const dataEscolhida = new Date(ano, mes - 1, dia);

      if (dataEscolhida < dataMinima) {
        novosErros.dataUtilizacao =
          "A data deve ter pelo menos 7 dias de antecedência.";
      }
    }

    return novosErros;
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    const novosErros = validarFormulario();
    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setConfirmacao(true);
      setFormulario(estadoInicial);
    } else {
      setConfirmacao(false);
    }
  }

  const estiloCampo = {
    width: "100%",
    padding: "10px",
    marginTop: "6px",
    border: "1px solid #aaa",
    borderRadius: "6px",
  };

  const estiloGrupo = {
    marginBottom: "18px",
  };

  return (
    <form onSubmit={enviarFormulario} noValidate>
      <div style={estiloGrupo}>
        <label htmlFor="nome">Nome do professor</label>
        <input
          id="nome"
          name="nome"
          value={formulario.nome}
          onChange={atualizarCampo}
          style={estiloCampo}
        />
        {erros.nome && <p role="alert">{erros.nome}</p>}
      </div>

      <div style={estiloGrupo}>
        <label htmlFor="email">E-mail institucional</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formulario.email}
          onChange={atualizarCampo}
          style={estiloCampo}
        />
        {erros.email && (
          <p role="alert" style={{ color: "#dc2626", marginTop: "5px" }}>
            {erros.email}
          </p>
        )}
      </div>

      <div style={estiloGrupo}>
        <label htmlFor="disciplinaId">Disciplina</label>
        <select
          id="disciplinaId"
          name="disciplinaId"
          value={formulario.disciplinaId}
          onChange={atualizarCampo}
          style={estiloCampo}
        >
          <option value="">Selecione</option>
          {disciplinas.map((disciplina) => (
            <option key={disciplina.id} value={disciplina.id}>
              {disciplina.nome}
            </option>
          ))}
        </select>
        {erros.disciplinaId && (
          <p role="alert">{erros.disciplinaId}</p>
        )}
      </div>

      <div style={estiloGrupo}>
        <label htmlFor="anoEscolar">Ano escolar</label>
        <select
          id="anoEscolar"
          name="anoEscolar"
          value={formulario.anoEscolar}
          onChange={atualizarCampo}
          style={estiloCampo}
        >
          <option value="">Selecione</option>
          {[6, 7, 8, 9].map((ano) => (
            <option key={ano} value={ano}>
              {ano}º ano
            </option>
          ))}
        </select>
        {erros.anoEscolar && (
          <p role="alert">{erros.anoEscolar}</p>
        )}
      </div>

      <div style={estiloGrupo}>
        <label htmlFor="tema">Tema solicitado</label>
        <input
          id="tema"
          name="tema"
          value={formulario.tema}
          onChange={atualizarCampo}
          style={estiloCampo}
        />
        {erros.tema && <p role="alert">{erros.tema}</p>}
      </div>

      <div style={estiloGrupo}>
        <label htmlFor="quantidadeQuestoes">
          Quantidade de questões (3 a 10)
        </label>
        <input
          id="quantidadeQuestoes"
          name="quantidadeQuestoes"
          type="number"
          min="3"
          max="10"
          value={formulario.quantidadeQuestoes}
          onChange={atualizarCampo}
          style={estiloCampo}
        />
        {erros.quantidadeQuestoes && (
          <p role="alert">{erros.quantidadeQuestoes}</p>
        )}
      </div>

      <div style={estiloGrupo}>
        <label htmlFor="dataUtilizacao">
          Data prevista de utilização
        </label>
        <input
          id="dataUtilizacao"
          name="dataUtilizacao"
          type="date"
          value={formulario.dataUtilizacao}
          onChange={atualizarCampo}
          style={estiloCampo}
        />
        {erros.dataUtilizacao && (
          <p role="alert">{erros.dataUtilizacao}</p>
        )}
      </div>

      <button
        type="submit"
        style={{
          padding: "12px 24px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Solicitar roteiro
      </button>

      {confirmacao && (
        <p role="status" style={{ marginTop: "20px", color: "green" }}>
          Solicitação validada com sucesso! Esta é uma demonstração:
          os dados não foram enviados ou armazenados.
        </p>
      )}
    </form>
  );
}
