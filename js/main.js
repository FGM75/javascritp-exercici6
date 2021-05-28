const personas = [
    {
        paciente: {
            nombre: 'Manuel',
            edad: 25,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Marta',
            edad: 56,
            sexo: 'M'
        },
        diasIngresado: 5,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Julia',
            edad: 38,
            sexo: 'M'
        },
        diasIngresado: 1,
        dieta: 'Sin sal'
    },
    {
        paciente: {
            nombre: 'Esteban',
            edad: 40,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Arturo',
            edad: 19,
            sexo: 'H'
        },
        diasIngresado: 2,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Isabel',
            edad: 63,
            sexo: 'M'
        },
        diasIngresado: 6,
        dieta: 'Sin sal'
    }
];

const numeroPacientes = personas.length;
console.log(numeroPacientes);

const mayoresEdad = personas.filter((persona) => persona.paciente.edad >= 18);
console.log(mayoresEdad);

const hombresDiabeticos = personas.filter((hombreDiabetico) => hombreDiabetico.paciente.sexo === "H" && hombreDiabetico.dieta === "Diabetes");
console.log(hombresDiabeticos);

const diasHospitalizados = personas.reduce((incremento, personas) => incremento + personas.diasIngresado, 0);
console.log(diasHospitalizados);

const edadMediaMujeres = personas.filter((persona) => persona.paciente.sexo === "M").reduce((incremento, personas) => incremento + personas.paciente.edad, 0) / 3;
console.log(edadMediaMujeres);
// final xurrutero //
