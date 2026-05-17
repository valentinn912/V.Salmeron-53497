// Generated from Tareas.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TareasVisitor from './TareasVisitor.js';

const serializedATN = [4,1,18,68,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,41,8,3,10,
3,12,3,44,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,
6,5,6,61,8,6,10,6,12,6,64,9,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,3,1,
0,10,13,1,0,14,15,1,0,16,17,64,0,16,1,0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,
36,1,0,0,0,8,47,1,0,0,0,10,53,1,0,0,0,12,57,1,0,0,0,14,65,1,0,0,0,16,17,
5,1,0,0,17,21,5,2,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,
0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,3,0,0,25,1,1,0,0,
0,26,30,3,4,2,0,27,30,3,6,3,0,28,30,3,8,4,0,29,26,1,0,0,0,29,27,1,0,0,0,
29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,16,0,0,32,33,5,4,0,0,33,34,3,12,6,0,34,
35,5,5,0,0,35,5,1,0,0,0,36,37,5,6,0,0,37,38,3,10,5,0,38,42,5,2,0,0,39,41,
3,2,1,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,
0,0,0,44,42,1,0,0,0,45,46,5,3,0,0,46,7,1,0,0,0,47,48,5,7,0,0,48,49,5,8,0,
0,49,50,3,12,6,0,50,51,5,9,0,0,51,52,5,5,0,0,52,9,1,0,0,0,53,54,3,12,6,0,
54,55,7,0,0,0,55,56,3,12,6,0,56,11,1,0,0,0,57,62,3,14,7,0,58,59,7,1,0,0,
59,61,3,14,7,0,60,58,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,
13,1,0,0,0,64,62,1,0,0,0,65,66,7,2,0,0,66,15,1,0,0,0,4,21,29,42,62];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TareasParser extends antlr4.Parser {

    static grammarFileName = "Tareas.g4";
    static literalNames = [ null, "'tareas'", "'{'", "'}'", "'='", "';'", 
                            "'si'", "'mostrar'", "'('", "')'", "'=='", "'!='", 
                            "'>'", "'<'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "ID", "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "asignacion", "condicional", 
                         "imprimir", "condicion", "expresion", "termino" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TareasParser.ruleNames;
        this.literalNames = TareasParser.literalNames;
        this.symbolicNames = TareasParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TareasParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(TareasParser.T__0);
	        this.state = 17;
	        this.match(TareasParser.T__1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65728) !== 0)) {
	            this.state = 18;
	            this.instruccion();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(TareasParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TareasParser.RULE_instruccion);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.asignacion();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.condicional();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TareasParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(TareasParser.ID);
	        this.state = 32;
	        this.match(TareasParser.T__3);
	        this.state = 33;
	        this.expresion();
	        this.state = 34;
	        this.match(TareasParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicional() {
	    let localctx = new CondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TareasParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(TareasParser.T__5);
	        this.state = 37;
	        this.condicion();
	        this.state = 38;
	        this.match(TareasParser.T__1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65728) !== 0)) {
	            this.state = 39;
	            this.instruccion();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(TareasParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TareasParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(TareasParser.T__6);
	        this.state = 48;
	        this.match(TareasParser.T__7);
	        this.state = 49;
	        this.expresion();
	        this.state = 50;
	        this.match(TareasParser.T__8);
	        this.state = 51;
	        this.match(TareasParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TareasParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.expresion();
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 55;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TareasParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.termino();
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 58;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 59;
	            this.termino();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TareasParser.RULE_termino);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        _la = this._input.LA(1);
	        if(!(_la===16 || _la===17)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TareasParser.EOF = antlr4.Token.EOF;
TareasParser.T__0 = 1;
TareasParser.T__1 = 2;
TareasParser.T__2 = 3;
TareasParser.T__3 = 4;
TareasParser.T__4 = 5;
TareasParser.T__5 = 6;
TareasParser.T__6 = 7;
TareasParser.T__7 = 8;
TareasParser.T__8 = 9;
TareasParser.T__9 = 10;
TareasParser.T__10 = 11;
TareasParser.T__11 = 12;
TareasParser.T__12 = 13;
TareasParser.T__13 = 14;
TareasParser.T__14 = 15;
TareasParser.ID = 16;
TareasParser.NUMERO = 17;
TareasParser.WS = 18;

TareasParser.RULE_programa = 0;
TareasParser.RULE_instruccion = 1;
TareasParser.RULE_asignacion = 2;
TareasParser.RULE_condicional = 3;
TareasParser.RULE_imprimir = 4;
TareasParser.RULE_condicion = 5;
TareasParser.RULE_expresion = 6;
TareasParser.RULE_termino = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(TareasParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_condicional;
    }

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitCondicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_imprimir;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_condicion;
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_termino;
    }

	NUMERO() {
	    return this.getToken(TareasParser.NUMERO, 0);
	};

	ID() {
	    return this.getToken(TareasParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TareasParser.ProgramaContext = ProgramaContext; 
TareasParser.InstruccionContext = InstruccionContext; 
TareasParser.AsignacionContext = AsignacionContext; 
TareasParser.CondicionalContext = CondicionalContext; 
TareasParser.ImprimirContext = ImprimirContext; 
TareasParser.CondicionContext = CondicionContext; 
TareasParser.ExpresionContext = ExpresionContext; 
TareasParser.TerminoContext = TerminoContext; 
