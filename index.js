const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];


// Display the initial list of freelancers on the webpage.
function renderAllFreelancers() {
  const freelancerList = document.getElementById("freelancerList");
  let freelancersList = []; 

  freelancers.forEach((freelancer) => {
    const freelancerHTML = `
      <li>
        <h2>${freelancer.name}</h2>
        <p>Price: $${freelancer.price}</p>
        <p>Occupation: ${freelancer.occupation}</p>
        <button class="details" data-name="${freelancer.name}">See details</button>
        <button class="remove" data-name="${freelancer.name}">Remove from list</button>
      </li>
    `;
    freelancersList += freelancerHTML;
  });
  freelancerList.innerHTML = freelancersList;

  updateAveragePrice();
}

function updateAveragePrice() {
  const averagePriceElement = document.getElementById("averagePrice");
  averagePriceElement.innerHTML = `Average Starting Price: $${averagePrice()}`;
}


// Function to deetermine the average price of all freelancers
function averagePrice() {
  const total = freelancers.reduce((acc, freelancer) => {
  return acc + freelancer.price;
  }, 0);
  return (total / freelancers.length).toFixed(2);
};


document.addEventListener('DOMContentLoaded', (event) => {
  renderAllFreelancers();
});





// // A delay to ensure that the DOM is loaded before adding event listeners
// setTimeout(() => { 
//   const freelancerList = document.querySelector("#freelancerList");
//   freelancerList.addEventListener("click", (event) => {
//     const button = event.target;
//     if (button.classList.contains("details")) {
//       const name = button.getAttribute("data-name");
//       const freelancer = freelancers.find((freelancer) => freelancer.name === name);
//       alert(`Name: ${freelancer.name}\nPrice: $${freelancer.price}\nOccupation: ${freelancer.occupation}`);
//     } else if (button.classList.contains("remove")) {
//       const name = button.getAttribute("data-name");
//       freelancers = freelancers.filter((freelancer) => freelancer.name !== name);
//       renderAllFreelancers();
//     }
//   });
// }, 3000);    // Delay of 3 seconds before running the code

