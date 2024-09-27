export class AppNotification {
  id: number;
  titulo: string;
  mensaje: string;
  fecha: string;

  constructor(id: number, titulo: string, mensaje: string, fecha: string) {
    this.id = id;
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.fecha = fecha;
  }
}
