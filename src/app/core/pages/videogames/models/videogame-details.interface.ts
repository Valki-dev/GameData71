export interface VideogameDetail {
    id:               string;
    name:             string;
    descripcion:      null;
    versionActual:    string;
    plataformas:      string;
    urlImagen:        string;
    estado:           string;
    faseDesarrollo:   string;
    fechaCreacion:    string;
    descargas:        string;
    publicado:        string;
    desarrollo:       string;
    actualizaciones:  Updates[];
    nactualizaciones: null;
    njugadores:       null;
}

export interface Updates {
    name:      string;
    version:   string;
    cambios:   string;
    descargas: string;
    fecha:     string;
}
