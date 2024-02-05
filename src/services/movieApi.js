import { API_KEY, BASE_URL } from "../config/apiConfig";
import qs from 'qs'

const getMovies = async (type, dropmenu) => {
    const baseURL = BASE_URL

    // console.log('type from movieAPI -> ', type)

    const queryParams = {
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
    // console.log('dynamicParams ->', dynamicParams)

    const queryString = qs.stringify(queryParams, { arrayFormat: 'repeat' });
    // console.log("queryString -> ", queryString)

    // Get endpoint
    const endpoint = dynamicParams.type && dynamicParams.dropmenu
        ? `/${dynamicParams.type}/${dynamicParams.dropmenu}`
        : '';
    // console.log('endpoint ->', endpoint)

    const url = `${baseURL}${endpoint}?${queryString}`;
    // console.log('url -> ',url)

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

export default getMovies