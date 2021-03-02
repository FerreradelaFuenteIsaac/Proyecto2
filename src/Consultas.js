/*
Consultas sobre las colecciones de la NBA
Orden de menor a mayor complejidad
*/

/*
Sueldo total de los jugadores ordenados de mayor a menor
*/
db.Jugadores2.aggregate([
    {
        $unwind: "$Partidos_Año"
    },
    {
        $project: {
            _id: 1,
            Nombre: 1,
            Apellidos: 1,
            Partidos_Año: 1
        }
    },
    {
        $lookup: {
            from: "Equipos2",
            localField: "Partidos_Año.Equipo",
            foreignField: "Nombre",
            as: "Resumen"
        }
    },
    {
        $set: {
            Sal_Partido: { $arrayElemAt: [ "$Resumen.Pago_Partido", 0]},
            Extra: { $arrayElemAt: [ "$Resumen.Comple_Est", 0]}
        }
    },
    {
        $project: {
            _id: 1,
            Nombre: 1,
            Apellidos: 1,
            Partidos_Año: 1,
            Sal_Partido: 1,
            Extra: 1,
            Salario: { $sum: 
                [ { $multiply: 
                    [ "$Partidos_Año.Partidos", "$Sal_Partido"]}, "$Extra"]}
        }
    },
    {
        $group: {
            _id: "$Nombre",
            Sueldo: { $sum: "$Salario"}
        }
    },
    {
        $sort: {
            Sueldo: -1
        }
    }
]).pretty()

/*
Pago total de cada equipo ordenados de menor a mayor
*/
db.Jugadores2.aggregate([
    {
        $unwind: "$Partidos_Año"
    },
    {
        $lookup: {
            from: "Equipos2",
            localField: "Partidos_Año.Equipo",
            foreignField: "Nombre",
            as: "Resumen"
        }
    },
    {
        $project: {
            _id: 1,
            Partidos_Año: 1,
            Resumen: 1
        }
    },
    {
        $set: {
            Nombre_Eq: { $arrayElemAt: [ "$Resumen.Nombre", 0]},
            Pago_Part: { $arrayElemAt: [ "$Resumen.Pago_Partido", 0]},
            Complemento: { $arrayElemAt: [ "$Resumen.Comple_Est", 0]}
        }
    },
    {
        $project: {
            _id: 1,
            Partidos_Año: 1,
            Nombre_Eq: 1,
            Pago_Part: 1,
            Complemento: 1,
            Pago_Partido: { $sum: [ { $multiply: [ "$Partidos_Año.Partidos", "$Pago_Part"]}, "$Complemento" ]}
        }
    },
    {
        $group: {
            _id: "$Nombre_Eq",
            Pago_Total: { $sum: "$Pago_Partido"}
        }
    },
    {
        $sort: {
            Pago_Total: 1
        }
    }
]).pretty()


/*
Medias de datos fisicos agrupados por posicion ordenadas 
por envergadura de menor a mayor
*/

db.Jugadores2.aggregate([
    {
        $project: {
            Nombre: 1,
            Apellidos: 1,
            Fisico: 1,
            Posiciones: 1
        }
    },
    {
        $unwind: "$Posiciones"
    },
    {
        $group: {
            _id: [ "$Posiciones" ],
            Altura_Med: { $avg: { $sum: "$Fisico.Altura"}},
            Env_Med: { $avg: { $sum: "$Fisico.Envergadura"}},
            Peso_Med: { $avg: { $sum: "$Fisico.Peso"}}
                 
        }
    },
    {
        $project: {
            _id: 0,
            Posicion: "$_id",
            Altura_MedR: { $round: ["$Altura_Med", 1]},
            Env_MedR: { $round: ["$Env_Med", 1]},
            Peso_MedR: { $round: ["$Peso_Med", 1]}
        }
    },
    {
        $sort: {
            Env_MedR: 1
        }
    }
])

/*
Numero de partidos total por equipo 
*/

db.Jugadores2.aggregate([
    {
        $unwind: "$Partidos_Año"
    },
    {
        $project: {
            _id: 1,
            Partidos_Año: 1
        }
    },
    {
        $set: {
            EquipoJ: "$Partidos_Año.Equipo",
            PartidosJ: "$Partidos_Año.Partidos"
        }
    },
    {
        $project: {
            _id: 1,
            EquipoJ: 1,
            PartidosJ: 1
        }
    },
    {
        $group: {
            _id: "$EquipoJ",
            PartidosT: { $sum: "$PartidosJ" }
        }
    },
    {
        $sort: {
            PartidosT: -1
        }
    }
]).pretty()