const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    descripcion: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra una tarea', {
        descripcion,
        completado
    })
    .command('actualizar', 'listar un elemento', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}

