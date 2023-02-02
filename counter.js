$(document).ready(function () {
    let counter = 0
    let view = $("#view")
    const add =()=>{
        counter ++
        //console.log(counter)
        view.text(counter)
    }

    const reset = ()=>{
        counter = 0
        //console.log(counter)
        view.text(counter)
    }

    const rest =()=>{
        counter --
        //console.log(counter)
        view.text(counter)
    }
    document.getElementById("increment").onclick = add
    document.getElementById("reset").onclick = reset
    document.getElementById("decrement").onclick = rest
})