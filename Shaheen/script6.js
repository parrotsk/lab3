function onEnterPressed(event){
    if(event.key !=="Enter"){
        return;
    }
    addEntry();
}

var entries = [
    {id: "1", name: "shaheen"},
    {id:"2", name: "shareen"},
    {id:"3", name: "suneela"},
    {id:"4", name: "madhu"}
];

function refreshTable(){
    let snippet = "";
    entries.forEach(element => {
        snippet += `
        <tr id="${element.id}">
                <td onClick="removeEntry(${element.id})">❌</td>
                <td>${element.name}</td>
        </tr>`;
    });
    
    setName("");
    getElement("tbody").innerHTML=snippet;
}

var id=0;

function addEntry(){
    let snippet=`
        <tr id="${id}">
                <td onClick="removeEntry(${id})">❌</td>
                <td>${getName()}</td>
        </tr>
    `
    setName("");
    getElement("tbody").innerHTML+=snippet;
}

function getName(){
    return getValue("name");
}

function setName(name){
    document.getElementById("name").value=name;
}

function getValue(id){
    return document.getElementById(id).value;
}

function getElement(id){
    return document.getElementById(id);
}

function removeEntry(id){
    document.getElementById(id).remove();
}