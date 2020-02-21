document.addEventListener("DOMContentLoaded", () => {
 
   const list = document.querySelector("#tasks")
   const task = document.getElementById("create-task-form")

   task.addEventListener("submit", event => {

      event.preventDefault()

      let taskInfo = document.querySelector("#new-task-description").value
      
      let newList = document.createElement("li")
      newList.innerHTML = taskInfo + `<button class='delete'>X</button>`
      list.appendChild(newList)

      const deleteButton = newList.querySelector(".delete")
      
      deleteButton.addEventListener("click", (e) => {
            newList.remove()
      })
   
   })




});
//  const button = document.querySelector("#Clicker")
//  button.addEventListener("click", function(event) {
//     event.preventDefault()

//  const list = document.querySelector("#list")
//             console.log("test?")

