// Archivo que busca realizar manipulacion de strigs en base a cuatro reglas de claradas

// 1. si la palabra termina con "ar", se le quitan esas dos letras.Ejm geringoza(programar) -- > programar

// 2. Si la palabra inicia con Z, se le añade "pe"
// al final.Ejm geringoza(zorro) -- > zorrope
// geringoza(zarpar) -- > zarppe-- > aplica tambien regla 1.

// 3. Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y agregar un guion Medio
// ejm: geringoza(abecedario) -- > abece - dario

// 4. Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.