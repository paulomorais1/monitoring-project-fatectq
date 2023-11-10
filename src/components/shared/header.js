import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../upload/header/FatecTaquaritinga.svg";
import qrcodemec from "../upload/header/img_qrcode_mec.png";
import CPS from "../upload/header/logoCPS.svg";
import "../style/header.css"; // Importe seus estilos locais aqui

const MyNavbar = () => {
  const [showCursos, setShowCursos] = useState(false);
  const [showInstitucional, setShowInstitucional] = useState(false);
  const [showAcessos, setShowAcessos] = useState(false);
  const [showVestibular, setShowVestibular] = useState(false);

  useEffect(() => {
    // Importe os estilos do Bootstrap aqui
    import("bootstrap/dist/css/bootstrap.min.css").then(() => {
      // Estilos do Bootstrap importados com sucesso
    });

    return () => {
      // Lógica de limpeza, se necessário
    };
  }, []); // O array de dependências vazio garante que o efeito seja executado apenas uma vez

  return (
    <Navbar collapseOnSelect bg="white" expand="lg" className="py-3 navbar">
      <div className="container justify-content-around ">
        <Navbar.Brand href="/">
          <img src={logo} className="logoFatec" alt="Fatec Taquaritinga" />
        </Navbar.Brand>
        <a href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/OTY3">
          <img src={qrcodemec} className="qrCodeMec" alt="QRCode MEC" />
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav className="mx-auto">
              <NavDropdown
                title="Cursos"
                id="navbarDropdownCursos"
                show={showCursos}
                onMouseEnter={() => setShowCursos(true)}
                onMouseLeave={() => setShowCursos(false)}
              >
                <NavDropdown.Item href="/curso/agronegocio">
                  Agronegócio
                </NavDropdown.Item>
                <NavDropdown.Item href="/curso/analise-e-desenvolvimento-de-sistemas">
                  Análise e Desenvolvimento de Sistemas
                </NavDropdown.Item>
                <NavDropdown.Item href="/curso/gestao-empresarial">
                  Gestão Empresarial (EaD)
                </NavDropdown.Item>
                <NavDropdown.Item href="/curso/producao-industrial">
                  Produção Industrial
                </NavDropdown.Item>
                <NavDropdown.Item href="/curso/sistemas-para-internet">
                  Sistemas para Internet
                </NavDropdown.Item>

              </NavDropdown>

              <NavDropdown
                title="Institucional"
                id="navbarDropdownInst"
                show={showInstitucional}
                onMouseEnter={() => setShowInstitucional(true)}
                onMouseLeave={() => setShowInstitucional(false)}
              >
                <NavDropdown.Item href="/sobre">
                  Quem somos/departamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="/grupos-de-pesquisa">
                  Grupos de pesquisa
                </NavDropdown.Item>
                <NavDropdown.Item href="/noticias">
                  Notícias/Imprensa
                </NavDropdown.Item>
                <NavDropdown.Item href="/monitoria">
                  Horários de monitoria
                </NavDropdown.Item>
                <NavDropdown.Item href="/calendario-letivo">
                  Calendário letivo
                </NavDropdown.Item>
                <NavDropdown.Item href="/horario-das-aulas">
                  Horário das aulas
                </NavDropdown.Item>
                <NavDropdown.Item href="/mapa-de-salas">
                  Mapas de salas
                </NavDropdown.Item>
                <NavDropdown.Item href="/contato">
                  Fale conosco
                </NavDropdown.Item>
                <NavDropdown.Item href="/regulamento-geral">
                  Regulamento Geral
                </NavDropdown.Item>
                <NavDropdown.Item href="/identidade-visual">
                  Identidade Visual
                </NavDropdown.Item>
                <NavDropdown.Item href="/documentacao-de-estagio">
                  Documentação de Estágio
                </NavDropdown.Item>
                <NavDropdown.Item href="/plano-desenvolvimento-institucional">
                  Plano de Desenvolvimento Institucional
                </NavDropdown.Item>
                <NavDropdown.Item href="/relatorio-cpa">
                  Relatório CPA
                </NavDropdown.Item>

              </NavDropdown>

              <NavDropdown
                title="Acessos"
                id="navbarDropdownAcc"
                show={showAcessos}
                onMouseEnter={() => setShowAcessos(true)}
                onMouseLeave={() => setShowAcessos(false)}
              >
                <NavDropdown.Item
                  target="_blank"
                  href="http://www.biblio.cps.sp.gov.br/"
                >
                  BiblioCPS
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://siga.cps.sp.gov.br/aluno/login.aspx"
                >
                  SIGA (para alunos)
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://siga.cps.sp.gov.br/fatec/login.aspx"
                >
                  SIGA (para professores)
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="http://reserva.fatectq.edu.br/"
                >
                  Sistema de reservas (CLI/CLP)
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="http://mail.fatectq.edu.br/"
                >
                  E-mail (fatectq.edu.br)
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="http://mail.fatec.sp.gov.br/"
                >
                  E-mail (fatec.sp.gov.br)
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="http://revista.fatectq.edu.br/"
                >
                  Revista Interface Tecnológica
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="http://simtec.fatectq.edu.br/"
                >
                  Simpósio de Tecnologia (SIMTEC)
                </NavDropdown.Item>
         
              </NavDropdown>

              <NavDropdown
                title="Vestibular"
                id="navbarDropdownVest"
                show={showVestibular}
                onMouseEnter={() => setShowVestibular(true)}
                onMouseLeave={() => setShowVestibular(false)}
              >
                <NavDropdown.Item
                  target="_blank"
                  href="https://vestibularfatec.com.br"
                >
                  Inscrições
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="http://vestibularfatec.com.br/provas-gabaritos/"
                >
                  Provas antigas
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="d-none d-md-block">
          <img src={CPS} alt="CPS" className="logoCps" />
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
