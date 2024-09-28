document.getElementById("user-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;

  const street = document.getElementById("street").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zipcode").value;
  const country = document.getElementById("country").value;

  // Validate the input
  if (!name || !street || !city || !state || !zip || !country) {
    displayMessage("Please fill in all fields.", true);
    return;
  }

  // Prepare data to send
  const userData = {
    name: name,
    address: {
      street: street,
      city: city,
      state: state,
      zip: zip,
      country: country,
    },
  };

  // Send POST request to your backend API
  try {
    const response = await fetch("https://smoketrees.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    if (response.ok) {
      displayMessage("User added successfully!", false);
      clearForm();
    } else {
      displayMessage(result.message || "Error occurred", true);
    }
  } catch (error) {
    displayMessage("Error: Unable to connect to server.", true);
  }
});

const displayMessage = (message, isError) => {
  const responseMessage = document.getElementById("response-message");
  responseMessage.textContent = message;
  responseMessage.style.color = isError ? "red" : "green";
};

const clearForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("street").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("country").value = "";
};
