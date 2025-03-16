var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100);
var no_of_guesses = 6;
var guesses_nums = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 0 || user_guess > 99){
        alert("Hãy chọn 1 số từ 0 đến 99.");
    }
    else{
        guesses_nums.push(user_guess);
        --no_of_guesses;
        if(no_of_guesses == 0){
            msg1.textContent = `Số của tôi là ${answer}`;
            msg1.style.fontSize = "24px";
            msg2.textContent = "Số lượt chơi còn lại : " + no_of_guesses;
            msg3.textContent = "Số đã đoán : " + guesses_nums;
            setTimeout(() => {
                alert("Bạn quá non :))");
                location.reload();
            }, 2000);
        }
        else if(user_guess > answer){
            msg1.textContent = "Giảm bớt đê 🤣";
            msg2.textContent = "Số lượt chơi còn lại : " + no_of_guesses;
            msg3.textContent = "Số đã đoán : " + guesses_nums;
        }
        else if(user_guess < answer){
            msg1.textContent = "Chọn số nhỏ vậy 🤣";
            msg2.textContent = "Số lượt chơi còn lại :" + no_of_guesses;
            msg3.textContent = "Số đã đoán : " + guesses_nums;
        }
        else if(user_guess == answer){
            msg1.textContent = `Số của tôi là ${answer}`;
            msg1.style.fontSize = "24px";
            msg2.textContent = "Số lượt chơi còn lại : " + no_of_guesses;
            msg3.textContent = "Số đã đoán : " + guesses_nums;
            setTimeout(() => {
                alert("Chúc mừng bạn đã thắng !!!");
                location.reload();
            }, 2000);
        }
        

    }
}   