import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../upload/header/FatecTaquaritinga.svg";
import CPS from "../upload/header/logoCPS.svg";
import "../style/footer.css"; // Importe seus estilos locais aqui

const Footer = () => {
  return (
    <footer>
      <Container fluid className="py-4 container-spacing">
        <Row className="fnivel1">
          {/* Cursos */}
          <Col md={3}>
            <div className="titulo-footer">Cursos</div>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/curso/agronegocio">
                  Agronegócio
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  href="/curso/analise-e-desenvolvimento-de-sistemas"
                >
                  Análise e Desenvolvimento de Sistemas
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/curso/gestao-empresarial">
                  Gestão Empresarial (EaD)
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/curso/producao-industrial">
                  Produção Industrial
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/curso/sistemas-para-internet">
                  Sistemas para Internet
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  href="/curso/gestao-da-producao-industrial"
                >
                  Gestão da Produção Industrial
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Institucional */}
          <Col md={3}>
            <div className="titulo-footer">Institucional</div>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/sobre">
                  Quem somos/departamentos
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/grupos-de-pesquisa">
                  Grupos de pesquisa
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/noticias">
                  Notícias/Imprensa
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/monitoria">
                  Horários de monitoria
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/calendario-letivo">
                  Calendário letivo
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/horario-das-aulas">
                  Horário das aulas
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/mapa-de-salas">
                  Mapas de salas
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/regulamento-geral">
                  Regulamento Geral
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a className="link-footer" href="/contato">
                  Fale conosco
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Acessos */}

          <Col md={3}>
            <div className="titulo-footer">Acessos</div>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="http://www.biblio.cps.sp.gov.br/"
                  rel="noopener noreferrer"
                >
                  BiblioCPS
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="https://siga.cps.sp.gov.br/aluno/login.aspx"
                  rel="noopener noreferrer"
                >
                  SIGA (para alunos)
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="https://siga.cps.sp.gov.br/fatec/login.aspx"
                  rel="noopener noreferrer"
                >
                  SIGA (para professores)
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="http://reserva.fatectq.edu.br/"
                  rel="noopener noreferrer"
                >
                  Sistema de reservas (CLI/CLP)
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="http://mail.fatectq.edu.br/"
                  rel="noopener noreferrer"
                >
                  E-mail (fatectq.edu.br)
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="http://mail.fatec.sp.gov.br/"
                  rel="noopener noreferrer"
                >
                  E-mail (fatec.sp.gov.br)
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="http://revista.fatectq.edu.br/"
                  rel="noopener noreferrer"
                >
                  Revista Interface Tecnológica
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="http://simtec.fatectq.edu.br/"
                  rel="noopener noreferrer"
                >
                  Simpósio de Tecnologia (SIMTEC)
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Vestibular */}
          <Col md={3}>
            <div className="titulo-footer">Vestibular</div>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="https://forms.gle/oBGSmShRrpoDnD2D7"
                  rel="noopener noreferrer"
                >
                  Inscrições/cadastro de interesse
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-custom">
                <a
                  className="link-footer"
                  target="_blank"
                  href="https://forms.gle/oBGSmShRrpoDnD2D7"
                  rel="noopener noreferrer"
                >
                  Prova antiga
                </a>
              </ListGroup.Item>
              {/* Adicione os outros links do vestibular aqui */}
            </ListGroup>
          </Col>
        </Row>

        <div className="separador-footer"></div>

        <Row className="my-2 endereco-fone">
          {/* Imagens dos Logos */}
          <Col md={12} className="d-flex flex-wrap mb-3">
            <div>
              <img src={logo} alt="Fatec Taquaritinga" className="logoFatec" />
            </div>
            <div>
              <img src={CPS} alt="CPS" className="logoCps" />
            </div>

            {/* Endereço e Contatos */}

            <div>
              <p>
                Av. Dr. Flávio Henrique Lemos, 585
                <br />
                Portal Itamaracá, Taquaritinga/SP
                <br />
                CEP: 15906-522
              </p>
            </div>
            <div>
              <p>
                Tel.:(16) 3252-5250
                <br />
                <b>Secretaria Acadêmica:</b>{" "}
                <a href="mailto:secretaria@fatectq.edu.br">
                  secretaria@fatectq.edu.br
                </a>
                <br />
                <b>Diretoria de Serviços:</b>{" "}
                <a href="mailto:admtaqua@fatectq.edu.br">
                  admtaqua@fatectq.edu.br
                </a>
                <br />
                <b>Direção:</b>{" "}
                <a href="mailto:f022dir@cps.sp.gov.br">f022dir@cps.sp.gov.br</a>
              </p>
            </div>
          </Col>
        </Row>

        <div className="separador-footer"></div>

        <p>Todos os direitos reservados | 2023 Fatec Taquaritinga.</p>
      </Container>
    </footer>
  );
};

export default Footer;
