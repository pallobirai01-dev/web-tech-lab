function submitForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var sid = document.getElementById("sid").value;
    var email = document.getElementById("email").value;
    var credit = document.getElementById("credit").value;
    var dept = document.getElementById("dept").value;

    if(fname==""){
        alert("First Name can not be empty.");
        return false;
    }

    if(lname==""){
        alert("Last Name can not be empty.");
        return false;
    }

    if(sid.indexOf("-")==-1){
        alert("Student ID must contain '-'.");
        return false;
    }

    if(email.indexOf("@student.aiub.edu")==-1){
        alert("Invalid Email.");
        return false;
    }

    if(credit=="" || credit<0 || credit>=148){
        alert("Credit must be between 0 and 147.");
        return false;
    }

    if(dept==""){
        alert("Select Department.");
        return false;
    }

    var table=document.getElementById("studentTable");

    var row=table.insertRow(-1);

    row.insertCell(0).innerHTML=fname;
    row.insertCell(1).innerHTML=lname;
    row.insertCell(2).innerHTML=sid;
    row.insertCell(3).innerHTML=email;
    row.insertCell(4).innerHTML=credit;
    row.insertCell(5).innerHTML=dept;

    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("sid").value="";
    document.getElementById("email").value="";
    document.getElementById("credit").value="";
    document.getElementById("dept").value="";

    return false;
}