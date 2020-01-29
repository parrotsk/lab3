function onEnterPressed(event){
    if(event.key !== "Enter"){
        return;
    }

    addEntry();
}

var id=0;

var Entries =["Spandana","Rozmin", "Shaheen"];

function addEntry() {
    snippet = `
    <tr id="${id}">
        <td onClick="removeEntry(${id})"}>❌</td>
        <td>${getName()}</td>
    </tr>
    `
    id +=1;
    setName("");

    document.getElementById("tbody").innerHTML += snippet;
}

function removeEntry(id) {
    document.getElementById(id).remove();
}

function getName() {
    return document.getElementById("name").value;
}

function setName(name) {
    return document.getElementById("name").value=name;
}

function refresh()
{
    var html='';
    for(var i=0; i<Entries.length; i++)
    {
        html+=`<tr id="${id}"><td onClick="removeEntry(${id})"}>❌</td><td>`+Entries[i]+'</td>'
        html +='</tr>'
    }
    document.getElementById("tbody").innerHTML = html;
}
