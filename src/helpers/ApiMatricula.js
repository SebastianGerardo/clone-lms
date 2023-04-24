export const ApiCiclos = [
    {
        id: 1,
        nombre: 'Ciclo Pre Uni',
        precio: 200,
        aulasDisponibles: 3,
        fechaInicio: "24",
        mesInicio: "Mayo",
        estado: "Inactivo",
        process: 0,
        aulas : [
            {
                id: 1,
                capacidad: 20,
                nombre: 'Aula A',
                disponible: 6,
            },
            {
                id: 2,
                capacidad: 30,
                nombre: 'Aula B',
                disponible: 26,
            },
            {
                id: 3,
                capacidad: 20,
                nombre: 'Aula C',
                disponible: 16,
            },
        ]
    },
    {
        id: 2,
        nombre: 'Ciclo Católica',
        precio: 300,
        aulasDisponibles: 2,
        fechaInicio: "04",
        mesInicio: "Abril",
        estado: "Activo",
        process: 25,
        aulas : [
            {
                id: 1,
                capacidad: 20,
                nombre: 'Aula A',
                disponible: 2,
            },
            {
                id: 2,
                capacidad: 30,
                nombre: 'Aula B',
                disponible: 5,
            },
        ]
    },
    {
        id: 3,
        nombre: 'Ciclo Medicina',
        precio: 150,
        aulasDisponibles: 4,
        fechaInicio: "17",
        mesInicio: "Marzo",
        estado: "Activo",
        process: 50,
        aulas : [
            {
                id: 1,
                capacidad: 20,
                nombre: 'Aula A',
                disponible: 6,
            },
            {
                id: 2,
                capacidad: 30,
                nombre: 'Aula B',
                disponible: 12,
            },
            {
                id: 3,
                capacidad: 20,
                nombre: 'Aula C',
                disponible: 8,
            },
            {
                id: 4,
                capacidad: 30,
                nombre: 'Aula D',
                disponible: 15,
            }
        ]
    },
    {
        id: 4,
        nombre: 'Ciclo Unasam',
        precio: 250,
        aulasDisponibles: 1,
        fechaInicio: "30",
        mesInicio: "Abril",
        estado: "Inactivo",
        process: 0,
        aulas : [
            {
                id: 1,
                capacidad: 10,
                nombre: 'Aula A',
                disponible: 0,
            },
            {
                id: 2,
                capacidad: 30,
                nombre: 'Aula B',
                disponible: 11,
            }
        ]
    },
]