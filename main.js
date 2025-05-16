// const nav = document.getElementsByTagName("nav");

// gsap.to(nav, {
//   y: 5,
//   duration: 1,
// });

const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "Nu4g8xGkXtg2NSQ1dojd6A==wORAU5cLrudKvkDQ",
      },
    });

    const data = await response.json();
    console.log(data);

    if (data && data.length > 0) {
      document.getElementById("quote").textContent = `"${data[0].quote}"`;
      document.getElementById("author").textContent = `- ${data[0].author}`;
    } else {
      document.getElementById("quote").textContent = "No quote found.";
      document.getElementById("author").textContent = "";
    }
  } catch (error) {
    document.getElementById("quote").textContent = "Failed to fetch quote.";
    document.getElementById("author").textContent = "";
    console.error("Error:", error);
  }
};

//panggil saat page sudah siap
document.addEventListener("DOMContentLoaded", fetchQuote);
