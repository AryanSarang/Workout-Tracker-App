import muscles from "../utils/muscles";
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd44195d21dmshd8f218d00aa6af4p12e130jsnd60608e9dc70',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
};


export const fetchData = async (url, Options) => {
    const response = await fetch(url, Options);
    const data = await response.json();
    return data;
}