import { useState } from "react";
import "./styles.css";

export default function App() {
  var booklist = {
    Fiction: [
      {
        name: "The Inheritance of Loss by Kiran Desai",
        description: "3.44/5  "
      },
      {
        name: "The Home and the World- Rabindranath Tagore",
        description: " 3.84 / 5 avg rating "
      },
      {
        name: "Why I am a Hindu",
        description: "3.75/5"
      }
    ],
    Science: [
      {
        name: "Special Theory of Relativity",
        description: "4.9/5"
      },
      {
        name: "The Greatest Show on Earth: The Evidence for Evolution",
        description: "4.16/5"
      },
      {
        name: "A Brief History of Time",
        description: "4.5/5"
      }
    ],
    Comedy: [
      {
        name: "Swami and Friends",
        description: "4.9/5"
      },
      {
        name: "Tulsiprasad Bandhopadhyay: Next MLA",
        description: "4.5/5"
      },
      {
        name: "Hate in the Time of Malaria",
        description: "4/5"
      }
    ]
  };

  var bookGenre = Object.keys(booklist);

  const [userInput, setUserInput] = useState("Fiction");

  function buttonClickHandler(genreName) {
    setUserInput(genreName);
  }

  return (
    <div className="App">
      <h1> Kitabi Keeda </h1>
      <h4>Explore the books of your favourite genre </h4>
      {bookGenre.map(function (genreName) {
        return (
          <button
            // Checking which button is clicked via onclick event
            onClick={() => buttonClickHandler(genreName)}
            className="button"
          >
            {/* Returning book genre in buttons in view*/}
            {genreName}
          </button>
        );
      })}
      <div>
        <hr />
        <ul>
          {/* Mapping over each object in Book Genre array */}
          {booklist[userInput].map(function (book) {
            return (
              <li key={book.name} className="recommendation-list">
                {book.name}
                <div className="descriptions">{book.description} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
