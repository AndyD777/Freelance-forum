const names = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank", "Grace"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Artist"];
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 }
];

const freelancerList = document.querySelector("#freelancer-list");
const averagePriceDisplay = document.querySelector("#average-price");

function renderFreelancers() {
  freelancerList.innerHTML = ""; // Clear old list
  for (const freelancer of freelancers) {
    const li = document.createElement("li");
    li.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
    freelancerList.appendChild(li);
  }
}

function updateAveragePrice() {
  const total = freelancers.reduce((sum, f) => sum + f.price, 0);
  const average = (total / freelancers.length).toFixed(2);
  averagePriceDisplay.textContent = `Average Starting Price: $${average}`;
}

function addRandomFreelancer() {
  const baseName = names[Math.floor(Math.random() * names.length)];
  const uniqueId = Math.floor(Math.random() * 100); // Adds a number like #42
  const name = `${baseName} #${uniqueId}`;

  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 50) + 30; // Price between 30–79

  freelancers.push({ name, occupation, price });
  renderFreelancers();
  updateAveragePrice();
}


renderFreelancers();
updateAveragePrice();

setInterval(addRandomFreelancer, 3000); // Add a new freelancer every 3 seconds

