/*
Colección de jugadores de la NBA
*/


db.jugadores2.drop()
db.Jugadores2.insertMany([
    {
        _id: 1,
        Nombre: "Lebron",
        Apellidos: "James",
        FechaNac: new Date("1984-12-30"),
        FechaDeb: new Date("2003-10-23"),
        Fisico: { 
            Altura: 206, 
            Envergadura: 214, 
            Peso: 113
        },
        Sano: true,
        Posiciones: [
            "Alero", "Base", "Ala-Pivot"
        ],
        NumPremios: 50,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Lakers", Partidos: 82}
        ] 
    },
    {
        _id: 2,
        Nombre: "James",
        Apellidos: "Harden",
        FechaNac: new Date("1989-08-26"),
        FechaDeb: new Date("2009-10-29"),
        Fisico: { 
            Altura: 196, 
            Envergadura: 210, 
            Peso: 102
        },
        Sano: true,
        Posiciones: [
            "Escolta", "Base"
        ],
        NumPremios: 37,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Rockets", Partidos: 21},
            { Equipo: "Nets", Partidos: 57}
        ] 
    },
    {
        _id: 3 ,
        Nombre: "Anthony",
        Apellidos: "Davis",
        FechaNac: new Date("1993-03-11"),
        FechaDeb: new Date("2012-10-07"),
        Fisico: {
            Altura: 208, 
            Envergadura: 227, 
            Peso: 115
        },
        Sano: true,
        Posiciones: [
            "Ala-Pivot", "Pivot"
        ],
        NumPremios: 26,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Pacers", Partidos: 50},
            { Equipo: "Lakers", Partidos: 32}
        ] 
    },
    {
        _id:4 ,
        Nombre: "Marc",
        Apellidos: "Gasol",
        FechaNac: new Date("1985-01-29"),
        FechaDeb: new Date("2008-10-30"),
        Fisico: { 
            Altura: 216, 
            Envergadura: 224, 
            Peso: 116
        },
        Sano: true,
        Posiciones: [
            "Pivot", "Ala-Pivot"
        ],
        NumPremios: 34,
        Comp_Estre: false,
        Partidos_Año: [
            { Equipo: "Lakers", Partidos: 21},
            { Equipo: "Raptors", Partidos: 15}
        ] 
    },
    {
        _id:5 ,
        Nombre: "Pau",
        Apellidos: "Gasol",
        FechaNac: new Date("1980-07-06"),
        FechaDeb: new Date(""),
        Fisico: { 
            Altura: 214, 
            Envergadura: 226, 
            Peso: 114
        },
        Sano: false,
        Posiciones: [
            "Pivot", "Ala-Pivot"
        ],
        NumPremios: 29,
        Comp_Estre: false,
        Partidos_Año: [
            { Equipo: "Warriors", Partidos: 20},
            { Equipo: "Lakers", Partidos: 2}
        ] 
    },
    {
        _id:6 ,
        Nombre: "Stephen",
        Apellidos: "Curry",
        FechaNac: new Date("1988-03-14"),
        FechaDeb: new Date("2009-10-29"),
        Fisico: { 
            Altura: 191, 
            Envergadura: 192, 
            Peso: 86
        },
        Sano: false,
        Posiciones: [
            "Base", "Escolta"
        ],
        NumPremios: 28,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Warriors", Partidos: 82}
        ] 
    },
    {
        _id:7 ,
        Nombre: "Domantas",
        Apellidos: "Sabonis",
        FechaNac: new Date("1996-05-03"),
        FechaDeb: new Date("2016-10-03"),
        Fisico: { 
            Altura: 211, 
            Envergadura: 210, 
            Peso: 108
        },
        Sano: true,
        Posiciones: [
            "Ala-Pivot", "Pivot"
        ],
        NumPremios: 13,
        Comp_Estre: false,
        Partidos_Año: [
            { Equipo: "Pacers", Partidos: 82}
        ] 
    },
    {
        _id:8 ,
        Nombre: "Kevin",
        Apellidos: "Durant",
        FechaNac: new Date("1988-09-29"),
        FechaDeb: new Date("2007-11-01"),
        Fisico: {
            Altura: 208, 
            Envergadura: 225, 
            Peso: 109
        },
        Sano: false,
        Posiciones: [
            "Alero", "Ala-Pivot", "Pivot"
        ],
        NumPremios: 31,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Warriors", Partidos: 40},
            { Equipo: "Nets", Partidos: 11}
        ] 
    },
    {
        _id:9 ,
        Nombre: "Kyrie",
        Apellidos: "Irving",
        FechaNac: new Date("1992-03-23"),
        FechaDeb: new Date("2011-12-27"),
        Fisico: {
            Altura: 188, 
            Envergadura: 193, 
            Peso: 88
        },
        Sano: false,
        Posiciones: [
            "Base", "Escolta"
        ],
        NumPremios: 16,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Nets", Partidos: 60}
        ] 
    },
    {
        _id:10 ,
        Nombre: "Julius",
        Apellidos: "Randle",
        FechaNac: new Date("1994-11-29"),
        FechaDeb: new Date("104-10-07"),
        Fisico: { 
            Altura: 203, 
            Envergadura: 213, 
            Peso: 113
        },
        Sano: true,
        Posiciones: [
            "Ala-Pivot", "Pivot", "Alero"
        ],
        NumPremios: 8,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Nets", Partidos: 50}
        ] 
    },
    {
        _id:11 ,
        Nombre: "Zach",
        Apellidos: "Lavine",
        FechaNac: new Date("1995-03-10"),
        FechaDeb: new Date("2014-10-08"),
        Fisico: { 
            Altura: 196, 
            Envergadura: 203, 
            Peso: 92
        },
        Sano: true,
        Posiciones: [
            "Escolta", "Alero", "Base"
        ],
        NumPremios: 10,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Rockets", Partidos: 82}
        ] 
    },
    {
        _id:12 ,
        Nombre: "Blake",
        Apellidos: "Griffin",
        FechaNac: new Date("1989-03-16"),
        FechaDeb: new Date("2009-10-28"),
        Fisico: {
            Altura: 206, 
            Envergadura: 211, 
            Peso: 113
        },
        Sano: false,
        Posiciones: [
            "Ala-Pivot", "Pivot"
        ],
        NumPremios: 14,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Pacers", Partidos: 70}
        ] 
    },
    {
        _id:13 ,
        Nombre: "Danny",
        Apellidos: "Green",
        FechaNac: new Date("1987-06-22"),
        FechaDeb: new Date("2009-11-13"),
        Fisico: { 
            Altura: 198, 
            Envergadura: 208, 
            Peso: 94
        },
        Sano: true,
        Posiciones: [
            "Escolta", "Alero"
        ],
        NumPremios: 5,
        Comp_Estre: false,
        Partidos_Año: [
            { Equipo: "Lakers", Partidos: 60}
        ] 
    },
    {
        _id:14 ,
        Nombre: "JaMychal",
        Apellidos: "Green",
        FechaNac: new Date("1990-06-21"),
        FechaDeb: new Date("2014-10-11"),
        Fisico: { 
            Altura: 203, 
            Envergadura: 219, 
            Peso: 103
        },
        Sano: true,
        Posiciones: [
            "Ala-Pivot", "Alero"
        ],
        NumPremios: 3,
        Comp_Estre: false,
        Partidos_Año: [
            { Equipo: "Lakers", Partidos: 35}
        ] 
    },
    {
        _id:15 ,
        Nombre: "Klay",
        Apellidos: "Thompson",
        FechaNac: new Date("1990-02-08"),
        FechaDeb: new Date("2012-12-26"),
        Fisico: { 
            Altura: 201,
            Envergadura: 210,
            Peso: 107
        },
        Sano: false,
        Posiciones: [
            "Escolta", "Alero"
        ],
        NumPremios: 18,
        Comp_Estre: true,
        Partidos_Año: [
            { Equipo: "Warriors", Partidos: 77}
        ] 
    },
])


/*
Colección de equipos de la NBA
*/

db.Equipos2.drop()
db.Equipos2.insertMany([
    {
        _id: 1,
        Nombre: "Lakers",
        Cap_Sal: 60000000,
        Pago_Partido: 17000, 
        Comple_Est: 50000

    },
    {
        _id: 2,
        Nombre: "Nets",
        Cap_Sal: 50000000,
        Pago_Partido: 15000,
        Comple_Est: 70000

    },
    {
        _id: 3,
        Nombre: "Warriors",
        Cap_Sal: 45000000,
        Pago_Partido: 14000,
        Comple_Est: 40000

    },
    {
        _id: 4,
        Nombre: "Rockets",
        Cap_Sal: 55000000,
        Pago_Partido: 12000,
        Comple_Est: 35000

    },
    {
        _id: 5,
        Nombre: "Pacers",
        Cap_Sal: 25000000,
        Pago_Partido: 16000,
        Comple_Est: 60000

    },
    {
        _id: 6,
        Nombre: "Raptors",
        Cap_Sal: 35000000,
        Pago_Partido: 12300,
        Comple_Est: 10000

    }
])