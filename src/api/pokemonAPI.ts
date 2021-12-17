/* eslint-disable camelcase */
// request pokeapi data

const API_URL = 'https://pokeapi.co/api/v2';

export type Pokemon = {
    name: string
    url: string
}

export type Categories = {
    [name: string]: {
        name: string
        pokemon: Pokemon[]
    }
}

type ResourceList = {
    count: number
    results: {
        name: string
        url: string
    }[]
}

type EggGroup = {
    name: string
    pokemon_species: Pokemon[]
}

type Gender = {
    name: string
    pokemon_species_details: {
        rate: number
        pokemon_species: Pokemon
    }[]
}

export const fetchPokemonInfo = async (): Promise<Pokemon[]> => {

    const listRes = await fetch(`${API_URL}/pokemon?limit=99999`);
    const pokemonList = await listRes.json() as ResourceList;
    return pokemonList.results;

};

export const fetchEggGroupInfo = async (): Promise<Categories> => {

    const listRes = await fetch(`${API_URL}/egg-group`);
    const groupList = await listRes.json() as ResourceList;
    const groups: Categories = {};

    await Promise.all(groupList.results.map(async (group) => {

        const res = await fetch(group.url);
        const data = await res.json() as EggGroup;
        groups[group.name] = {
            name: group.name,
            pokemon: data.pokemon_species,
        };

    }));

    return groups;

};

export const fetchGenderInfo = async (): Promise<Categories> => {

    const listRes = await fetch(`${API_URL}/genderERROR`);
    const genderList = await listRes.json() as ResourceList;
    const genders: Categories = {};

    await Promise.all(genderList.results.map(async (gender) => {

        const res = await fetch(gender.url);
        const data = await res.json() as Gender;
        genders[gender.name] = {
            name: gender.name,
            pokemon: data.pokemon_species_details.map(
                (details) => details.pokemon_species,
            ),
        };

    }));

    return genders;

};
