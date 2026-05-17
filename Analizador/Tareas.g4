grammar Tareas;

programa
    : 'tareas' '{' instruccion* '}'
    ;

instruccion
    : asignacion
    | condicional
    | imprimir
    ;

asignacion
    : ID '=' expresion ';'
    ;

condicional
    : 'si' condicion '{' instruccion* '}'
    ;

imprimir
    : 'mostrar' '(' expresion ')' ';'
    ;

condicion
    : expresion ( '==' | '!=' | '>' | '<' ) expresion
    ;

expresion
    : termino (('+' | '-') termino)*
    ;

termino
    : NUMERO
    | ID
    ;

ID
    : [a-zA-Z]+
    ;

NUMERO
    : [0-9]+
    ;

WS
    : [ \t\r\n]+ -> skip
    ;