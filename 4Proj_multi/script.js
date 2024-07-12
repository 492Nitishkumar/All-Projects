// Default language is English
let language = {
    heading: "Reward System",
    questionText: "Question: How do you implement a reward system?",
    answerText: "Answer: You can implement a reward system using points and badges.",
    upvotesLabel: "upvotes",
    pointsLabel: "Points: ",
    badgesLabel: "Badges: "
  };
  
  function setLanguage(lang) {
    if (lang === "fr") {
      language = {
        heading: "Système de Récompense",
        questionText: "Question: Comment implémentez-vous un système de récompense?",
        answerText: "Réponse: Vous pouvez implémenter un système de récompense en utilisant des points et des badges.",
        upvotesLabel: "votes",
        pointsLabel: "Points : ",
        badgesLabel: "Badges : "
      };
    } else if (lang === "hi") {
      language = {
        heading: "पुरस्कार प्रणाली",
        questionText: "प्रश्न: आप एक पुरस्कार प्रणाली कैसे लागू करते हैं?",
        answerText: "उत्तर: आप पॉइंट्स और बैजेस का उपयोग करके एक पुरस्कार प्रणाली को लागू कर सकते हैं।",
        upvotesLabel: "वोट",
        pointsLabel: "पॉइंट्स: ",
        badgesLabel: "बैज: "
      };
    }
  }
  
  function updateUI() {
    document.getElementById('heading').innerText = language.heading;
    document.getElementById('questionText').innerText = language.questionText;
    document.getElementById('answerText').innerText = language.answerText;
    document.getElementById('upvotesLabel').innerText = language.upvotesLabel;
    document.getElementById('pointsLabel').innerText = language.pointsLabel;
    document.getElementById('badgesLabel').innerText = language.badgesLabel;
  }
  
  function changeLanguage(lang) {
    setLanguage(lang);
    updateUI();
  }
  
  // Your remaining JavaScript code...
  