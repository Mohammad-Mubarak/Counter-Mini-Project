let count=localStorage.getItem("cur")
document.querySelector("#number").innerText=count


function increment(){
    count++
    document.querySelector("#number").innerText=count
    localStorage.setItem("cur",count)
}

function decrement(){
    count--
    document.querySelector("#number").innerText=count
    localStorage.setItem("cur",count)

}

function reset(){
    count=0
document.querySelector("#number").innerText=0
localStorage.setItem("cur",count)

}
