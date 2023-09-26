import { Injectable } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {
  frontImage = new Subject<string>();
  frontImage$ = this.frontImage.asObservable();
  data: Data[] = []

  async getFrontPage(): Promise<void>{
    try {
      const response = await axios.get('https://pixabay.com/api/?key=34573560-b4b29946062bf53b893e1ec40&id=7274743');
      this.frontImage.next(response.data.hits[0].webformatURL);
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  }

  changeFrontPage(url: string): void{
    this.frontImage.next(url)
  }

  async getImages(): Promise<void> {
    try {
      const response = await axios.get('https://pixabay.com/api/?key=34573560-b4b29946062bf53b893e1ec40');
      for(let i = 0; i < 12; i++){
        this.data.push({id: response.data.hits[i].id, webformatURL: response.data.hits[i].webformatURL})
      }
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  }

  async getImagesForSearchbar(input: string): Promise<void>{
    try {
      console.log(input, 'input')
      this.data = []
      const response = await axios.get(`https://pixabay.com/api/?key=34573560-b4b29946062bf53b893e1ec40&q=${input}`);
      for(let i = 0; i < response.data.hits.length; i++){
        this.data.push({id: response.data.hits[i].id, webformatURL: response.data.hits[i].webformatURL})
      }
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  }
}

export interface Data {
  id: number;
  webformatURL: string;
}
