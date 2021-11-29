import dedent from "dedent-js";
import {basename, dirname, extname, relative, resolve, sep} from "path";

export const infoFileAndPath = (path) => {
    console.log(cyan(dedent(`basename: ${basename(path)}
    dirname: ${dirname(path)}
    extname: ${extname(path)}
    resolve: ${resolve()}
    resolve: ${resolve()}
    relative ${relative(resolve(), path)}
    separation: ${sep}`))
    )
}