// Predefined questions
let questions = [
    // General Basics
    "What’s your favorite color?",
    "Do you prefer sweet or savory snacks?",
    "What’s your zodiac sign? Do you believe in astrology?",
    "Are you a cat person, a dog person, or neither?",
    "What’s your favorite childhood cartoon or TV show?",
    "Do you prefer summer or winter? Why?",
    "What’s your favorite holiday or celebration?",
    "Do you prefer coffee or tea?",
    "Are you a morning shower or a night shower person?",
    "What’s your favorite genre of movies?",
    "Do you enjoy board games, video games, or neither?",
    "What’s your go-to comfort food?",
    "What’s your favorite ice cream flavor?",
    "What’s your least favorite household chore?",
    "Do you like spicy food?",
    "What’s a dish you’d order every time if it were on the menu?",
    "Are you more of a book lover or a movie fan?",
    "What’s your favorite type of weather?",
    "Do you like working out, or do you have a favorite way to stay active?",
    "What’s a fun fact about you that most people don’t know?",

    // Expanding Political Topics
    "How do you feel about the role of social media in politics?",
    "Do you think wealth inequality is a major issue, and how should it be addressed?",
    "What’s your perspective on climate change and how to combat it?",
    "How do you feel about voting rights and accessibility?",
    "Do you believe term limits should be mandatory for politicians?",
    "What’s your stance on universal healthcare?",
    "How important is freedom of speech to you, and do you think it should have limits?",
    "Do you think the government should have more or less involvement in people’s lives?",
    "How do you feel about student loan forgiveness or education reform?",
    "What’s your take on immigration policies?",
    "Do you support stricter gun control laws?",
    "How important is bipartisanship in solving societal issues?",
    "Do you think protests are an effective way to create change?",
    "How do you feel about corporate influence in politics?",
    "Do you think taxes are too high, too low, or just right?",
    "Should politicians be held accountable for their personal lives or just their policies?",
    "What’s your opinion on international aid versus domestic priorities?",
    "Do you think young people are politically engaged enough?",
    "How do you feel about government surveillance and privacy?",
    "What’s your perspective on how history should be taught in schools?",

    // Additional Fun & Random Questions
    "What’s your favorite animal?",
    "If you could live in any fictional world, where would it be?",
    "Do you believe in ghosts or the supernatural?",
    "What’s your favorite amusement park ride?",
    "Have you ever had a recurring dream or nightmare?",
    "What’s the worst haircut you’ve ever had?",
    "Do you believe in soulmates?",
    "What’s the weirdest job you’ve ever had?",
    "If you could master any instrument, what would it be?",
    "Do you enjoy karaoke, or is it your worst nightmare?",

    // Relationships & Love (Expanded)
    "Do you believe timing plays a big role in relationships?",
    "How do you feel about long-distance relationships?",
    "What’s something small you think keeps the spark alive in a relationship?",
    "Do you think it’s important to share hobbies with your partner?",
    "How do you usually celebrate anniversaries?",
    "Do you think trust is built slowly, or is it an all-or-nothing thing?",
    "Have you ever had a 'meet-cute' story?",
    "What’s a relationship dealbreaker for you?",
    "How do you feel about couples traveling together early in a relationship?",
    "Do you believe in 'the one,' or is love a choice?",

    // World & Travel
    "Do you prefer traveling alone or with others?",
    "What’s a place you’ve visited that exceeded your expectations?",
    "If you could have a free plane ticket to anywhere in the world, where would you go?",
    "What’s your ideal way to explore a new city?",
    "Do you prefer nature trips or cultural experiences?",
    "Have you ever experienced culture shock while traveling?",
    "What’s your dream destination and why?",
    "How do you usually plan trips: meticulously or last-minute?",
    "Have you ever taken a spontaneous trip?",
    "What’s your favorite part about traveling?",

    // Philosophical & Thought-Provoking (Expanded)
    "Do you think people are more driven by fear or love?",
    "If you could ask the universe one question, what would it be?",
    "How do you define a meaningful life?",
    "Do you think technology is more helpful or harmful to society?",
    "What’s your take on the idea of free will?",
    "How do you personally handle failure?",
    "If everyone in the world had one job they were great at, what would you want yours to be?",
    "Do you think happiness is a choice or a result of circumstances?",
    "How do you approach forgiveness?",
    "What’s the most important quality a person can have?",

    // Pop Culture & Entertainment
    "Who’s your favorite actor or actress?",
    "What’s a movie you can watch over and over again?",
    "What’s a trend you wish would come back?",
    "Do you prefer books with happy endings or bittersweet ones?",
    "Who’s an artist or band you’ve seen live?",
    "What’s a celebrity you’d love to have dinner with?",
    "Do you enjoy stand-up comedy, and do you have a favorite comedian?",
    "What’s your favorite meme or viral video?",
    "Do you follow any sports teams?",
    "What’s the last album you listened to?",

    // Family & Traditions (Expanded)
    "What’s a family dish or recipe that’s special to you?",
    "Do you have any heirlooms or family keepsakes?",
    "How do you usually celebrate birthdays?",
    "Do you have any funny family traditions?",
    "Who in your family do you admire most and why?",
    "Did your family have pets growing up?",
    "Do you remember your first family vacation?",
    "How do you feel about blending family traditions in relationships?",
    "Have you ever been to a big family reunion?",
    "Do you enjoy hosting family gatherings, or do you prefer attending them?",

    // Expanding Politics and Values (Continued)
    "Do you believe social media companies should be regulated more strictly?",
    "How do you feel about renewable energy versus fossil fuels?",
    "What’s your perspective on the cost of living and housing affordability?",
    "Do you think there’s enough focus on mental health in public policy?",
    "How important is national security versus personal freedoms?",
    "Do you think billionaires should exist in a world with extreme poverty?",
    "What’s your perspective on universal basic income?",
    "How do you feel about the role of unions in modern workplaces?",
    "Do you believe democracy is the best form of government?",
    "How do you feel about cancel culture and accountability?"
];





