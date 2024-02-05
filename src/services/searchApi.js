import { API_KEY, BASE_URL } from "../config/apiConfig";
import qs from 'qs'

const getSearchResult = async (query,type, dropmenu) => {
    const baseURL = BASE_URL

    console.log("type from search API -> ", type);
    console.log("dropdownmenu from search API -> ", dropmenu)
    console.log("query from search API -> ", query)

    // type -> input value (i.g. kimi)
    // dropmenu -> undefined
    // query -> multi
    

    const queryParams = {
        query: query,
        include_adult: false,
        language: 'en-US',
        page: 1,
        api_key: API_KEY,
    };
    // console.log('queryParams ->', queryParams)

    let dynamicParams = {};
    if (type && dropmenu) {
        dynamicParams = {
            type: type,
            dropmenu: dropmenu
        }
    }
    console.log('dynamicParams ->', dynamicParams)

    const queryString = qs.stringify(queryParams, { arrayFormat: 'repeat' });
    console.log("queryString -> ", queryString)

    // Get endpoint
    const endpoint = dynamicParams.type && dynamicParams.dropmenu
        ? `/${dynamicParams.type}/${dynamicParams.dropmenu}`
        : '';
    console.log('endpoint ->', endpoint)

    const url = `${baseURL}${endpoint}?${queryString}`;
    console.log('url -> ',url)

    try {
        // console.log('getting movies')

        const response = await fetch(url)

        const responseData = await response.json()
        // console.log('responseData -> ', responseData)

        if (!response.ok) {
            throw new Error('Failed to fetch movies')
        }

        const results = await responseData.results
        // console.log('result -> ',results)

        return results

    } catch (error) {
        throw error
    }
}

export default getSearchResult