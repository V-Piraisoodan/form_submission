var button = document.getElementById("button");
button.addEventListener("click",inputvalues);
var row = 1;


function inputvalues(){
    
    var fname = document.getElementById("firstip").value;
    var lname = document.getElementById("lastip").value;
    var address = document.getElementById("addressip").value;
    var pcode = document.getElementById("pincodeip").value;
    var gender = document.getElementsByName("gender");
    var food = document.getElementsByName("food");
    var state = document.getElementById("stateip").value;
    var country = document.getElementById("countryip").value;

// check the input fields are fill or not

    // first name checking
    if(fname == ''){
        alert("Please enter Firstname");
        return false;
    }
    // last name checking
    if(lname == ''){
        alert("Please enter Lastname");
        return false;
    }
    // address checking
    if(address == ''){
        alert("Please enter Address");
        return false;
    }
    // pincode checking
    if(pcode == ''){
        alert("Please enter Pincode");
        return false;
    }
    // gender value checking
    if(gender[0].checked==false&&gender[1].checked==false&&gender[2].checked==false){
        alert("Please Select Gender")
        return false;
    }
    // food value checking
    if(food[0].checked==false&&food[1].checked==false&&food[2].checked==false&&food[3].checked==false&&food[4].checked==false){
        alert("Please Select Food Items")
        return false;
    }
    // for loop and conditions for select more than 1 food items
    var foodlength = [];
    for(var i=0;i<food.length;i++){
    if(food[i].checked==true){
        var a = i
        foodlength.push(a);
    }
    }
    if(foodlength<=2){
        alert("Please Select More than 1 Items")
        return false;
    }
    // state value checking
    if(state == ''){
        alert("Please enter State");
        return false;
    }
    // country value checking
    if(country == ''){
        alert("Please enter Country");
        return false;
    }


    // creating a output table row
    var outputvalue = document.getElementById("table");
    var newrow = outputvalue.insertRow(row);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);
    var cell8 = newrow.insertCell(7);

    //  gender value checking and after submiting the value set the checked value to "false"
    gender.forEach(radio => {
        if( radio.checked){
            radio.checked = false;
            cell5.innerHTML = radio.value;
        }
    });  

    //  food value checking and after submitting the value set the all checkbox value to "false"
    var array = [];
        food.forEach(checkbox => {
        if(checkbox.checked){
            checkbox.checked = false;
            array.push(checkbox.value);
        }
    });


    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = address;
    cell4.innerHTML = pcode;
    cell6.innerHTML = array;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    row++

    // clear all data,after submitting the all input values
    document.getElementById("firstip").value='';
    document.getElementById("lastip").value='';
    document.getElementById("addressip").value='';
    document.getElementById("pincodeip").value='';
    document.getElementById("stateip").value='';
    document.getElementById("countryip").value='';
}

