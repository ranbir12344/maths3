function addUser()
{
    playerstore=document.getElementById("player1_name_input").value;
playerstore2=document.getElementById("player2_name_input").value;
localStorage.setItem("player1_name",playerstore);
localStorage.setItem("player2_name",playerstore2);

window.location="index.html";


}
function send(){
    number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
actual_answer=parseInt(number1)*parseInt(number2);
question_number="<h4>"+number1+"X"+number2+"</h4>";
input_box="<br>Answer:<input type='text'id='input_check_box'>";
check_button="<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
row=question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
    }
































