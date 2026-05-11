let datoGenerico: unknown

if(typeof datoGenerico === "string") {
  console.log(datoGenerico.toUpperCase())
} else if(typeof datoGenerico === "number") {
  console.log(datoGenerico * 2)
} else if(typeof datoGenerico === "boolean") {
  console.log(datoGenerico ? "si" : "no")
} else if(datoGenerico === null) {
  console.log("il dato è vuoto")
} else if(Array.isArray(datoGenerico)) {
  console.log(datoGenerico.length)
} else if(datoGenerico instanceof Promise) {
  datoGenerico.then((value) => console.log(value))
} else {"Tipo non supportato"}