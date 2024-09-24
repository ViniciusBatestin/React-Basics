import {useState} from 'react'

function ModeToogle() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const darkMode = <h1>Dark mode is on</h1>;
  const lightMode = <h1>Light mode is on</h1>;

  function handleClick() {
    setDarkModeOn(!darkModeOn)
    console.log(darkModeOn ? "Light mode is on" : "Dark Mode is on")
  }
  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>
        Toogle mode
      </button>
    </div>
  );
};

export default ModeToogle;
