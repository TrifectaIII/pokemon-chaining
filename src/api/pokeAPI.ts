// request egg group info

const API_URL = 'https://pokeapi.co/api/v2/';

export const fetchEggGroupInfo = async (): Promise<{
    [key: string]: unknown,
}> => {

    const groups: {[key: string]: unknown} = {};
    const res = await fetch(`${API_URL}egg-group/15`);
    const group = await res.json();
    groups[group.name] = group;
    console.log(groups);
    return group;

};
