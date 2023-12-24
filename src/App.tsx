import "./App.css";
import { useState } from "react";

function App() {
  const username = window.location.pathname.slice(1);

  const [visible, setVisible] = useState(false);

  const [invite, setInvite] = useState("");

  const [link, setLink] = useState("");

  const handleSurprise = () => {
    setVisible(true);
  };

  const createLink = () => {
    setLink(`felisnatal.vercel.app/${invite}`);
  };

  return (
    <div>
      {!username && (
        <div>
          MANDE UM PRESENTE PARA ALGUEM
          <br />
          <input
            value={invite}
            onChange={({ target }) => setInvite(target.value)}
            type="text"
            placeholder="PRIMEIRO NOME DA PESSOA"
            style={{ width: 250, height: 30, marginTop: 15, fontSize: 16 }}
          />
          <br />
          <button disabled={!invite} onClick={createLink}>
            CRIAR LINK
          </button>
          {link && <p>{link}</p>}
        </div>
      )}
      {username && !visible && (
        <button onClick={handleSurprise}>
          CLIQUE AQUI PARA GANHAR UMA SURPRESA
        </button>
      )}
      {visible && (
        <>
          <p>
            FELIs NATAL {username.toUpperCase()} !!!!!!!!!!!!
            🥰🥰🥰🤩🤩🤩👏👏👏👏👏👏💯💯💯💯💋💋💋💋💋💓💓💓💓💓💓💓🌲🌲🌲🌲🌲🌲
          </p>
          <br />

          <div>
            AGORA MANDE PARA ALGUEM TAMBEM
            <br />
            <input
              value={invite}
              onChange={({ target }) => setInvite(target.value)}
              type="text"
              placeholder="PRIMEIRO NOME DA PESSOA"
              style={{ width: 250, height: 30, marginTop: 15, fontSize: 16 }}
            />
            <br />
            <button disabled={!invite} onClick={createLink}>
              CRIAR LINK
            </button>
            {link && <p>{link}</p>}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
