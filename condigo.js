let numeroDeEjercicios
let numeroDeSeries
let numeroDeRepeticiones
let nombreDelEjercicio
let totalDeRepeticiones


const calcularTodo = () => {
    nombreDelEjercicio = prompt("nombre del ejercicio")
    numeroDeRepeticiones = prompt("cuántas " + nombreDelEjercicio + " vas a hacer por serie?")
    numeroDeSeries = prompt("cuanta series de " + nombreDelEjercicio + " vas a hacer?")
    totalDeRepeticiones = numeroDeRepeticiones * numeroDeSeries

}


numeroDeEjercicios = parseInt(prompt("cuántos ejercicios vas a hacer?"))

for (let i = 1; i <= numeroDeEjercicios; i++){
    calcularTodo()

    document.write( nombreDelEjercicio + ": " + numeroDeRepeticiones + "x" + numeroDeSeries + "<br>" + "Total de repeticiones: " + totalDeRepeticiones +  "<br><br>")
}