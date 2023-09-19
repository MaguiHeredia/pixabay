import { Component } from '@angular/core';
import { Data, ConnectApiService } from './service/connect-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-tecnica-pixabay';
  images: Data[] = [];
  constructor(private ConnectApiService: ConnectApiService) {}

  ngOnInit(): void {
    this.getImages();
  }

  updateImages(newImages: any) {
    this.images = newImages;
  }

  async getImages() {
    try {
      await this.ConnectApiService.getImages();
      this.images = this.ConnectApiService.data;
    } catch (error) {
      console.error('Error al obtener las imagenes', error);
    }
  }

}
