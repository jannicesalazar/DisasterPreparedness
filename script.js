// Function to fetch natural disaster data
async function fetchDisasterData() {
    const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events');
    const data = await response.json();
    return data.events.slice(0, 4); // Limit to first 4 events for simplicity
  }
  
  // Function to update square divs with location data
  async function updateLocations() {
    const events = await fetchDisasterData();
    events.forEach((event, index) => {
      const locationDiv = document.getElementById(`location${index + 1}`);
      locationDiv.textContent = event.title;
      locationDiv.style.backgroundColor = '#ff3333'; // Red background to indicate disaster
    });
  }
  
  // Update locations on page load
  updateLocations();
  