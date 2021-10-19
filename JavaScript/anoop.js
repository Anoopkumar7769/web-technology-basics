 var employeeList;

function getDetails(){
    fetch("http://localhost:3000/employee")
    .then((res)=>{
      
        res.json()
        .then((data)=>{
            employeeList=data;
           // console.log(data);
            displayData();
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    });
    }

    function addDetails(){
        names=document.getElementById("name");
        emails=document.getElementById("email");
        let employee = {name:names.value, emailid:emails.value};
        fetch('http://localhost:3000/employee',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(employee)
        }).then((res)=>console.log(res)).catch((err)=>console.log(err));
          
    };
    
    function editDetails(){
        names=document.getElementById("editname");
        emails=document.getElementById("editemail");
        let employee = {name:names.value, emailid:emails.value};
        fetch('http://localhost:3000/employee',{
            method: 'PUT',
            headers:{
            'Content-Type':'application/json'
                    },
             body: JSON.stringify(employee)}).then(response=>{
                return response.json()
            }).then(data=> 
            // this is the data we get after putting our data,
            console.log(data)
            )
    };   

    // function deleteDetails(){
    //     names=document.getElementById("name");
    //     emails=document.getElementById("email");
    //     let employee = {name:names.value, emailid:emails.value};
    //     fetch('http://localhost:3000/employee',{
    //        method:'DELETE'
    //         }).then(response=>{
    //         return response.json()
    //         }).then(data=> 
    //         // this is the data we get after putting our data,
    //         console.log(data)
    //         );
    //         }
    // function addDetails(){
       
    //     var username = document.getElementById(name);
    //     var emails = document.getElementById(email);
    //     let employee = {name:username.value, emailid:emails.value};
    //     fetch('http://localhost:3000/employee',{
    //         method: 'POST',
    //         headers:{
              
    //             'Content-type': 'application/json'
    //         },
    //         body:JSON.stringify(employee)
    //     }).then((res)=>console.log(res)).catch((err)=>console.log(err));
    
    // };

    // (function editEmployee(){
    //     let employee = {name:"Raju", email:"raj@gmail.com", active: "Y"};
    //     fetch('http://localhost:3000/employee',{
    //         method: 'PUT',
    //         headers:{
    //             'Content-type': 'application/json'
    //         },
    //         body:  JSON.stringify(employee)
    //     }) .then((res)=>{
      
    //         res.json()
    //         .then((data)=>{
    //             employeeList=data;
    //             console.log(data);
    //             displayData();
    //         }).catch((err)=>{
    //             console.log(err)
    
    // })();

    // (function deleteEmployee(){
    //     let employee = {name:"Rocky", email:"rocky@gmail.com", active: "Y"};
    //     fetch('http://localhost:3000/employee',{
    //         method: 'DELETE',
    //     }).then((res)=>console.log(res)).catch((err)=>console.log(err));
    
    // })();


//fetch in js -asignment 
//Map in js -assignment
//document functions in js for html 
//Post in html javascript in fetch form

function displayData(){
    let employeesCont=employeeList.map((employee)=>
    (`<li><b>Name:</b>${employee.name}, <b>Email:</b>${employee.emailid} </li><br>`));
    let emp=document.getElementById("dispData");
   let innerHTML="";
   for(let i=0;i<employeesCont.length;i++){
    innerHTML=innerHTML.concat(employeesCont[i]);
   }
   emp.innerHTML=innerHTML;
}


// indrasen180389@gmail.com
