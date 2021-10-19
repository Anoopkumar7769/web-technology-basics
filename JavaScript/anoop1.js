
//get route
$(function(){
    $.get('http://localhost:3000/employee',function(response) {
        employeeList = response;
        displayData();
    })
})
//post route
// $(function addEmployee(){
//     console.log("In Post Request")
//     let employee = {name:"Anoop", emailid: "anoop@gmail.com"}
//     $.post('http://localhost:3000/employee',employee,function(response) {
//         console.log(response);
//     })
// })

// //delete route
// $(document).ready(function () {
//     $('#deleteDetails').click(function()){
//     var ids=$("deleteid").val()
//     $.ajax(`http://localhost:3000/employee/${ids}`,{
//         type: 'DELETE',
//         success: function(data,status,xhr){

//         },
//         error: function(jqXhr,textStatus,errorMessage){
//             alert(errorMessage);
//         }
//     });
//     });
// });  

    function displayData(){
        let employeesCont=employeeList.map((employee)=>`<li>${employee.name}-${employee.emailid} </li><br>`);
        console.log(employeesCont);
        let emp=document.getElementById("employeeList");
        let innerHTML="";
        for(let i=0;i<employeesCont.length;i++){
        innerHTML=innerHTML.concat(employeesCont[i]);
        }
        emp.innerHTML=innerHTML;
    }