class Computer{
    constructor(producer, cpuType, coresAmount, freq, ramSize, hdd, isMcAcc){
        this._producer = producer;
        this._cpuType = cpuType;
        this._coresAmount = coresAmount;
        this._freq = freq;
        this._ramSize = ramSize;
        this._hdd = hdd;
        this._isMcAcc = isMcAcc;
    }
    get producer(){ return this._producer }
    get cpuType(){ return this._cpuType }
    get coresAmount(){ return this._coresAmount }
    get freq(){ return this._freq }
    get ramSize(){ return this._ramSize }
    get hdd(){ return this._hdd }
    get isMcAcc(){ return this._isMcAcc }
    get fieldsAmount(){ return 7 }

    set producer(producer){ this._producer = producer }
    set cpuType(cpuType){ this._cpuType = cpuType }
    set coresAmount(coresAmount){
        if(coresAmount <= 0){ throw alert ("Cores amount must be more than zero!") }
        this._coresAmount = coresAmount
    }
    set freq(freq){ this._freq = freq }
    set ramSize(ramSize){ this._ramSize = ramSize }
    set hdd(hdd){ this._hdd = hdd }
    set isMcAcc(isMcAcc){ this._isMcAcc = isMcAcc }
}

class UltraLaptop extends Computer{
    constructor(weight, thickness){
        super('Asus','Intel', 4, 2.5, 6, 1000, true);
        this._weight = weight;
        this._thickness = thickness;
    }
    get weight(){ return this._weight }
    get thickness(){ return this._thickness }
    get fieldsAmount(){ return 9 }

    set weight(weight){ this._weight = weight }
    set thickness(thick){ this._thickness = thick }
}

class ComputingServer extends Computer{
    constructor(name, flopsAmount){
        super('IBM', 'Intel', 6, 4, 32, 1000, false);
        this._name = name;
        this._flopsAmount = flopsAmount;
    }
    get name(){ return this._name }
    get flopsAmount(){ return this._flopsAmount }
    get fieldsAmount(){ return 9 }

    set name(name){ this._name = name }
    set flopsAmount(flopsAmount){ this._flopsAmount = flopsAmount }
}

var compTable = document.getElementById("computers");
var compTBody = document.getElementById("tComputers");
var infoTable = document.getElementById("deviceInfo");
var infoTBody = document.getElementById("tDeviceInfo");

var comps = new Array();
var comp1 = new Computer('Irwin', 'AMD', 8, 3.5, 16, 1000, false);
var comp2 = new Computer('Bolin', 'Intel', 4, 3.2, 8, 750, false);
var laptop1 = new UltraLaptop(2, 1.8);
var laptop2 = new UltraLaptop(1.9, 1.6);
var server1 = new ComputingServer('ASC Purple', Math.pow(10, 13));
var server2 = new ComputingServer('IBM Sequoia', 16.32 * Math.pow(10, 15));

laptop2.producer = 'Lenovo';
laptop2.coresAmount = 6;
laptop2.hdd = 500;

comps.push(comp1);
comps.push(comp2);
comps.push(laptop1);
comps.push(laptop2);
comps.push(server1);
comps.push(server2);

printComputers();

// Рисуем таблицу на главной странице
function printComputers(){
    for(var i = 0; i < comps.length; i++){
        var row = document.createElement("tr");

        for(var j = 0; j < 9; j++){
            var cell = document.createElement("td");
            var ref = document.createElement("a");
            var item = '';
            if(j == 0)
                item = comps[i].producer;
            else if(j == 1)
                item = comps[i].cpuType;
            else if(j == 2)
                item = comps[i].coresAmount;
            else if(j == 3)
                item = comps[i].freq;
            else if(j == 4)
                item = comps[i].ramSize;
            else if(j == 5)
                item = comps[i].hdd;
            else if(j == 6)
                item = comps[i].isMcAcc;
            else if(j == 7)
                item = 'Редактировать';
            else if(j == 8)
                item = 'Удалить';

            var cellText = document.createTextNode(item);
            if(j == 0){              
                ref.setAttribute('href', '#');
                ref.setAttribute('id', 'more'+ i);
                ref.setAttribute('onclick', 'showDevice(this.id)');
                ref.appendChild(cellText);
                cell.appendChild(ref);
            }
            else if(j == 7){
                ref.setAttribute('href', '#');
                ref.setAttribute('id', 'edit'+ i);
                ref.setAttribute('onclick', 'editDevice(this.id)');
                ref.appendChild(cellText);
                cell.appendChild(ref);
            }
            else if(j == 8){
                ref.setAttribute('href', '#');
                ref.setAttribute('id', 'del'+ i);
                ref.setAttribute('onclick', 'removeDevice(this.id)');
                ref.appendChild(cellText);              
                cell.appendChild(ref);               
            }
            else{
                cell.appendChild(cellText);
            }        
            row.appendChild(cell);
        }
        compTBody.appendChild(row);
    }
}

