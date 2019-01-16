let contact_form = document.getElementById('contact_form');

function validate_form(e) {
  e.preventDefault();
  let contact_name = document.getElementById('contact_name').value;
  let email_address = document.getElementById('email_address').value;
  let message = document.getElementById('message').value;
  let alert = document.getElementById('alert');

  if (contact_name == '' || email_address == '') {
    alert.innerHTML = `Please fill out all fields!`;
    alert.classList.add('red');
  } else {
    if (contact_name.length < 2) {
      alert.innerHTML = `Your name must be at least 2 characters long!`;
      alert.classList.add('red');
    } else {
      var atpos = email_address.indexOf('@');
      var dotpos = email_address.lastIndexOf('.');
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email_address.length) {
        alert.innerHTML = `Please use valid email!`;
        alert.classList.add('red');
      } else {
        if (message.length == 0) {
          alert.innerHTML = `You should leave us a message!`;
          alert.classList.add('red');
        } else {
          alert.innerHTML = `${contact_name}, thank you for reaching out!`;
          alert.classList.add('green');
          (function formSubmit() {
            var formElements = document.getElementById("contact_form").elements;
            var postData = {};
            for (let i = 0; i < formElements.length; i++)
              if (formElements[i].type != "submit")
                postData[formElements[i].name] = formElements[i].value;
            var XMLHttp = new XMLHttpRequest();
            XMLHttp.onreadystatechange = function () {
              if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
                alert(XMLHttp.responseText);
              } else {
                window.alert('An error occurred during your request!');
              }
            }

            XMLHttp.open('POST', 'http://www.slicestic.com/api/v1/fe-dev', true);
            XMLHttp.setRequestHeader('Content-Type', 'multipart/form-data');
            XMLHttp.send(postData);
            console.log(postData);
          }())
        }
      }
    }
  }
}


contact_form.addEventListener('submit', validate_form, false);


