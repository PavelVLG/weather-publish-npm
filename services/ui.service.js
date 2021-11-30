import chalk from 'chalk';

const {blueBright, cyanBright} = chalk

export const uiWeather = (data) => {

    const result = {
        city: `город: ${data.name}`,
        precipitation: `осадки: ${data.weather[0].description}`,
        temperature: `температура воздуха: ${data.main.temp}`,
        wind: `скорость ветра: ${data.wind.speed}м.с.`
    }

    const values = Object.values(result)

    values.forEach((item, index, arr) => {
        if (item === result.precipitation) {
            item = `${item} `
        }
        if (index % 2 === 0) {
            console.log(blueBright(item))
        } else {
            console.log(cyanBright(item))
        }
    })
}