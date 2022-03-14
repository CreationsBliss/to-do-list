let count = 0;

document.getElementById('add-btn').addEventListener('click', function(){
  count++;
  const userInput = document.getElementById("to-do-field");
  const userInputValue = userInput.value;
  const tableBody = document.getElementById("table-body");
  const tr = document.createElement("tr");
  tr.innerHTML =`
      <th scope="row">${count}</th>
      <td>${userInputValue}</td>
      <td>
        <button id="done-btn" class="btn btn-primary done-btn">Done</button>
        <button id="delete-btn" class="btn btn-danger delete-btn">Delete</button>
      </td>
  `;
  tableBody.appendChild(tr);
  userInput.value = "";

  // delete item
  const deleteBtns = document.getElementsByClassName("delete-btn");
  for(button of deleteBtns){
   button.addEventListener("click", function(event){
     event.target.parentNode.parentNode.style.display = "none";
   })
  };

  // done item
  const doneBtns = document.getElementsByClassName("done-btn");
  for(button of doneBtns){
   button.addEventListener("click", function(event){
     event.target.parentNode.parentNode.style.textDecoration = "line-through";
   })
  };

});

document.getElementById('clear-all-btn').addEventListener("click", function(){
  const tableBody = document.getElementById("table-body");
  tableBody.style.display = "none";
  location.reload();
})

