
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.together-close');
const emergencyBtn = document.querySelector('.together-btn-help');
const contentHome = document.querySelector('.together-modal-content-home');
const contentEmergency = document.querySelector('.together-modal-content-call-help')
const backBtn = document.querySelector('.together-back')

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
emergencyBtn.addEventListener('click', togetherEmergency);
backBtn.addEventListener('click', openModal);


// Open
function openModal() {
  modal.style.display = 'block';
  contentHome.style.display = "block";
  contentEmergency.style.display = "none";
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function togetherEmergency() {
  contentHome.style.display = "none";
  contentEmergency.style.display = "block";

}
