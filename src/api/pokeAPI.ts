// request egg group info

const API_URL = 'https://pokeapi.co/api/v2/';

type EggGroupList = {
    count: number
    results: {
        name: string
        url: string
    }[]
}

type EggGroup = {
    name: string
    // eslint-disable-next-line camelcase
    pokemon_species: {
        name: string
        url: string
    }[]
}

export type EggGroups = {
    [name: string]: {
        name: string
        pokemon: {
            name: string
            url: string
        }[]
    }
}

export const fetchEggGroupInfo = async (): Promise<{
    [key: string]: unknown,
}> => {

    const listRes = await fetch(`${API_URL}egg-group/`);
    const groupList = await listRes.json() as EggGroupList;
    const groups: EggGroups = {};

    await Promise.all(groupList.results.map(async (group, index) => {

        const res = await fetch(group.url);
        const data = await res.json() as EggGroup;
        groups[group.name] = {
            name: group.name,
            pokemon: data.pokemon_species,
        };

    }));
    console.log(groups);
    return groups;

};
