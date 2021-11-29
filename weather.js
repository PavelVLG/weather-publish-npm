#!/ust/bin/env node
import {getArgs} from "./helper/args.js"
import {printSuccess, printError, printHelp} from "./services/log.service.js";
import {saveKeyValue,} from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
        printSuccess('Token сохранен')
    } catch (err) {
        printError(err.message)
    }
}

const initCli = () => {
    const args = getArgs(process.argv)
    console.log(args)
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // Сохранить город
    }
    if (args.t) {
        saveToken(args.t)
    }
    // вывести погоду
}
initCli()

