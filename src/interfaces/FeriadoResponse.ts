export interface FeriadoResponse {
    nombre: string;
    comentarios: string;
    fecha: Date;
    irrenunciable: string;
    tipo: string;
    leyes: Leyes[];
}

export interface Leyes {
    nombre: string;
    url: string;
}
