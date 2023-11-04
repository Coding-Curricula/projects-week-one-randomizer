document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('inputForm');
    const inputField = document.getElementById('inputField');
    const submitButton = document.getElementById('submitButton');
    const randomButton = document.getElementById('randomButton');
    const inputsList = document.getElementById('inputsList');
    const selectedList = document.getElementById('selectedList');
    const projectList = document.getElementById('projectList');

    let inputsArray = [];
    let selectedArray = [];

    let projects = [
        'Build a personal portfolio website showcasing your projects and skills.',
        'Create a landing page for a product or service with a sign-up form.',
        'Design a responsive blog layout with multiple articles.',
        'Develop a contact form with validation and send email functionality.',
        'Build a basic e-commerce website with product listings and a shopping cart.',
        'Create a weather application that displays the current temperature and weather conditions.',
        'Develop a countdown timer for an upcoming event or product release.',
        'Design and code an image gallery with lightbox functionality.',
        'Build a simple quiz application with multiple-choice questions.',
        'Develop a responsive navigation menu with dropdown functionality.',
        'Create a calculator application with basic arithmetic operations.',
        'Design and code a responsive pricing table for a subscription-based service.',
        'Build a todo list application with the ability to add, edit, and delete tasks.',
        'Develop a slideshow carousel that automatically transitions between images.',
        'Create an animated progress bar that updates based on user input.',
        'Design and code a login/signup form with validation.',
        'Build a basic bar chart or pie chart using JavaScript libraries like Chart.js or D3.js.',
        'Design and code a responsive timeline to showcase important events or milestones.',
        'Develop a simple game like tic-tac-toe or hangman using JavaScript.',
        'Create a responsive image slider that allows users to swipe through images on mobile devices.'
    ];

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputValue = inputField.value.trim();

        if (inputValue) {
            // Add the input value to the list and display it
            inputsArray.push(inputValue);
            displayInputs();

            // Clear the input field
            inputField.value = '';
        }

    });

    randomButton.addEventListener("click", () => {
        if (inputsArray.length > 0) {
            //remove a random input from the array
            const randomIndex = Math.floor(Math.random() * inputsArray.length);
            const selectedItem = inputsArray.splice(randomIndex, 1)[0];

            selectedArray.push(selectedItem);

            displayInputs();
            displaySelected();
        }
    });

    function displayInputs() {
        inputsList.innerHTML = "";

        // display all inputs in the list
        inputsArray.forEach((input) => {
            const listItem = document.createElement("li");
            listItem.innerText = input;
            inputsList.appendChild(listItem);
        });
    }

    function displaySelected() {
        // clear the list before displaying updated array
        selectedList.innerHTML = '';

        //display all selected inputs in the list
        selectedArray.forEach((input) => {
            const listItem = document.createElement("li");
            listItem.textContent = input;
            selectedList.appendChild(listItem);
        });
    }

    function displayProjects() {
        projectList.innerHTML = projects.map((project, index) => {
            return `<li id="project_${index}">${project}</li>
            <input type="checkbox" id="checkbox_${index}" onclick="toggleProject(${index})">
            `
        }).join('');
    }

    displayProjects();

    window.toggleProject = (index) => {
        const projectElement = document.getElementById(`project_${index}`);
        projectElement.classList.toggle("completed");
        projects[index] = projectElement.classList.contains("completed") ? "Completed" : projects[index];
    }
});