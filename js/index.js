
var student = document.getElementById("student")
var teacher = document.getElementById("teacher")
var institute = document.getElementById("institute")
student.addEventListener('click',function(){
    console.log("student Clicked")
    student.classList.toggle('student')
    teacher.classList.remove('teacher')
    institute.classList.remove('institute')
})
teacher.addEventListener('click',function(){
    console.log("teacher Clicked")
    teacher.classList.toggle('teacher')
    student.classList.remove('student')
    institute.classList.remove('institute')
})
institute.addEventListener('click',function(){
    console.log("institute Clicked")
    institute.classList.toggle('institute')
    teacher.classList.remove('teacher')
    student.classList.remove('student')


})
