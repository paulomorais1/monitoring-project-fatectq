import React from "react";
import facebook from "../upload/redes-sociais/logoFacebook.svg";
import instagram from "../upload/redes-sociais/logoInstagram.svg";
import youtube from "../upload/redes-sociais/logoYoutube.svg";
import "../style/redesSociais.css";
const RedesSociais = () => {
  return (
    <div className="text-center my-3 destaque-redes">
       Acompanhe a  <span className="destaque-v">Fatec Taquaritinga</span>:
      <a
        href="https://www.facebook.com/fatec.taquaritinga/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="ico-social" src={facebook} alt="Facebook" />
      </a>
      <a
        href="https://www.instagram.com/fatectq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="ico-social" src={instagram} alt="Instagram" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCUiEH9P7ARtslTnWtHKKBng"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="ico-social youtube" src={youtube} alt="Youtube" />
      </a>
    </div>
  );
};

export default RedesSociais;
