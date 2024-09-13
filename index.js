document.querySelector("#hide").style.display = "none";
// document.querySelector("#popupContainer").style.display = "none";

// Set the date we're counting down to
// use new Date(new Date().getTime() + 7000).getTime() for testing (1min)
// const countdownDate =new Date(new Date().getTime() + 7000).getTime();
const countdownDate = new Date("Oct 20, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();
  // Calculate the remaining time
  const distance = countdownDate - now;
  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the countdown
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  // console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  // If the countdown is over, display a message
  if (distance <= 0) {
    clearInterval(countdownInterval);
    document.querySelector("#hide").style.display = "block";
    document.querySelector(".timerhide").style.display = "none";
    // document.querySelector("#popupContainer").style.display = "block";
  }
}, 1000);
// JavaScript function to increase blur
function increaseBlur() {
  var bgImage = document.querySelector('.bg-image');
  var currentBlur = parseFloat(bgImage.style.filter.replace('blur(', '').replace('px)', '')) || 0;
  var newBlur = currentBlur + 5; // Increase blur by 5 pixels, you can adjust this value
  bgImage.style.filter = 'blur(' + newBlur + 'px)';
}
document.addEventListener("DOMContentLoaded", function() {
  const popupContainer = document.getElementById("popupContainer");
  if (!localStorage.getItem("popupShown")) {
    popupContainer.style.display = "block";
    localStorage.setItem("popupShown", "true");
  }
});

// function closePopup() {
//   const popupContainer = document.getElementById("popupContainer");
//   popupContainer.classList.add("fadeOut"); // Add fade out effect class
//   setTimeout(() => {
//     popupContainer.style.display = "none";
//     popupContainer.classList.remove("fadeOut"); // Remove fade out effect class after transition
//   }, 500); // Adjust the time according to your transition duration
// }

(
  function () {
    emailjs.init({
      publicKey: "ZDKINMqnnDQgVDb62",
    });
  })();
const sendmaili = async (value) => {
  let params = {
    "ubdate": value
  }
  console.log(value);
  emailjs.send("service_uxf2w8m", "template_j0c2x0f", params)
    .then(response => {
      console.log("Email sent successfully:", response);
    })
    .catch(error => {
      console.error("Error sending email:", error);
    });
}
function showError(message) {
  // Create the warning element
  const warningElement = document.createElement('div');
  warningElement.classList.add('error-warning');
  warningElement.textContent = message;

  // Style the warning element
  warningElement.style.position = 'fixed';
  warningElement.style.top = '0';
  warningElement.style.left = '60%';
  warningElement.style.transform = 'translateX(-50%)';
  warningElement.style.backgroundColor = '#f44336'; // Red color, you can change it
  warningElement.style.color = '#fff'; // White text color
  warningElement.style.padding = '10px 20px';
  warningElement.style.borderRadius = '5px';
  warningElement.style.zIndex = '9999';
  warningElement.style.fontFamily = 'Arial, Helvetica, sans-serif'; // Professional font style

  // Append the warning element to the body
  document.body.appendChild(warningElement);

  // Remove the warning after a certain duration (e.g., 5 seconds)
  setTimeout(() => {
    document.body.removeChild(warningElement);
  }, 5000); // Adjust the duration as needed (in milliseconds)
}

// window.onload = sendmail("Code : 200");
console.log("ok");
function getDeviceDetails() {
  const deviceDetails = {
    platform: navigator.platform || 'N/A',
    userAgent: navigator.userAgent || 'N/A',
    vendor: navigator.vendor || 'N/A',
    hardwareConcurrency: navigator.hardwareConcurrency || 'N/A'
  };
  const sucess = (value) => {
    console.log(value);
  }
  const error = (value) => {
    console.log(value);
  }
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
  
  // Close the modal after submission
  closeModal();
}
let askMeData = () => {
  let askMeInputfield = document.querySelector("#askMeInputfield").value;
  sendmail(askMeInputfield)
  console.log(askMeInputfield);
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
// var flowerPlayer = document.getElementById('flowerPlayer');
// // Add a 'freeze' event listener to stop the animation by default
// flowerPlayer.addEventListener('pause', function () {
//   console.log('Animation is frozen by default.');
// });
// function startAnimation() {
//     // Set the autoplay attribute to true to start the animation
//     flowerPlayer.setAttribute('autoplay', true);
// }
// // Call the function to start the action
// startLoggingInputValue();
    // Disable right-click context menu
    document.addEventListener('DOMContentLoaded', function () {
      document.addEventListener('contextmenu', function (e) {
          e.preventDefault();
      });
  });