//variables
const clk = document.querySelector('#clk')
const text = document.querySelector('#texto')
const mat = document.querySelector('#materia')
const lista = document.querySelector('#lista')
const tareas = []
/*[{tarea :"", materia:""}]  */ 
//funciones
const agregarTarea = () => {
    const nuevaTarea = text.value
    const nuevaMateria = mat.value
    if(nuevaTarea && nuevaTarea.length > 0 && nuevaMateria && nuevaMateria.length > 0){
        tareas.push({tarea:nuevaTarea, materia:nuevaMateria})
    }
    text.value = ''
    mat.value = ''
}
const mostrarTareas = () => {
    let html = ""
    tareas.forEach(({tarea,materia}, id) => {
        html += generarHTML({tarea,materia}, id)
    })
    lista.innerHTML = html
}
const generarHTML = ({tarea,materia}, id) => {
    return `<li class="l" id="t${id}">${tarea},${materia} <span class="fix" onclick="eliminarTarea(${id})">❌</span></li>`
}
const eliminarTarea = (id) => {
    tareas.splice(id,1)
    mostrarTareas()
}
//eventListeners
clk.addEventListener('click', (e)=>{
    e.preventDefault()
    agregarTarea()
    mostrarTareas()
})