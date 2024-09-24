const usuario = {
    nombre: 'Diego',
    apellido: 'Salazar',
    edad: 21,
    direccion: {
        calle: 'Villa los corales',
        numero: 123,
        ciudad: 'Concepción',
        pais: 'Chile'
    },
    contactos: {
        telefono: '123456789',
        email: 'diegosalazar@example.com',
        redesSociales: {
        instagram: '@diego',
        }
    },
    intereses: ['Programación', 'Música', 'Ajedrez']
    };

// 1. Extrae el nombre, el apellido y la ciudad en variables separadas.

let {nombre, apellido, direccion: {ciudad}} = usuario;

// 2. Extrae el primer interés en una variable llamada "primerInteres".
let primerInteres = usuario.intereses[0];

// 3. Extrae el email y el instagram en variables separadas.
let {email, redesSociales: {instagram}} = usuario.contactos;

// 4. Extrae la calle y el número de la dirección y renómbralos como "calleUsuario" y "numeroUsuario".
let {calle: calleUsuario, numero: numeroUsuario} = usuario.direccion;

// 5. Imprime en consola todas las variables que extrajiste.
console.log(nombre, apellido, ciudad, primerInteres, email, instagram, calleUsuario, numeroUsuario);