// Check if we have a name stored in localStorage
const storedName = localStorage.getItem("userName");
const greeting = document.getElementById("greeting");

// If the name exists, show a personalized greeting
if (storedName) {
    greeting.textContent = `Welcome, ${storedName}! Ready for a surprise?`;
    checkIfAdmin(storedName);  // Check if the user is "ADMIN"
} else {
    // Otherwise, ask for their name
    const name = prompt("What's your name?");
    localStorage.setItem("userName", name);
    greeting.textContent = `Welcome, ${name}! Ready for a surprise?`;
    checkIfAdmin(name);  // Check if the user is "ADMIN"
}

// Function to check if the name is "ADMIN"
function checkIfAdmin(name) {
    if (name.toUpperCase() === "ADMIN") {
        // Show the password section if the user is "ADMIN"
        document.getElementById('passwordSection').classList.remove('hidden');
        document.getElementById('mainContent').classList.add('hidden');
    } else {
        // Show the question generator if the user is not "ADMIN"
        document.getElementById('mainContent').classList.remove('hidden');
    }
}

// Random question generator function
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Show a random question when the button is clicked
document.getElementById('questionButton').addEventListener('click', function() {
    const question = getRandomQuestion();
    document.getElementById('questionDisplay').textContent = question;
});

// Password protection and Admin functionality
const correctPassword = "admin123"; // Set your password here

// Show the admin panel if the correct password is entered
document.getElementById('passwordButton').addEventListener('click', function() {
    const enteredPassword = document.getElementById('password').value;
    
    if (enteredPassword === correctPassword) {
        // Hide the password section
        document.getElementById('passwordSection').classList.add('hidden');
        // Show the Admin Panel
        document.getElementById('adminPanel').classList.remove('hidden');
        // Populate the list of current questions
        showQuestionList();
    } else {
        alert("Incorrect password!");
    }
});

// Add a new question to the list
document.getElementById('addQuestionButton').addEventListener('click', function() {
    const newQuestion = document.getElementById('newQuestion').value;
    if (newQuestion) {
        questions.push(newQuestion);
        document.getElementById('newQuestion').value = '';
        showQuestionList();
    }
});

// Show the current list of questions
function showQuestionList() {
    const questionList = document.getElementById('questionList');
    questionList.innerHTML = '';
    questions.forEach((question, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${question}`;
        questionList.appendChild(li);
    });
}
