const urlBase = "https://rickandmortyapi.com/api";

const getCharacter = async (id) => {
    const res = await fetch(`${urlBase}/character/${id}`);
    const data = await res.json();
    return data;
}

const getCharacters = async (page) => {
    const res = await fetch(`${urlBase}/character?page=${page}`);
    const data = await res.json();
    return data;
}

export { getCharacter, getCharacters}