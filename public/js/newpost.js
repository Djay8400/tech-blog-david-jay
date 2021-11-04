const newPostHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const title = document.querySelector("#title-input").value.trim();
  const comment = document.querySelector("#content-input").value.trim();

  if (title && comment) {
    console.log("helllooooo");
    // Send a POST request to the API endpoint
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, comment }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newPostHandler);
