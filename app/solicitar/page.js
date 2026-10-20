
import Link from "next/link";
import FormularioSolicitacao from "../../components/FormularioSolicitacao";

export default function PaginaSolicitacao() {
  return (
    <main style={{ padding: "40px", maxWidth: "750px", margin: "auto" }}>
      <Link href="/">← Voltar para a página inicial</Link>

      <h1 style={{ marginTop: "30px" }}>
        Solicitar novo roteiro
      </h1>

      <p style={{ margin: "16px 0 30px" }}>
        Preencha as informações abaixo para simular
        a solicitação de um novo roteiro de estudo.
      </p>

      <FormularioSolicitacao />
    </main>
  );
}
