let gameQuit = false;

const grant = {
  getDamage: Math.floor(Math.random() * 2) + 1,
  healthPoints: 10,
  lives: 3,
  name: 'Grant the Mighty Chicken',
};

const user = {
  getDamage: Math.floor(Math.random() * 2) + 1,
  healthPoints: 40,
  name: '',
  wantsToPlay: confirm('Would you like to play a game?'),
  wins: 0,
};

function battle() {
  while (grant.healthPoints > 0) {
    grant.healthPoints = grant.healthPoints - grant.getDamage();
    user.healthPoints = user.healthPoints - user.getDamage();
    
    if (user.healthPoints <= 0) {
      alert(`${user.name} has lost. Better luck next time!`);
      break;
    }
    
    if (grant.healthPoints <= 0) {
      grant.lives = grant.lives - 1;
      alert(`${grant.name} has been defeated! He has ${grant.lives} ${grant.lives === 1 ? 'life' : 'lives'} remaining.`);
    } else {
      alert(`${grant.name} has ${grant.healthPoints} health point${grant.healthPoints === 1 ? '' : 's'} remaining.`);
      alert(`${user.name} has ${user.healthPoints} health point${user.healthPoints === 1 ? '' : 's'} remaining.`);
    }
  }
}

function resetGrantHealth() {
  grant.healthPoints = 10;
}

function declareWinner() {
  if (grant.lives === 0) {
    return user.name;
  }

  return grant.name;
}

function startCombat() {
  while (grant.lives > 0 && user.healthPoints > 0) {
    battle();
    if (grant.lives > 0) {
      if (confirm('Would you like to continue playing?')) {
        resetGrantHealth();
        alert(`${grant.name} has ${grant.healthPoints} health point${grant.healthPoints === 1 ? '' : 's'} remaining.`);
        alert(`${user.name} has ${user.healthPoints} health point${user.healthPoints === 1 ? '' : 's'} remaining.`);
      } else {
        gameQuit = true;
        break;
      }
    }
  }
}

// Game play
function startGame() {
  if (user.wantsToPlay) {
    user.name = prompt('What is your character\'s name?');
    alert(`${user.name} has challenged ${grant.name}. Begin!`);
    startCombat();
    if (gameQuit) {
      alert('Thanks for playing.');
    } else {
      const winner = declareWinner();
      alert(`Game over! ${winner} wins!`);
    }
  }
}

startGame();
