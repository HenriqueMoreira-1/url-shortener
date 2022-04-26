import { useState } from "react";
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import { saveLink } from "../../services/storeLinks";
import api from "../../services/api";
import { FiLink } from "react-icons/fi";
import "./home.css";

function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);

      saveLink("@encurtaLink", response.data);

      setLink("");
    } catch {
      alert("Algo deu errado");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img width="230px" src="/logo.png" alt="logo" />
        <h1>Url Shortener</h1>
        <span>Cole Seu Link Para Encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="black" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Gerar Link</button>
      </div>
      <Menu />
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}

export default Home;
