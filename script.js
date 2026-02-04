// Countdown Timer Logic
const targetDate = new Date("Feb 28, 2026 00:00:00").getTime();

const timerFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    // Display results
    document.getElementById("days").innerHTML = days + "<span>Days</span>";
    document.getElementById("hours").innerHTML = hours + "<span>Hours</span>";
    document.getElementById("mins").innerHTML = mins + "<span>Mins</span>";
    document.getElementById("secs").innerHTML = secs + "<span>Secs</span>";

    // If countdown finishes
    if (distance < 0) {
        clearInterval(timerFunction);
        document.querySelector(".timer").innerHTML = "EXPIRED";
    }
}, 1000);
const form = document.getElementById('mainBookingForm');
const modal = document.getElementById('paymentModal');
const finalPayBtn = document.getElementById('finalPayBtn');
const closeModal = document.querySelector('.close-modal');

// Form submit handle karke modal dikhana
if (form) {
    form.onsubmit = (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    };
}

// Modal close karna
if (closeModal) {
    closeModal.onclick = () => modal.style.display = "none";
}

// Payment method switch karna
function switchPay(type) {
    document.getElementById('cardSection').style.display = type === 'card' ? 'block' : 'none';
    document.getElementById('upiSection').style.display = type === 'upi' ? 'block' : 'none';
    document.getElementById('tabCard').classList.toggle('active-tab', type === 'card');
    document.getElementById('tabUpi').classList.toggle('active-tab', type === 'upi');
}

// Final Payment Confirm karna
if (finalPayBtn) {
    finalPayBtn.onclick = function() {
        this.innerText = "Processing...";
        setTimeout(() => {
            modal.style.display = "none";
            Swal.fire('Success!', 'Booking & Payment Done!', 'success').then(() => {
                form.submit(); // Ye Formspree par data bhej dega
            });
        }, 2000);
    };
}