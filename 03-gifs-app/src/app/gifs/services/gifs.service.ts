import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apikey: string = 'lWstKIN3bggeV1ZHCKNE7xfNtaAp75uN';
  private serviceUrl = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.getLocalStorage();
  }

  get tagHistory(): string[] {
    return [...this._tagsHistory];
  }

  //Funcion privada para que el valor buscado no se repita y si se repite se ponga al inicio
  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)  //si el tag que recive por parametro se guardara en el array
    }
    //añadimos el nuevo tasg recivido por parametro al array en prinmera posicion
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();

  }

  //Guardar informacion en mi localStorage
  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  //Obtener informacion del local storage
  private getLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)


    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;//si es igual a 0 no va a retornar nada
    this.organizeHistory(tag) //paso el valor por parametro a mi funcion

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
        // console.log({ gifs: this.gifList });
      });

  }

}
