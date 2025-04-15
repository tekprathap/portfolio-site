document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
  
const distances = {
    Chennai: { Arani: 120, Vellore: 140, Ranipet: 100, Bengaluru: 340 },
    Arani: { Chennai: 120, Vellore: 45, Ranipet: 30, Bengaluru: 260 },
    Vellore: { Chennai: 140, Arani: 45, Ranipet: 20, Bengaluru: 220 },
    Ranipet: { Chennai: 100, Arani: 30, Vellore: 20, Bengaluru: 240 },
    Bengaluru: { Chennai: 340, Arani: 260, Vellore: 220, Ranipet: 240 },
  };
  
  function calculateFare() {
    const car = document.getElementById("carSelect").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const isRoundTrip = document.getElementById("roundTrip").checked;
  
    if (!from || !to || from === to) {
      document.getElementById("fareOutput").textContent = "Please select different locations.";
      return;
    }
  
    const distance = distances[from][to];
    if (!distance) {
      document.getElementById("fareOutput").textContent = "Distance not available.";
      return;
    }
  
    let rate = car === "sedan" ? 15 : car === "suv" ? 20 : 18;
    let totalDistance = isRoundTrip ? distance * 2 : distance;
    let fare = totalDistance * rate;
  
    document.getElementById("fareOutput").textContent = `Estimated Fare: ₹${fare} for ${totalDistance} km`;
  }
  
  document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    const phone = document.getElementById("userPhone").value;
  
    if (name && phone) {
      alert(`Thanks ${name}! We will call you at ${phone} to confirm your booking.`);
    } else {
      alert("Please enter name and phone.");
    }
  });
  
  