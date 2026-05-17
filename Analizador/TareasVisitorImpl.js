import TareasVisitor from './TareasVisitor.js';

class TareasVisitorImpl extends TareasVisitor {
    constructor() {
        super();
        this.memoria = {};
    }

    visitAsignacion(ctx) {
        const nombreVariable = ctx.ID().getText();
        const valor = this.visit(ctx.expresion());
        this.memoria[nombreVariable] = valor;
        return valor;
    }

    visitImprimir(ctx) {
        const valor = this.visit(ctx.expresion());
        console.log(`> Salida: ${valor}`);
        return valor;
    }

    visitExpresion(ctx) {
        if (ctx.termino().length === 1) {
            return this.visit(ctx.termino(0));
        }
        
        const izquierda = this.visit(ctx.termino(0));
        const derecha = this.visit(ctx.termino(1));
        const operacion = ctx.getChild(1).getText();

        return operacion === '+' ? izquierda + derecha : izquierda - derecha;
    }

    visitTermino(ctx) {
        if (ctx.NUMERO()) {
            return parseInt(ctx.NUMERO().getText());
        }
        const nombre = ctx.ID().getText();
        return this.memoria[nombre] || 0;
    }

    visitCondicional(ctx) {
        if (this.visit(ctx.condicion())) {
            ctx.instruccion().forEach(inst => this.visit(inst));
        }
    }

    visitCondicion(ctx) {
        const izq = this.visit(ctx.expresion(0));
        const der = this.visit(ctx.expresion(1));
        const operador = ctx.getChild(1).getText();

        switch (operador) {
            case '==': return izq == der;
            case '!=': return izq != der;
            case '>':  return izq > der;
            case '<':  return izq < der;
            default:   return false;
        }
    }
}

export default TareasVisitorImpl;