let questionVotes = 0;
let answerVotes = 0;
let points = 0;
let badges = 0;

function upvoteQuestion() {
  questionVotes++;
  document.getElementById('questionVotes').innerText = questionVotes;
  if (questionVotes >= 5) {
    points += 10;
    badges++;
    document.getElementById('points').innerText = points;
    document.getElementById('badges').innerText = badges;
  }
}

function upvoteAnswer() {
  answerVotes++;
  document.getElementById('answerVotes').innerText = answerVotes;
  if (answerVotes >= 5) {
    points += 10;
    badges++;
    document.getElementById('points').innerText = points;
    document.getElementById('badges').innerText = badges;
  }
}
