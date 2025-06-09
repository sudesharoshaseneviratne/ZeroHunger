const prompts = [
    { category: 'Personal Details', prompt: 'Enter Your Name:-' },
    { category: 'Personal Details', prompt: 'Enter Your Gender:-' },
    { category: 'Personal Details', prompt: 'Enter Your date of Birth:-' },
    { category: 'Personal Details', prompt: 'Enter country  you currently reside:-' },
    { category: 'Preferences and Interests', prompt: 'What motivates you to support ending hunger:-' },
    { category: 'Preferences and Interests', prompt: 'Skills you think could contribute to our mission:-' },
    { category: 'Preferences and Interests', prompt: 'Policy areas you find relevant to our cause:-' },
    { category: 'Preferences and Interests', prompt: 'Interested in joining discussions on zero hunger topics:-' },
    { category: 'Feedback and Improvement', prompt: 'What do you think about our platform approach to addressing hunger:-' },
    { category: 'Feedback and Improvement', prompt: 'Are there any features or functionalities you would like to see added to improve user experience:-' },
    { category: 'Feedback and Improvement', prompt: 'How would you rate the clarity and effectiveness of the prompts in building your profile:-' },
    { category: 'Feedback and Improvement', prompt: 'How likely are you to recommend our platform to others?:-' },
    { category: 'Confirmation and Completion', prompt: 'Are you satisfied with the information you have provided in your profile?:-' },
    { category: 'Confirmation and Completion', prompt: 'Is there anything else you would like to add or modify before finalizing your profile?' },
    { category: 'Confirmation and Completion', prompt: 'Have you reviewed all the sections of your profile to ensure accuracy and completeness?' },
    { category: 'Confirmation and Completion', prompt: 'Would you like to proceed with confirmation?' },
];

let currentStep = 0;
const steps = prompts.length;
const progressFill = document.getElementById("progressFill");

function initPrompt() {
    const currentPrompt = prompts[currentStep];
    const questionNumber = (currentStep % 4) + 1;
    const totalQuestions = currentPrompt.category === 'Personal Details' ? 4 : 4;
    const questionLabel = `${questionNumber}/${totalQuestions}`;
    const promptContainer = document.getElementById('prompt-container');
    promptContainer.innerHTML = '';

    const promptElement = document.createElement('div');
    promptElement.classList.add('prompt-box');
    promptElement.innerHTML = `
        <p class="question-number">Question Number: ${questionLabel}</p>
        <p><strong>Category:</strong> ${currentPrompt.category}</p>
        <p>${currentPrompt.prompt}</p>
        <input type="text" id="user-response">
        <button onclick="previous()">Previous</button>
        <button onclick="next()">Next</button>
        ${currentStep === steps - 1 ? '<button class="finish" onclick="finish()">Finish</button>' : '<button class="skip" onclick="skip()">Skip</button>'}
    `;
    promptContainer.appendChild(promptElement);
}

function next() {
    currentStep++;
    const inputData = document.getElementById("user-response").value.trim();
    if (inputData !== "") {
        document.getElementById("output").innerHTML += "<p>" + prompts[currentStep - 1].category + ": " + prompts[currentStep - 1].prompt + " " + inputData + "</p>";
    }
    document.getElementById("user-response").value = "";
    updateProgress();
    if (currentStep === steps) {
        document.getElementById("prompt-container").innerHTML = '';
        document.getElementById("progressBar").style.display = "none";
    }
    initPrompt();
}

function previous() {
    if (currentStep > 0) {
        currentStep--;

        // Remove the last entry from the output
        document.getElementById("output").lastElementChild.remove();

        const inputData = document.getElementById("user-response").value.trim();
        document.getElementById("user-response").value = inputData;
        updateProgress();
        initPrompt();
    }
}


function skip() {
    currentStep++;
    document.getElementById("user-response").value = "";
    updateProgress();
    if (currentStep === steps) {
        document.getElementById("prompt-container").innerHTML = '';
        document.getElementById("progressBar").style.display = "none";
    }
    initPrompt();
}

function updateProgress() {
    const progress = Math.min((currentStep / steps) * 100, 100);
    progressFill.style.width = progress + "%";
}

function finish() {
    document.getElementById("prompt-container").innerHTML = '';
    document.getElementById("progressBar").style.display = "none";
    const inputs = document.getElementById("output").querySelectorAll("p");
    const outputContainer = document.getElementById("output");
    outputContainer.innerHTML = '';
    inputs.forEach(input => {
        outputContainer.innerHTML += input.outerHTML;
    });
}

initPrompt();
