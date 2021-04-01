function submit_button(){
    var displaystudent_array=[];
    for (var J=1; J<=4;J++) {
        var name_of_student=document.getElementById("name_of_the_student_"+J).value;
        console.log(name_of_student);
       var name_of_student_array.push(name_of_student)
        
    }
    console.log(name_of_student_array);
    var length=name_of_student_array.length;
    console.log(length);
    for (var I=0; I<length;I++) {    
        displaystudent_array.push(name_of_student_array[I]);
        console.log(displaystudent_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=displaystudent_array
}