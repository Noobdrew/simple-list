let form = document.getElementById('addForm')
let list = document.getElementById('items')
let filter = document.getElementById('filter')

form.addEventListener('submit', addItem)
list.addEventListener('click', deleteItem)
filter.addEventListener('keyup', filterItems)

function addItem(e) {
  e.preventDefault()
  //create new li element 
  let newItem = document.getElementById('formItem').value
  let li = document.createElement('li')
  li.className = 'list-group-item'
  // apend li to list
  li.appendChild(document.createTextNode(newItem))
  list.appendChild(li)
  //create delete button
  let button = document.createElement('button')
  button.textContent = 'X'
  button.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right', 'delete')
  li.appendChild(button)
}

//delete li element
function deleteItem(e) {
  let button = e.path[0]
  let li = e.path[1]
  if (button.className == 'btn btn-danger btn-sm float-right delete') {

    li.remove()
  }
}

//filter imtems
function filterItems(e) {
  let text = e.target.value.toLowerCase()
  let items = list.getElementsByTagName('li')
  Array.from(items).forEach(function(item){
    let itemName=item.firstChild.textContent
    if(itemName.toLowerCase().indexOf(text)!=-1){
      item.style.display='block'
    } else{
      item.style.display='none'
    }
  })
}