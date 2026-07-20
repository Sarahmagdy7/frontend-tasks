document.getElementById('myForm').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age');
 const Faculty = document.getElementById('Faculty').value;
  const Phone = document.getElementById('Phone').value;
  
  if(name =="" || email == "") {
    e.preventDefault(); 
    errorMsg.textContent = "All fields are required!";
  } else {
    age.textContent = "";
  }
});