// Отображаем нужные поля для ввода на странице конструктора
function setDeviceFields(value){
    if(value == 'computer'){
        document.getElementsByName("weight_field")[0].style = 'display: none';
        document.getElementsByName("thickness_field")[0].style = 'display: none';
        document.getElementsByName("name_field")[0].style = 'display: none';
        document.getElementsByName("flops_field")[0].style = 'display: none';
    }
    if(value == 'laptop'){
        document.getElementsByName("weight_field")[0].style = 'display: inline';
        document.getElementsByName("thickness_field")[0].style = 'display: inline';
        document.getElementsByName("name_field")[0].style = 'display: none';
        document.getElementsByName("flops_field")[0].style = 'display: none';
    }
    if(value == 'server'){
        document.getElementsByName("weight_field")[0].style = 'display: none';
        document.getElementsByName("thickness_field")[0].style = 'display: none';
        document.getElementsByName("name_field")[0].style = 'display: inline';
        document.getElementsByName("flops_field")[0].style = 'display: inline';
    }
}



// Рисуем таблицу с подробной информацией девайса
function showDevice(idValue){
    var rowIndex = idValue.substring(4);

    for(var i = 0; i < comps[rowIndex].fieldsAmount; i++){
        var row = document.createElement("tr");
        for(var j = 0; j < 2; j++){
            var cell = document.createElement("td");
            var microCBox = document.createElement("input");
            var item = '';
            if((i == 0)&&(j == 0))
                item = 'Producer';
            else if((i == 0)&&(j == 1))
                item = comps[rowIndex].producer;
            else if((i == 1)&&(j == 0))
                item = 'CPU Type';
            else if((i == 1)&&(j == 1))
                item = comps[rowIndex].cpuType;
            else if((i == 2)&&(j == 0))
                item = 'Cores Amount';
            else if((i == 2)&&(j == 1))
                item = comps[rowIndex].coresAmount;
            else if((i == 3)&&(j == 0))
                item = 'Frequency';
            else if((i == 3)&&(j == 1))
                item = comps[rowIndex].freq;
            else if((i == 4)&&(j == 0))
                item = 'RAM';
            else if((i == 4)&&(j == 1))
                item = comps[rowIndex].ramSize;
            else if((i == 5)&&(j == 0))
                item = 'HDD';
            else if((i == 5)&&(j == 1))
                item = comps[rowIndex].hdd;
            else if((i == 6)&&(j == 0))
                item = 'MicroSD';
            else if((i == 6)&&(j == 1)){
                item = comps[rowIndex].isMcAcc;
                microCBox.setAttribute('type', 'checkbox');
                if(item == true){
                    microCBox.checked = true;
                }
                else
                    microCBox.checked = false;

                cell.appendChild(microCBox);      
            }            
            else if((i == 7)&&(j == 0)){
                if(typeof comps[rowIndex].weight != 'undefined')
                    item = 'Weight';
                else
                    item = 'Name';
            }              
            else if((i == 7)&&(j == 1)){
                if(typeof comps[rowIndex].weight != 'undefined')
                    item = comps[rowIndex].weight;
                else
                    item = comps[rowIndex].name;
            }  
            else if((i == 8)&&(j == 0)){
                if(typeof comps[rowIndex].thickness != 'undefined')
                    item = 'Thickness';
                else
                    item = 'Flops';
            }               
            else if((i == 8)&&(j == 1))
            {
                if(typeof comps[rowIndex].thickness != 'undefined')
                    item = comps[rowIndex].thickness;
                else
                    item = comps[rowIndex].flopsAmount;
            }
    
            var cellText = document.createTextNode(item);
            if((i != 6)||( j != 1))
                cell.appendChild(cellText);       
            row.appendChild(cell);
        }
        infoTBody.appendChild(row);
    }
}
function editDevice(idValue){
    var rowIndex = idValue.substring(4);
    alert(comps[rowIndex].producer);
}
function addNewDevice(){}
function removeDevice(idValue){
    var rowIndex = idValue.substring(3);
    var back = document.getElementById('pageWrap');
    back.style.opacity = '0.3';
    var modal = document.getElementById('removeModal');
    modal.style.display = "inline";
}
function yesRemBtnClick(){

}
function noRemBtnClick(){
    var modal = document.getElementById('removeModal');
    modal.style.display = "none";
    var back = document.getElementById('pageWrap');
    back.style.opacity = '1';
}

