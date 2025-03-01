// Operadores y estructuras de control

let nombre = 'Nicolas Valencia' // string
let numero = 28; // number 

let mayorDeEdad = true; // boolean

let bigIntr = BigInt(28);
console.log(bigIntr); // big Int

let simbolo = Symbol('miSimbolo');
console.log(simbolo);

let noDefinido = undefined; 

// 2- Operacioens con todos los operadores que existen

// Operadores aritméticos
print("Suma: 10 + 3 = {10 + 3}")
print("Resta: 10 - 3 = {10 - 3}")
print("Multiplicación: 10 * 3 = {10 * 3}")
print("División: 10 / 3 = {10 / 3}")
print("Módulo: 10 % 3 = {10 % 3}")
print("Exponente: 10 ** 3 = {10 ** 3}")
print("División entera: 10 // 3 = {10 // 3}")

//Operadores de comparación
print("Igualdad: 10 == 3 es {10 == 3}")
print("Desigualdad: 10 != 3 es {10 != 3}")
print("Mayor que: 10 > 3 es {10 > 3}")
print("Menor que: 10 < 3 es {10 < 3}")
print("Mayor o igual que: 10 >= 10 es {10 >= 10}")
print("Menor o igual que: 10 <= 3 es {10 <= 3}")

// Operadores lógicos
print("AND &&: 10 + 3 == 13 and 5 - 1 == 4 es {10 + 3 == 13 and 5 - 1 == 4}")
print("OR ||: 10 + 3 == 13 or 5 - 1 == 4 es {10 + 3 == 14 or 5 - 1 == 4}")
print("NOT !: not 10 + 3 == 14 es {not 10 + 3 == 14}")

// Operadores de asignación
my_number = 11  // asignación
print(my_number)
my_number += 1  // suma y asignación
print(my_number)
my_number -= 1  // resta y asignación
print(my_number)
my_number *= 2  // multiplicación y asignación
print(my_number)
my_number /= 2  // división y asignación
print(my_number)
my_number %= 2  // módulo y asignación
print(my_number)
my_number **= 1  // exponente y asignación
print(my_number)
my_number //= 1  // división entera y asignación
print(my_number)

// Operadores de identidad
my_new_number = my_number
print("my_number is my_new_number es {my_number is my_new_number}")
print("my_number is not my_new_number es {my_number is not my_new_number}")

//  Operadores de pertenencia
print("'u' in 'mouredev' = {'u' in 'mouredev'}")
print("'b' not in 'mouredev' = {'b' not in 'mouredev'}")

// Operadores de bit
a = 10  // 1010
b = 3  // 0011
print("AND: 10 & 3 = {10 & 3}")  // 0010
print("OR: 10 | 3 = {10 | 3}")  // 1011
print("XOR: 10 ^ 3 = {10 ^ 3}")  // 1001
print("NOT: ~10 = {~10}")
print("Desplazamiento a la derecha: 10 >> 2 = {10 >> 2}")  // 0010
print("Desplazamiento a la izquierda: 10 << 2 = {10 << 2}")  // 101000
