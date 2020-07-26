export const busca_repositorios = async (query,setLista,pesquisou) => {

    const data = await fetch(`https://api.github.com/search/repositories?q=${query}+in%3Aname&type=Repositories&resource?page=1`);

    const repos = await data.json();

    setLista(repos);

    pesquisou(true);

};
