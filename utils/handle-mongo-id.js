
const handleMongoId = (elemento) => { // elemento -> puede recibir un documento o un array de documentos. Va a ser un objeto mongoose
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