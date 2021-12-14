// request egg group info

const API_URL = 'https://pokeapi.co/api/v2/';

export const fetchEggGroupInfo = async (): Promise<{
    [key: string]: any,
}> => {

    const res = await fetch(`${API_URL}egg-group/1`);
    const group = await res.json();
    return group;

};
