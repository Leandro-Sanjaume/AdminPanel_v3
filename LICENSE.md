'''
28-9 {
    "Aula 40"{
    provincia : 'CABA'
    'localidad' : 'palermo',
    coordenadasx : '-3432423',
    coordenadasy : '4324',
    'descripcion': 'Es un taller para hacer bombas caseras'
    }
}

Instituciones/IPM/Cursos/6C/Alumnos/44555666/registroFaltas/meses/Enero/dia/30

doc:
EmpresaX

GET Instituciones/IPM/6C
Instituciones/IPM/6C/[students]



------Instituciones/IPM------
id: (UUID)
dni: 44555666
nombre: Juan
apellido: Gimenez
group: 6C
faltasTotales: 69
registroFaltas: {
    enero: {
        1: {
            faltas: 0,
            turnos: {
                mañana: {
                    horaEntrada: '08:30'
                    horaSalida: ''
                },
                tarde: {
                    horaEntrada: ''
                    horaSalida: ''
                }
            }
        },

        2: {
            faltas: 1
            ...
        }
    }
}
- (entry cam) seen 08:30 -> registered
- (entry cam) seen 09:15 -> ignored
- (entry cam) seen 10:10 -> ignored
- (exit cam) seen 12:45 -> registered

"IPM": {
    "reallyLateThreshold": "00:20:00",
    "5C" : { ... }
    "6C": {
        "lunes": {
            "mañana": {
                "horaEntrada": "7:45",
                "horaSalida": "12:05"
            },
            "tarde": {
                "horaEntrada": "12:45",
                "horaSalida": "17:50"
            },
        }
    }
}

{
    "enero": {
        "28": [
            {
                "hora": "15:55:32",
                turno: tarde
                "path": "/6C/letolover.png"
            }
        ],
        "29": [
            {
                "hora": "13:25:33",
                "path": "chupala"
            }
        ]
    }
}

--- Crea cuando lo ve
- Si no existe la key "29", no vino el 29
- Si existe pero tiene length 1, no vino en alguno de los dos turnos



manejo de situciones especiales / emergencias?
'''