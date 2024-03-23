document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-button');
    const resetButton = document.querySelector('.reset-button');

    searchButton.addEventListener('click', search);
    resetButton.addEventListener('click', reset);

    function search() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        console.log('Search button clicked');
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data);
                const filteredData = data.countries.concat(data.temples, data.beaches)
                    .filter(item => item.name.toLowerCase().includes(searchInput));
                console.log('Filtered data:', filteredData);
                displayResults(filteredData);
                displayTime(filteredData); // Call function to display time
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function reset() {
        console.log('Reset button clicked');
        document.getElementById('searchInput').value = '';
        document.getElementById('searchResults').innerHTML = '';
    }

    function displayResults(data) {
        const searchResultsDiv = document.getElementById('searchResults');
        searchResultsDiv.innerHTML = '';
        data.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <h3>${item.name}</h3>
                <img src="${item.imageUrl}" alt="${item.name}">
                <p>${item.description}</p>
            `;
            searchResultsDiv.appendChild(resultItem);
        });
    }

    function displayTime(data) {
        // Find the recommended country in the filtered data
        const recommendedCountry = data.find(item => item.timeZone);
    
        // If a recommended country with time zone information is found
        if (recommendedCountry) {
            const options = { timeZone: recommendedCountry.timeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const countryTime = new Date().toLocaleTimeString('en-US', options);
            console.log(`Current time in ${recommendedCountry.name}:`, countryTime);
        } else {
            console.log('No recommended country found with time zone information.');
        }
    }
    
});
