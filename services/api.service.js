import {getKeyValue, KEY_DICTIONARY} from "./storage.service.js";
import axios from "axios";


export const getWeather = async () => {
    const token = await getKeyValue(KEY_DICTIONARY.token)
    const location = await getKeyValue(KEY_DICTIONARY.city)
    if (!token) {
        throw new Error('не задан ключ API, задайте его через команду -t[API_KEY]')
    }
    const url = `http://api.openweathermap.org/data/2.5/weather`

    const {data} = await axios(url, {
        params: {
            q: location,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
    return data;
}