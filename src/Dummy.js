const url = "https://example.com/api/data";

const data = {
  name: "John Doe",
  email: "johndoe@example.com",
};

const headers = {
  "Content-Type": "application/json", // Indicates the content type is JSON
  Authorization: "Bearer your-api-token-here", // Example authorization header
};

fetch(url, {
  method: "POST", // HTTP method (GET, POST, PUT, DELETE, etc.)
  headers: headers, // Attach the headers
  body: JSON.stringify(data), // Convert the body to a JSON string
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON response
  })
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
