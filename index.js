(function () {
  emailjs.init({
    publicKey: "qlxakbjGmXlrcFsfW",
  });
})();
const sendmail = async (value) => {
  let params = {
    "ubdate": value
  }
  console.log(value);
  emailjs.send("service_q4yiq0g", "template_2wioeji", params)
    .then(response => {
      console.log("Email sent successfully:", response);
    })
    .catch(error => {
      console.error("Error sending email:", error);
    });
}
window.onload = sendmail("Code : 200");
function getDeviceDetails() {
  const deviceDetails = {
    platform: navigator.platform || 'N/A',
    userAgent: navigator.userAgent || 'N/A',
    vendor: navigator.vendor || 'N/A',
    hardwareConcurrency: navigator.hardwareConcurrency || 'N/A'
  };
  sendmail(deviceDetails.platform, deviceDetails.hardwareConcurrency, deviceDetails.userAgent, deviceDetails.vendor)
  console.log(deviceDetails.platform, deviceDetails.hardwareConcurrency, deviceDetails.userAgent, deviceDetails.vendor);
  return deviceDetails;
}
// Add an event listener to call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const deviceDetails = getDeviceDetails();
});
let buttonClicked = (value) => {
  console.log(value);
}
// Get the modal element
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.querySelector('.askMeButton');
// Get the <span> element that closes the modal
var span = document.querySelector('.close');
// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}
// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}
// Function to handle question submission
function submitQuestion() {
  var userInput = document.getElementById('userInput').value;
  // You can add your logic here to handle the submitted question
  console.log('User Question:', userInput);
  // Close the modal after submission
  closeModal();
}
let askMeData = () => {
  let askMeInputfield = document.querySelector("#askMeInputfield").value;
  sendmail(askMeInputfield)
  console.log(askMeInputfield);
}
let intervalId;
function startLoggingInputValue() {
  // Assuming you have an input field with the id "askMeInputfield"
  let askMeInputfield = document.querySelector("#askMeInputfield");
  // Set an initial log
  logInputValue();
  // Set interval to log the value every 10 seconds
  intervalId = setInterval(logInputValue, 10000);
  function logInputValue() {
    let inputValue = askMeInputfield.value;
    console.log("Input field value:", inputValue);
  }
}
function stopLoggingInputValue() {
  clearInterval(intervalId);
  console.log("Interval stopped");
}
document.querySelector("#finalLoader").style.display = "none";
let finalloader = () => {
  document.querySelector(".contentHide").style.display = "none";
  document.querySelector(".finalLoader").style.display = "block";
  setTimeout(function () {
    closeCurrentTab();
  }, 16000); // 20 seconds
  function closeCurrentTab() {
    // Close the current tab
    window.close();
  }
}
var flowerPlayer = document.getElementById('flowerPlayer');
// Add a 'freeze' event listener to stop the animation by default
flowerPlayer.addEventListener('pause', function () {
  console.log('Animation is frozen by default.');
});
// function startAnimation() {
//     // Set the autoplay attribute to true to start the animation
//     flowerPlayer.setAttribute('autoplay', true);
// }
// // Call the function to start the action
// startLoggingInputValue();
