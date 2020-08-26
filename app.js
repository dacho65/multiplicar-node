const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
//console.log(argv._[0]);

switch( comando ){
	case 'listar':
		listarTabla(argv.base, argv.limite);
	break;

	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: `, colors.green( archivo )))
			.catch(e => console.log(e))
	break;
		
	default:
		console.log('Comando no reconocido');
}
//let base = 'abc'

//console.log('Module')
//console.log(module)
//console.log( '\n' )
//console.log('Proces')
//console.log(process.argv);

let argv2 = process.argv;

//console.log(argv);
//console.log( 'Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base)


