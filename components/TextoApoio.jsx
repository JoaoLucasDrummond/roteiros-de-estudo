"use client";
import { useEffect, useState } from "react";
import { buscarWikipedia } from "../lib/wikipedia";

export default function TextoApoio({ termo }) {
    const [artigo, setArtigo] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function carregar() {
            setCarregando(true);
            setErro("");
            setArtigo(null);

            try {
                const resultado = await buscarWikipedia(
                    termo,
                    controller.signal
                );
                if (!controller.signal.aborted) {
                    setArtigo(resultado);
                }
            } catch (error) {
                if (error.name === "AbortError") return;
                setErro(error.message);
            } finally {
                if (!controller.signal.aborted) {
                    setCarregando(false);
                }
            }
        }

        carregar();
        return () => controller.abort();
    }, [termo]);

    return (
        <section className="secao-apoio">
            <h2>Material complementar</h2>
            <p className="texto-secundario">
                Conteúdo de apoio consultado na Wikipédia.
            </p>

            {carregando && (
                <p role="status">Carregando informações da Wikipédia...</p>
            )}

            {!carregando && erro && (
                <div className="mensagem-erro" role="status">
                    Não foi possível carregar o material complementar.
                    <p>{erro}</p>
                    <p>O roteiro principal continua disponível normalmente.</p>
                </div>
            )}

            {!carregando && artigo && (
                <div className="artigo-wikipedia">
                    <h3>{artigo.titulo}</h3>
                    <p>{artigo.resumo}</p>
                    <a
                        href={artigo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ler artigo completo na Wikipédia ↗
                    </a>
                </div>
            )}
        </section>
    );
}
