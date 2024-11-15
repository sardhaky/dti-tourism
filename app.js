// Initialize the map
const map = L.map('map-container').setView([20.5937, 78.9629], 5);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define historical sites with coordinates and links
const sites = [
    {
        name: "Taj Mahal",
        coords: [27.1751, 78.0421],
        url: "tajmahal.html"
    },
    {
        name: "Red Fort",
        coords: [28.6562, 77.2410],
        url: "redfort.html"
    },
    {
        name: "Hawa Mahal",
        coords: [26.9239, 75.8267],
        url: "hawamahal.html"
    },
    {
        name: "Qutub Minar",
        coords: [28.5245, 77.1855],
        url: "qutbminar.html"
    },
    {
        name: "Konark Sun Temple",
        coords: [19.8876, 86.0945],
        url: "konarksuntemple.html"
    },
    {
        name: "Meenakshi Temple",
        coords: [9.9195, 78.1199],
        url: "meenakshitemple.html"
    },
    {
        name: "Sanchi Stupa",
        coords: [23.4868, 77.7399],
        url: "sanchistupa.html"
    },
    {
        name: "Hampi",
        coords: [15.3350, 76.4600],
        url: "hampi.html"
    },
    {
        name: "Ellora Caves",
        coords: [20.0269, 75.1792],
        url: "elloracaves.html"
    },
    {
        name: "Khajuraho Temples",
        coords: [24.8318, 79.9196],
        url: "khajurahotemples.html"
    },
    {
        name: "Rani ki Vav",
        coords: [23.8567, 72.1124],
        url: "ranikivav.html"
    },
    {
        name: "Brihadeeswarar Temple",
        coords: [10.7821, 79.1315],
        url: "brihadeeswarartemple.html"
    },
    {
        name: "Gol Gumbaz",
        coords: [16.8302, 75.7129],
        url: "golgumbaz.html"
    },
    {
        name: "Victoria Memorial",
        coords: [22.5448, 88.3426],
        url: "victoriamemorial.html"
    },
    {
        name: "Ajanta Caves",
        coords: [20.5523, 75.7033],
        url: "ajantacaves.html"
    },
    {
        name: "Gateway of India",
        coords: [18.9220, 72.8347],
        url: "gatewayofindia.html"
    },
    {
        name: "Charminar",
        coords: [17.3616, 78.4747],
        url: "charminar.html"
    },
    {
        name: "Mahabalipuram Temples",
        coords: [12.6117, 80.1972],
        url: "mahabalipuramtemples.html"
    },
    // New Temples added
    {
        name: "Birla Mandir",
        coords: [17.4056, 78.4890],
        url: "birlamandir.html"
    },
    {
        name: "Jagannath Temple",
        coords: [17.3745, 78.4815],
        url: "jagannathtemple.html"
    },
    {
        name: "Keesaragutta Temple",
        coords: [17.5100, 78.4772],
        url: "keesaraguttatemple.html"
    },
    {
        name: "Chilkur Balaji Temple",
        coords: [17.2823, 77.9416],
        url: "chilkurbalajitemple.html"
    },
    {
        name: "Sanghi Temple",
        coords: [17.4048, 77.6534],
        url: "sanghitemple.html"
    },
    {
        name: "Sri Ramalingeswara Swamy Temple",
        coords: [17.3583, 78.5611],
        url: "sriramalingeswaraswamitemple.html"
    },
    {
        name: "Tirupati Temple",
        coords: [13.6288, 79.4192],
        url: "tirupati.html"
    }
];

// Add markers to the map with links for each historical site
sites.forEach(site => {
    L.marker(site.coords).addTo(map)
        .bindPopup(`<a href="${site.url}" target="_blank">${site.name}</a>`);
});

// Feedback Form Logic
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display feedback in the list
    const feedbackList = document.getElementById("feedback-list");
    const feedbackItem = document.createElement("li");
    feedbackItem.innerHTML = `<strong>${name}</strong> (${email})<br>${message}`;
    feedbackList.prepend(feedbackItem); // Add to the top of the list

    // Clear form fields
    document.getElementById("feedback-form").reset();
});
