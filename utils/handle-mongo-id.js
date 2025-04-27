
const handleMongoId = (elemento) => {
    const clave = '_id'
    elemento = fromMongoVanilla(elemento)

    if (Array.isArray(elemento)) {
        for (let i = 0; i < elemento.length; i++) {
            elemento[i].id = elemento[i][clave]
            delete elemento[i][clave]            
        }
    } else {
        elemento.id = elemento[clave]
        delete elemento[clave]
    }
    return elemento

}

const fromMongoVanilla = (elemento) => {
    return JSON.parse(JSON.stringify(elemento))
}

export default handleMongoId