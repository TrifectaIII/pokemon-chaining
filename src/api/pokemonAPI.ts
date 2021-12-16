/* eslint-disable camelcase */
// request pokeapi data

const API_URL = 'https://pokeapi.co/api/v2/';

type ResourceList = {
    count: number
    results: {
        name: string
        url: string
    }[]
}

type Pokemon = {
    name: string
    url: string
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

export type Categories = {
    [name: string]: {
        name: string
        pokemon: Pokemon[]
    }
}

export const fetchEggGroupInfo = async (): Promise<Categories> => {

    const listRes = await fetch(`${API_URL}egg-group/`);
    const groupList = await listRes.json() as ResourceList;
    const groups: Categories = {};

    await Promise.all(groupList.results.map(async (group, index) => {

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

    const listRes = await fetch(`${API_URL}gender/`);
    const genderList = await listRes.json() as ResourceList;
    const genders: Categories = {};

    await Promise.all(genderList.results.map(async (gender, index) => {

        const res = await fetch(gender.url);
        const data = await res.json() as Gender;
        genders[gender.name] = {
            name: gender.name,
            pokemon: data.pokemon_species_details.map((details) => details.pokemon_species),
        };

    }));

    return genders;

};
