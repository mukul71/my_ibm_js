document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-button');
    const resetButton = document.querySelector('.reset-button');

    if (searchButton) {
        searchButton.addEventListener('click', search); // Attach event listener to search button
    }
    if (resetButton) {
        resetButton.addEventListener('click', reset); // Attach event listener to reset button
    }
});

function search() {
    console.log('Search button clicked'); // Log to console
    const searchInput = document.getElementById('searchInput').value;
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            // Filter data based on searchInput
            const filteredData = data.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
            // Display filtered data on the page
            displayResults(filteredData);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function reset() {
    console.log('Reset button clicked'); // Log to console
    // Clear the search input field
    document.getElementById('searchInput').value = '';
    // Clear previous search results
    document.getElementById('searchResults').innerHTML = '';
}

function displayResults(data) {
    const searchResultsDiv = document.getElementById('searchResults');
    // Clear previous search results
    searchResultsDiv.innerHTML = '';
    // Display filtered data on the page
    data.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.textContent = item.name; // You can customize this to display any data you want
        searchResultsDiv.appendChild(resultItem);
    });
}
