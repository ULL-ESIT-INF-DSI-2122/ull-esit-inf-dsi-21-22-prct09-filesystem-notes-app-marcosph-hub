import { Album } from "./album";
import { Artistas } from "./artistas";
import { GenerosMusicales } from "./generosMusicales";

/**
 * TRABAJO GRUPO L
 * @class Grupos contiene las especificaciones de los
 * distintos grupos
 * @param nombreGrupo nombre del grupo
 * @param artistas array de Artistas
 * @param yearGrupo año de creación del grupo
 * @param genero array de GenerosMusicales
 * @param albumes array de Album
 * @param oyentes número de oyentes 
 */
export class Grupos {
  	private nombreGrupo: string;
	private artistas: Artistas[];
	private yearGrupo: number;
	private genero: GenerosMusicales[];
	private albumes: Album[];
	private oyentes: number;
	constructor(){}

	/**
	 * Getter del nombre de los grupos
	 * @returns nombre del grupo
	 */
	getNombreGrupo(){
		return this.nombreGrupo;
	}

	/**
	 * Getter de los artistas
	 * @returns artistas
	 */
	getArtistas(){
		return this.artistas;
	}

	/**
	 * Getter del año de creación del grupo
	 * @returns año del grupo
	 */
	getYearGrupo(){
		return this.yearGrupo;
	}

	/**
	 * Getter de los géneros musicales
	 * @returns géneros
	 */
	getGenero(){
		return this.genero;
	}

	/**
	 * Getter de los albumes
	 * @returns albumes
	 */
	getAlbumes(){
		return this.albumes;
	}

	/**
	 * Getter de los oyentes mensuales
	 * @returns oyentes mensuales
	 */
	getOyentes(){
		return this.oyentes;
	}
	
	/**
	 * Setter del nombre del grupos
	 * @param nombre del grupo
	 */
	setNombreGrupo(nombre: string){
		this.nombreGrupo = nombre;
	}

	/**
	 * Setter de los artistas
	 * @param artista del grupo
	 */
	setArtistas(artista: Artistas){
		this.artistas.push(artista);
	}

	/**
	 * Setter del año de creación del grupo
	 * @param year del grupo
	 */
	setYearGrupo(year: number){
		this.yearGrupo = year;
	}

	/**
	 * Setter de los géneros del grupo
	 * @param genero musicales
	 */
	setGenero(genero: GenerosMusicales){
		this.genero.push(genero);
	}

	/**
	 * Setter de los albumes del grupo
	 * @param album del grupo
	 */
	setAlbumes(album: Album){
		this.albumes.push(album);
	}

	/**
	 * Setter de los oyentes mensuales
	 * @param oyente mensuales
	 */
	setOyentes(oyente: number){
		this.oyentes = oyente;
	}
}