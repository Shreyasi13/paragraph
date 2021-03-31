

function paragraph(){
    var input = [];
    for(var i = 1; i <= 4; i++){ 

input.push(document.getElementById("name_of_the_student_"+ i).value);
    }
    input.join(". ");
    document.getElementById("display_name_without_commas").innerHTML = input.join(". ")
}


