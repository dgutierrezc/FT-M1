
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5; 
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10); //Rpta: 10/8/8/9.//
console.log(b); //Rpta: 10.//
console.log(x); //Rpta : 1.//
```

```javascript
console.log(bar); // Error//
console.log(baz); //Error//
foo(); // Esta llamando a la funcion  retorna Hola//
function foo() { console.log('Hola!'); } // Definiendo la funcion//
var bar = 1; // Se le asigna un valor a la variable, pero esta por debajo de la invocacion - error//
baz = 2;// Se le asigna un valor a la variable, pero esta por debajo de la invocacion - error//
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Al ser una variable var, el nuevo valir que se le asigna al instructor es global//
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
//Tony - Franco - Tony //
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
// The flash - Reverse flash - The flash - Franco // 
//The flash (la variable instructor reasigno su valor a un contexto global)//
//Reverse flash( Se le asigna el valor Reverse Flash por la variable let)//

```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //js convierte el string "3" en un  numero//
"2" * "3" // js convierte los string en numeros//
4 + 5 + "px" //Empieza con numeros, primero suma y luego concatena// 
"$" + 4 + 5 // Empiza con string, entonces va a concatenar//
"4" - 2 // Convierte el string a numero//
"4px" - 2 // NAN no definido//
7 / 0 // Infinity //
{}[0] // Un objeto vacio//
parseInt("09") // Me devuelve el numero//
5 && 2 // Devuelve el ultimo true //
2 && 5 // Devuelve el ultimo true //
5 || 0 // Devuelve el primer true //
0 || 5 // Devuelve el primer true //
[3]+[3]-[10] 
3>2>1 // false //
[] == ![] 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
// undefined - 2 //
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
//Aurelio De Rosa - Juan Perez //
// En la primera ejecucion se llama al this que esta dentro de una funcion  y en la segunda ejecucion se llama al this que esta en el global//
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
//Primero se ejecuta 1 - 4 luego undefined 3 - y por ultimo 2//
```
