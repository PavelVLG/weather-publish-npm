#!/ust/bin/env node
import {getArgs} from "./helper/args.js"
import {printSuccess, printError, printHelp} from "./services/log.service.js";
import {saveKeyValue, KEY_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js"
import {uiWeather} from "./services/ui.service.js"

const saveToken = async (token) => {

    if (!token.length) {
        return printError('токен не передан')
    }
    try {
        await saveKeyValue(KEY_DICTIONARY.token, token)
        printSuccess('Token сохранен')
    } catch (err) {
        printError(err.message)
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        return printError('Город не задан')
    }
    try {
        await saveKeyValue(KEY_DICTIONARY.city, city)
        printSuccess('Город сохранен')
    } catch (err) {
        printError(err.message)
    }
};
const getForcast = async () => {
    try {
        const weather = await getWeather();
        uiWeather(weather)
    } catch (err) {
        const error = err?.response?.status
        switch (error) {
            case 404:
                console.log('не верно указан город')
                break
            case 401:
                console.log('не верно указан токен')
                break
            default:
                console.log(error)
        }
        console.log('error', error)
    }
}


const initCli = () => {

    const args = getArgs(process.argv)
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        saveCity(args.s)
    }
    if (args.t) {
        saveToken(args.t)
    }
    getForcast()
}
initCli()

