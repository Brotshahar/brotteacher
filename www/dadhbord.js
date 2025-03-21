const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const pname = document.querySelector("#pname");
const slist = document.querySelector("#studentlist");
const subject = document.querySelector("#subject");
const sdate = document.querySelector("#sdate");
const borg = document.getElementsByName("borg");
const smobile = document.querySelector("#smobile");
const snum = document.querySelector("#snum");
const search = document.querySelector("#ssearch");


// create students array
studentlist = [];
let counter = 0;

function adds() {
    // add to student counter
    counter++;
    snum.innerText= counter;
    // check boy or girl
        if (borg[0].checked) {
           txt = borg[0].value;
          }
        if (borg[1].checked) {
           txt = borg[1].value;
        }
        console.log(txt);

    
    // create student obj
    const student = {
        fname: fname.value,
        lname: lname.value,
        smobile : smobile.value,
        pname: pname.value,
        subject :subject.value,
        sdate : sdate.value,
        borg : txt,
      
    };
    // add to students array
    studentlist.push(student);
    console.log(studentlist);
    // clear form
    fname.value = "";
    lname.value = "";
    pname.value = "";
    subject.value = "";
    smobile.value = "";
    sdate.value = "";
    borg[0].checked = null ;
    borg[1].checked = null ;
    // build DOM
    builddom(studentlist);
}



// bulid DOM fun
function builddom(array) {
    // clear DOM
    slist.innerHTML = "";
    // buildnew
    slist.innerHTML =  `<tr>
    <th>מספר</th>
    <th>שם פרטי</th>
    <th>שם משפחה</th>
    <th>מספר טלפון</th>
    <th>שם הורה</th>
    <th>נושא</th>
    <th>תאריך התחלה</th>
    <th>תלמיד/ה</th>
    <th>מחיקה</th>
    </tr>`;

    array.forEach((student, index) => {
       
        slist.innerHTML += ` 
                           <tr>
                            <td>${index}</td>
                            <td>${student.fname}</td>
                            <td>${student.smobile}</td>
                            <td>${student.lname}</td>
                            <td>${student.pname}</td>
                            <td>${student.subject}</td>
                            <td>${student.sdate}</td>
                            <td>${student.borg}</td>
                            <td> 
                            <i onclick="deletestudent(${index})" class="fa-regular fa-trash-can" style="cursor: pointer;"></i> 
                            </td>
                            </tr>  `;
                          
                         
    });
    currentdate();
}

// get curret date fun
function currentdate(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1 ).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    sdate.value = `${year}-${month}-${day}`;
    console.log(sdate.value);

}

// delete student fun
function deletestudent(index){
 // check cinfirm
  const isSure = confirm("Delete Student?");
  // user react
  if (!isSure) return;

  // Delete student
  studentlist.splice(index, 1);
  // update scounter
  counter--;
  snum.innerText= counter;
  // build DOM
  builddom(studentlist);
}

// search student
function searchstudent(){
   const sfilter = studentlist.filter((student) => student.fname.includes(search.value));
 // build DOM
 builddom(sfilter);
}

// call curent date
currentdate();