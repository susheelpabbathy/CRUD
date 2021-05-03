var firebaseConfig = {
    apiKey: "AIzaSyB5EPT8dbmO19QuzHEfTW0KJELjNxPQxUE",
    authDomain: "project1-feb4a.firebaseapp.com",
    databaseURL: "https://project1-feb4a-default-rtdb.firebaseio.com",
    projectId: "project1-feb4a",
    storageBucket: "project1-feb4a.appspot.com",
    messagingSenderId: "729353904687",
    appId: "1:729353904687:web:0c1bf0ffcc30bc05d95cda",
    measurementId: "G-VGRT02G429"
  };
  firebase.initializeApp(firebaseConfig);
  var ref=firebase.database().ref().child("students")

  function insertData(){
      
      var sname=document.getElementById("sname").value
      var rollno=document.getElementById("rollno").value

      ref.child(sname).set({
            sname:sname,
            rollno:rollno
      })
      console.log("Inserting data ....")
  }

  function deleteData(){
      var id=window.prompt("Enter the roll number to be deleted");
      ref.child(id).remove()
      console.log("Entry deleted")
  }

  function updateData(){
      var sname = document.getElementById("sname").value
      var rollno = document.getElementById("rollno").value  
      ref.child(sname).update({rollno:rollno})
      console.log("Entry Updated")
  }

  

  function displayData(){
    var table1=document.createElement("TABLE")
    table1.border="1"
    row=table1.insertRow(-1)
        cellh1=row.insertCell(-1)
        cellh2=row.insertCell(-1)
        cellh1.innerHTML="<b>Roll No.</b>"
        cellh2.innerHTML="<b>Name</b>"
        ref.on("value",(snap)=>{
            snap.forEach((data)=>{
                row1=table1.insertRow(-1)
                cell1=row1.insertCell(-1)
                cell1.innerHTML=data.val().rollno
                cell2=row1.insertCell(-1)
                cell2.innerHTML=data.val().sname
            })
        })
    var div=document.getElementById("table1");
    div.append(table1);
  }