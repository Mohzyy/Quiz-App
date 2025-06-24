Mohamad Ali - leader of group/only member, I worked by myself.

I made QuizVS.io using html, css and javascript as a functioning quiz application that reads in .json files that were given to us and asks the user to enter their name as well as how many questions they want to have, I only included 5, 10, 15 questions, and they are randomized from the .json file.
How to run, install express and node js, then use [node server.js] to run server on localhost:3000

- I used toggleTheme to have a functioning dark mode/light mode that corresponds with the webpage that you're on
- startQuiz, forces user to enter a name or else it wont start, and will prompt them to enter a name and saves their name to localStorage and redirects them to quiz.html where the quiz takes place. Also, it asks how many questions that they would want.
- Also, a fun thing that I added was fun facts on the index.html page! They're randomized facts, and I can add more random facts if I wanted to. I felt it was a nice touch to a quiz app that is also like a trivia. It also rotates randomly via javascript.
- numQuestions is used to ask the user how many questions they would want on the quiz, ie 5, 10, 15.
- Clicking the QuizVS.io redirects you to home page on every .html page (quiz, result, highscores, index), aswell as clicking highscores brings you to highscores page, where you can see a ranking of everyone who takes the quiz and how many they got right with their name and you're able to download the files.
- containers are used to create the card on the index.html page
- savedTheme allows page to collect what preference the user wanted (dark mode or light mode) and save that as default mode.
- tried to add a logo when hovering on the website using favicon, but didnt come out unfortunately.
- every page has css themes in the .html file, that rotate between dark and light mode and give this gradient wave like color scheme in light mode, that catches the eye.
- quiz.html has a green bar over correct answers while a red bar for wrong answers, using .correct and .wrong 
- progress bar to tell the user how much progress they made as well as fully functioning and moving. (#progress-bar)
- quiz.html has fully functioning dynamics from the quizapp.js file, where it saves the user name, next question, current question, progress bar, timer, answer buttons, etc.
- I used .correct and .wrong and added sounds to correct and wrong answers that play a sound when you get it either right or wrong when taking the quiz.
- result page where it tells you to see highscores, go back to home, or retry if you want to. 
- confetti when finished
- quizapp.js handles current question, score and questions, username, displays username to user when taking quiz
- quizapp.js fetches questions from the .json file, if it catches an error it sends an error message.
- quizapp.js has a timer function which starts at 30 seconds and increments down to 0, then goes to next question. 
- function showQuestion pulls a question, A-D answer choices, updates progress bar, and renders question text as well as registering a click handler for selecting the answer.
- selectAnswer highlights the correct answer as green and rest as red, updates score, and plays appropriate sound, and reveals the nextQuestion button.

