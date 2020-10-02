var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn -"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn -"+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word is"+ word);
    var char_at1=word.charAt(1);
    console.log(char_at1);
    length=word.length-1;
    var char_At3=word.charAt(length);
    console.log(char_At3);
    var middle_letter=Math.floor(word.length/2);
    var char_at2=word.charAt(middle_letter);
    console.log(char_at2);
    remove_char_At1=word.replace(char_at1,"_");
    remove_char_At2=remove_char_At1.replace(char_at2,"_");
    remove_char_At3=remove_char_At2.replace(char_At3,"_");
    console.log(remove_char_At3);

    question_word="<h4 id='id_display'> Q="+remove_char_At3+"</h4>";
    input_box="<br>A:<input type='text' id='input_box' >";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>  Check </button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}
var question_turns="player1";
var ans_turn="player2";
function check(){
get_answer=document.getElementById("input_box").value;
ans=get_answer.toLowerCase();
 console.log(ans);

 if(ans==word){
     if(ans_turn =="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score

     }else{
         player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score
     }
 }
 if(question_turns=="player1"){
    question_turns="player2";
    document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;

 }
 else{
     question_turns="player1";
     document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;

 }
 if(ans_turn=="player1"){
     ans_turn="player2";
     document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;

 }
 else{
     ans_turn="player1";
     document.getElementById("player_answer").innerHTML="Answer Turn-"+player1_name;
     
 }
 document.getElementById("output").innerHTML="";
}
