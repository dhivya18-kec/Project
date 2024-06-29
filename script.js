function filterSeniors() {
    // Get the list items from the original list
    const peopleList = document.getElementById('peopleList').children;
    const seniorsList = document.getElementById('seniorsList');

    // Clear the previously filtered list
    seniorsList.innerHTML = '';

    // Iterate through each list item
    for (let i = 0; i < peopleList.length; i++) {
        // Extract name and age from each list item (assuming format "Name, Age")
        const personInfo = peopleList[i].textContent.split(', ');
        const name = personInfo[0];
        const age = parseInt(personInfo[1]); // Convert age to integer

        // Check if the person is a senior citizen (age 65 and above)
        if (age >= 65) {
            // Create a new list item for seniors and append to seniorsList
            const li = document.createElement('li');
            li.textContent = `${name}, ${age}`;
            seniorsList.appendChild(li);
        }
    }
}

