import { API_KEY, BASE_URL } from "../config/apiConfig";
import qs from 'qs'

const getDetail = async (type, id) => {
    const baseURL = BASE_URL

    console.log('type from detailAPI', type)
    

    // console.log('type from detailApi -> ', type)

    const queryParams = {
        language: 'en-US',
        api_key: API_KEY,
    };
    // console.log('queryParams ->', queryParams)

    let dynamicParams = {};
    if (type && id) {
        dynamicParams = {
            ...dynamicParams,
            type: type,
            id: id
        }
    } else if (!type && id) {
        dynamicParams = {
            ...dynamicParams,
            type: "person"
        }
    }
    console.log('dynamicParams ->', dynamicParams)

    const queryString = qs.stringify(queryParams, { arrayFormat: 'repeat' });
    // console.log("queryString -> ", queryString)

    // Get endpoint
    const endpoint = dynamicParams.type && dynamicParams.id
        ? `/${dynamicParams.type}/${dynamicParams.id}`
        : `/${dynamicParams.type}/`;
    console.log('endpoint ->', endpoint)

    const url = `${baseURL}${endpoint}?${queryString}`;
    console.log('url -> ',url)

    try {
        // console.log('getting movies')

        const response = await fetch(url)
        const responseData = await response.json()
        // console.log('responseData -> ', responseData)

        if (!response.ok) {
            throw new Error('Failed to fetch a detail movie.')
        }

        return responseData

    } catch (error) {
        throw error
    }
}

export default getDetail