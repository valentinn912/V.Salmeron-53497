import fs from 'fs';
import antlr4 from 'antlr4';
import TareasLexer from './TareasLexer.js';
import TareasParser from './TareasParser.js';
import TareasTranslatorImpl from './TareasTranslatorImpl.js';
import TareasVisitorImpl from './TareasVisitorImpl.js';


// 1. Leer el archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');

// 2. Crear el stream de caracteres
const chars = new antlr4.InputStream(input);

// 3. Lexer: utiliza tus reglas de Tareas.g4
const lexer = new TareasLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// 4. Parser: construye el árbol sintáctico basado en Tareas
const parser = new TareasParser(tokens);
parser.buildParseTrees = true;

// ============ MANEJO DE ERRORES ============
const erroresLexicos = [];
const erroresSintacticos = [];

// Listener para errores del LEXER (caracteres no reconocidos)
lexer.removeErrorListeners();
lexer.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
        erroresLexicos.push({ linea: line, columna: column, mensaje: msg });
    }
});

// Listener para errores del PARSER (estructura inválida)
parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
        erroresSintacticos.push({ linea: line, columna: column, mensaje: msg });
    },
    reportAmbiguity: () => {},
    reportAttemptingFullContext: () => {},
    reportContextSensitivity: () => {}
});

// 5. Construir el árbol usando tu regla inicial 'programa'
const tree = parser.programa();

// ============ REPORTE DE RESULTADO ============
const totalErrores = erroresLexicos.length + erroresSintacticos.length;

console.log('═══════════════════════════════════════════════════');
console.log('   ANÁLISIS DEL CÓDIGO FUENTE (Gramática Tareas)');
console.log('═══════════════════════════════════════════════════');

// ============ TABLA DE LEXEMAS ============

console.log('--- Tabla de Lexemas ---');
console.log('TIPO'.padEnd(20) + ' | ' + 'TEXTO');
console.log('-'.repeat(40));

tokens.fill();
tokens.tokens.forEach(t => {
    // Accedemos directamente a la lista de nombres simbólicos de la clase Lexer
    let name = TareasLexer.symbolicNames[t.type];
    
    // Si no tiene nombre (es un literal como '=' o ';'), usamos el tipo numérico
    if (!name) name = t.type;

    // Filtramos espacios (WS) y fin de archivo (EOF / -1)
    if (name !== 'WS' && t.type !== -1) { 
        console.log(`${String(name).padEnd(20)} | ${t.text}`);
    }
});
console.log('---------------------------------------------------\n');


if (totalErrores === 0) {
    console.log('✅ EL CÓDIGO ES CORRECTO');
    console.log('   No se encontraron errores léxicos ni sintácticos.');
    console.log('═══════════════════════════════════════════════════\n');
} else {
    console.log(`❌ EL CÓDIGO TIENE ${totalErrores} ERROR(ES)`);
    console.log(`   Léxicos:      ${erroresLexicos.length}`);
    console.log(`   Sintácticos: ${erroresSintacticos.length}`);
    console.log('═══════════════════════════════════════════════════\n');

    if (erroresLexicos.length > 0) {
        console.log('🔤 ERRORES LÉXICOS (caracteres no reconocidos):');
        console.log('---------------------------------------------------');
        erroresLexicos.forEach((e, i) => {
            console.log(`   ${i + 1}. Línea ${e.linea}, columna ${e.columna}`);
            console.log(`      → ${e.mensaje}`);
        });
        console.log();
    }

    if (erroresSintacticos.length > 0) {
        console.log('📝 ERRORES SINTÁCTICOS (estructura inválida):');
        console.log('---------------------------------------------------');
        erroresSintacticos.forEach((e, i) => {
            console.log(`   ${i + 1}. Línea ${e.linea}, columna ${e.columna}`);
            console.log(`      → ${e.mensaje}`);
        });
        console.log();
    }

    console.log('⛔ El programa NO se procesará por contener errores.');
    process.exit(1);
}

// ============ SI NO HAY ERRORES, CONTINUAR ============


// 6. Imprimir el árbol sintáctico
console.log('--- Árbol sintáctico generado ---');
console.log(tree.toStringTree(parser.ruleNames, parser));
console.log();

// 7. TRADUCCIÓN: Convertir tu código a JavaScript real

console.log('--- Traducción a JavaScript ---');
const translator = new TareasTranslatorImpl();
const codigoJS = translator.visit(tree);
console.log(codigoJS); 
console.log();

// 8. EJECUCIÓN: Ver los resultados en la terminal

console.log('--- Ejecutando programa ---');
const visitor = new TareasVisitorImpl();

try {
    visitor.visit(tree); // Esto disparará los console.log de tu regla 'mostrar'
    console.log('\n--- Estado final de la memoria ---');
    console.log(visitor.memoria);
} catch (err) {
    console.error('⚠️ ERROR EN TIEMPO DE EJECUCIÓN:', err.message);
}