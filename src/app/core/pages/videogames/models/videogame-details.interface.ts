export interface VideogameDetail {
    id:                   string;
    name:                 string;
    versionActual:        string;
    faseDesarrollo:       string;
    fechaCreacion:        string;
    plataformas:          string;
    descargas:            string;
    publicado:            string;
    desarrollo:           string;
    urlImagen:            string;
    actualizaciones:      string;
    estado:               string;
    cambiosActualizacion: Updates[];
    usersDiscord:         any[];
}

export interface Updates {
    name:      string;
    version:   string;
    cambios:   string;
    descargas: string;
    fecha:     string;
}
