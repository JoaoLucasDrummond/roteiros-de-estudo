
import Link from "next/link";
import { notFound } from "next/navigation";

import roteiros from "../../../data/roteiros.json";
import disciplinas from "../../../data/disciplinas.json";
import DetalhesRoteiro from "../../../components/DetalhesRoteiro";

export function generateStaticParams() {
  return roteiros.map((roteiro) => ({
    id: String(roteiro.id),
  }));
}



export default async function PaginaRoteiro({ params }) {
  const { id } = await params;

  const roteiro = roteiros.find(
    (item) => String(item.id) === id
  );

  if (!roteiro) {
    notFound();
  }

  const disciplina = disciplinas.find(
    (item) => item.id === roteiro.disciplinaId
  );

  return (
    <main style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
      <Link href="/">← Voltar para os roteiros</Link>

      <div style={{ marginTop: "32px" }}>
        <DetalhesRoteiro
          roteiro={roteiro}
          disciplina={disciplina}
        />
      </div>
    </main>
  );
}
