var form = document.getElementById("form");
var sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", function(event) {
  event.preventDefault();
  var data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
 
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send-email.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
});
