export async function buscarWikipedia(termo, signal) {
    const parametros = new URLSearchParams({
        action: "query",
        format: "json",
        prop: "extracts",
        exintro: "1",
        explaintext: "1",
        redirects: "1",
        titles: termo,
        origin: "*",
    });
    const url = `https://pt.wikipedia.org/w/api.php?${parametros}`;
    const resposta = await fetch(url, { signal });
    if (!resposta.ok) {
        throw new Error("Não foi possível acessar a Wikipédia.");
    }
    const dados = await resposta.json();
    if (dados.error) {
        throw new Error("A Wikipédia retornou um erro.");
    }
    const paginas = Object.values(dados.query?.pages || {});
    const pagina = paginas[0];
    if (!pagina || pagina.missing !== undefined) {
        throw new Error("Não encontramos um artigo sobre esse tema.");
    }
    const resumo = pagina.extract?.trim();
    if (!resumo) {
        throw new Error("O artigo não possui um resumo disponível.");
    }
    return {
        titulo: pagina.title,
        resumo,
        link: `https://pt.wikipedia.org/wiki/${encodeURIComponent(
            pagina.title.replaceAll(" ", "_")
        )}`,
    };
}
