import "./App.css";
import { useState } from "react";

function App() {
  const username = window.location.pathname.slice(1);

  const [visible, setVisible] = useState(false);

  const handleSurprise = () => {
    setVisible(true);
  };

  return (
    <div>
      {username && (
        <button onClick={handleSurprise}>
          CLIQUE AQUI PARA GANHAR UMA SURPRESA
        </button>
      )}
      {visible && (
        <p>
          FELIs NATAL {username.toUpperCase()} !!!!!!!!!!!!
          🥰🥰🥰🤩🤩🤩👏👏👏👏👏👏💯💯💯💯💋💋💋💋💋💓💓💓💓💓💓💓🌲🌲🌲🌲🌲🌲
        </p>
      )}
    </div>
  );
}

export default App;
