

// Select my container
const resultsContainer = document.querySelector(".last-post");


const URL = "https://greenskitchen-afd1b0.ingress-daribow.easywp.com/wp-json/wp/v2/posts?date";
// My Proxy server
const proxy = "https://noroffcors.herokuapp.com/";

const corsFixUrl = proxy + URL;

async function makeApiCall() {
    try {
        const response = await fetch(corsFixUrl);
        // convert the response to be JSON data
        const elephantsData = await response.json();
        console.log(elephantsData);
        resultsContainer.innerHTML = alert("success", "Hey your API call i successful");

    } catch (e) {
        console.log(e);
        resultsContainer.innerHTML = alert("error", e);
    }
}

makeApiCall().then();