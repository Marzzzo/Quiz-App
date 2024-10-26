let questions = [
  {
    question:
      "Welches war das erste motorisierte Flugzeug, das von den Gebrüdern Wright gebaut wurde?",
    answer_1: "A) Spirit of St. Louis",
    answer_2: "B) Wright Flyer",
    answer_3: "C) Concorde",
    answer_4: "D) Boeing 747",
    right_answer: 2,
  },
  {
    question:
      "Welche Fluggesellschaft ist bekannt für ihre berühmte rote und weiße Farbgebung und hat ihren Hauptsitz in Deutschland?",
    answer_1: "A) Lufthansa",
    answer_2: "B) British Airways",
    answer_3: "C) Air France",
    answer_4: "D) KLM",
    right_answer: 1,
  },
  {
    question:
      "Wie nennt man den Raum in einem Flugzeug, der für Passagiere vorgesehen ist?",
    answer_1: "A) Cockpit",
    answer_2: "B) Kabine",
    answer_3: "C) Frachtbereich",
    answer_4: "D) Steuerbord",
    right_answer: 2,
  },
  {
    question: "Was ist der Hauptzweck eines Flugzeugtriebwerks?",
    answer_1: "A) Die Steuerung des Flugzeugs",
    answer_2: "B) Die Erzeugung von Auftrieb",
    answer_3: "C) Die Erzeugung von Schub",
    answer_4: "D) Die Kühlung des Cockpits",
    right_answer: 3,
  },
  {
    question: "Welches dieser Flugzeuge ist ein Verkehrsflugzeug?",
    answer_1: "A) F-16 Fighting Falcon",
    answer_2: "B) Airbus 320",
    answer_3: "C) Cessna 172",
    answer_4: "D) Lockheed Martin F-22",
    right_answer: 2,
  },
  {
    question:
      "Welcher dieser Flughäfen ist als der verkehrsreichste der Welt bekannt?",
    answer_1: "A) Los Angeles International Airport",
    answer_2: "B) Beijing Capital International Airport",
    answer_3: "C) Hartsfield-Jackson Atlanta International Airport",
    answer_4: "D) London Heathrow Airport",
    right_answer: 3,
  },
  {
    question: "Was ist die Hauptfunktion eines Höhenmessers im Flugzeug?",
    answer_1: "A) Die Geschwindigkeit zu messen",
    answer_2: "B) Die Flughöhe anzuzeigen",
    answer_3: "C) Den Luftdruck zu messen",
    answer_4: "D) Die Außentemperatur anzuzeigen",
    right_answer: 2,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  console.log("Selected answer is", selection);
  let selectedQuestionNumber = selection.slice(-1);
  console.log("SelectedQuestionNumber is", selectedQuestionNumber);
  console.log("Current question is", question["right_answer"]);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    console.log("Richtige Antwort !!!");
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    console.log("Falsche Antwort !!!");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }

  document.getElementById("next-button").disabled = false;
}
