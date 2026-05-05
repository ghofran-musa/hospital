function showDoctor(page) {
  let frame = document.getElementById("frame");

  frame.classList.remove("show");

  setTimeout(() => {
    frame.src = page;
    frame.classList.add("show"); 
  }, 200);
}
window.onload = function() {
  showDoctor('yep/welcome.html');
}

function showWelcome() {
  document.getElementById("frame").src = "yep/welcome.html";
}

function handleBooking(time) {
    const nameElement = document.getElementById('profile-doc-name');
    if (nameElement) {
        const docName = nameElement.innerText;
        sessionStorage.setItem('selectedDocName', docName);
        sessionStorage.setItem('selectedSchedule', time);
        window.location.href = 'booking.html';
    }
   
