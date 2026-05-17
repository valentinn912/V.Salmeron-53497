import TareasVisitor from './TareasVisitor.js';

class TareasTranslatorImpl extends TareasVisitor {
    constructor() {
        super();
    }

    visitPrograma(ctx) {
        let codigo = "// Código traducido desde Tareas\n";
        ctx.instruccion().forEach(inst => {
            codigo += this.visit(inst) + "\n";
        });
        return codigo;
    }

    visitAsignacion(ctx) {
        const id = ctx.ID().getText();
        const expresion = this.visit(ctx.expresion());
        return `let ${id} = ${expresion};`;
    }

    visitImprimir(ctx) {
        const expresion = this.visit(ctx.expresion());
        return `console.log(${expresion});`;
    }

    visitCondicional(ctx) {
        const condicion = this.visit(ctx.condicion());
        let bloque = `if (${condicion}) {\n`;
        ctx.instruccion().forEach(inst => {
            bloque += "    " + this.visit(inst) + "\n";
        });
        bloque += "}";
        return bloque;
    }

    visitCondicion(ctx) {
        const izq = this.visit(ctx.expresion(0));
        const der = this.visit(ctx.expresion(1));
        const operador = ctx.getChild(1).getText();
        return `${izq} ${operador} ${der}`;
    }

    visitExpresion(ctx) {
        if (ctx.termino().length === 1) {
            return this.visit(ctx.termino(0));
        }
        const izq = this.visit(ctx.termino(0));
        const der = this.visit(ctx.termino(1));
        const op = ctx.getChild(1).getText();
        return `${izq} ${op} ${der}`;
    }

    visitTermino(ctx) {
        return ctx.getText();
    }
}

export default TareasTranslatorImpl;