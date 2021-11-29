import chalk from 'chalk';
import dedent from "dedent-js";

const {bgRed, bgGreen, bgWhite} = chalk

export const printError = (error) => {
    console.log(bgRed('ERROR') + ' ' + error)
};

export const printSuccess = (message) => {
    console.log(bgGreen('SUCCESS') + ' ' + message)
};

export const printHelp = () => {
    console.log(dedent`${bgWhite('HELP')}
    Без параметров вывод погоды
    -s [CITY] для установки города
    -h вывод подсказки
    -t [API_KEY] для сохранения токена
    `
    )
}