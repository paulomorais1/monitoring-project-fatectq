class MonitorModel {
  constructor(id, nome, disciplinas, horariosDisponiveis, ra, email, imagemPerfil, horarios) {
    this.id = id;
    this.nome = nome;
    this.disciplinas = disciplinas; // Array de disciplinas que o monitor ministra
    this.horariosDisponiveis = horariosDisponiveis; // Objeto com os horários disponíveis do monitor
    this.ra = ra; // RA do monitor
    this.email = email; // E-mail do monitor
    this.imagemPerfil = imagemPerfil; // URL da imagem de perfil do monitor
    this.horarios = horarios;
  }
}

export default MonitorModel;
