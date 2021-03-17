import React from 'react';
import './App.css';

function App() {
    const [formName, setFormName] = React.useState("");
    const [formAge, setFormAge] = React.useState(0);
    const [formSelect, setFormSelect] = React.useState("anders")
    const [formComments, setFormComments] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formName, formAge, formSelect, formComments)
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
          <fieldset>
              <legend>Gegevens:</legend>
              <label htmlFor="details-name">Naam:</label>
              <input
                  type="text"
                  name="name"
                  id="name-field"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
              />
              <label htmlFor="age">Leeftijd:</label>
              <input
                  type="number"
                  name="age"
                  id="age-field"
                  value={formAge}
                  onChange={(e) => setFormAge(e.target.value)}
              />
          </fieldset>
          <fieldset>
              <legend>Jouw review</legend>
              <label htmlFor="name">Hoe heb je dit recept gevonden</label>
                <select
                    name="recept"
                    id="selectbox"
                    value={formSelect}
                    onChange={(e) => setFormSelect(e.target.value)}
                >
                    <option value="google">Google</option>
                    <option value="vriend">Vriend</option>
                    <option value="advertentie">Advertentie</option>
                    <option value="anders">Anders</option>
                </select>
                <label htmlFor="recipe-comments">Opmerkingen:</label>
              <textarea
                  name="comments"
                  id="recipe-comments"
                  rows="4"
                  cols="40"
                  placeholder="Wat vond je van het recept?"
                  value={formComments}>
                  onChange={(e) => setFormComments(e.target.value)}
                </textarea>
                 <button
                     type="submit"
                 >
                     Versturen
                 </button>
          </fieldset>
      </form>
    </div>
  );
}

export default App;
