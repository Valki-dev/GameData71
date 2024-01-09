export interface Videogame {
    id: string;
    name: string;
    versionActual: string;
    faseDesarrollo: string;
    fechaCreacion: string;
    plataformas: string;
    descargas: string;
    publicado: string;
    desarrollo: string;
    urlImagen: string;
    actualizaciones: string;
    estado: string;
}

export interface GameDataList {
    gameDataList: Videogame[];
    nproyectos: number;
}