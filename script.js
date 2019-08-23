function opentab(evt,item) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(item).style.display = "block";
  evt.currentTarget.className += " active";
}

function defaultOpen(){
  document.getElementById("defaultOp").click();
}
var someToDoList = ["Hit the gym","Complete the assignment","Study javascript","Remember the course"];
function showToDo(){

  var myTable = document.getElementById("todo");
  var header = document.createElement('tr');
  var headerData=document.createElement('th');
  var headerAction=document.createElement('th');
  headerData.innerText="List of items";
  headerAction.innerText="Actions";
  header.appendChild(headerData);
  header.appendChild(headerAction);
  myTable.appendChild(header);
  for (var i = 0; i < someToDoList.length; i++) {
    var tableRow = document.createElement('tr');
    var tableData=document.createElement('td');
    var tableAction=document.createElement('td');
    var dataTobeInserted = document.createTextNode(someToDoList[i]);
    tableData.appendChild(dataTobeInserted);
    var editAnchor=document.createElement('a');
    editAnchor.innerText="Edit ";
    editAnchor.onclick = onEdit;
    var deleteAnchor=document.createElement('a');
    deleteAnchor.innerText="Delete";
    deleteAnchor.onclick = onDelete;
    tableAction.appendChild(editAnchor);
    tableAction.appendChild(deleteAnchor);
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableAction);
    myTable.appendChild(tableRow);
  }
}
function onKeyUp(event)
{
  let input = document.getElementById("search").value;
  input=input.trim();
    if(input!="")
    {
      if(event.key==='Enter')
      {
        someToDoList.push(input);
        document.getElementById("todo").innerText = "";
        someToDoList.sort();
        showToDo();
        document.getElementById("search").value ="";
      }
      else
      {
        input = input.toLowerCase();
        let divToDisplay = document.getElementById("autopopulate");
        divToDisplay.innerText="";
        let ul = document.createElement('ul');
        for (let i = 0; i < someToDoList.length; i++)
        {
            if(someToDoList[i].toLowerCase().includes(input))
            {
              let li=document.createElement('li');
              let dataTobeDisplayed = document.createTextNode(someToDoList[i]);
              li.appendChild(dataTobeDisplayed);
              ul.appendChild(li);
            }
        }
        divToDisplay.appendChild(ul);
      }
    }
    else {
      let divToDisplay = document.getElementById("autopopulate");
      divToDisplay.innerText="";
    }

}
function onEdit() {
  document.getElementById("search").value=this.parentElement.parentElement.firstChild.innerHTML;
  findAndDelete(this.parentElement.parentElement.firstChild.innerHTML);
  this.parentElement.parentElement.remove();
}
function onDelete() {
  findAndDelete(this.parentElement.parentElement.firstChild.innerHTML);
  this.parentElement.parentElement.remove();
}
function findAndDelete(value)
{
  for (var i = 0; i < someToDoList.length; i++) {
    if(someToDoList[i].indexOf(value)==0)
    {
      someToDoList.splice(i,1);
      break;
    }
  }
}
