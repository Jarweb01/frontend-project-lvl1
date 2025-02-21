import readlineSync from "readline-sync";

const GAME_DIFFICULTY = 3;

const getRandomNumber = () => Math.floor(Math.random() * 21);

const getCorrectAnswer = (num) => (num % 2 === 0 ? "yes" : "no");

const gameStep = (username) => {
  const randomNumber = getRandomNumber();
  const correctAnswer = getCorrectAnswer(randomNumber);

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question("Your answer: ");

  if (answer === correctAnswer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    console.log(`Let's try again, ${username}!`);
    return false;
  }
};

export const brainEven = (username) => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 1; i <= GAME_DIFFICULTY; i++) {
    if (!gameStep(username)) {
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
