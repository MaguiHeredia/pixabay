import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ConnectApiService} from '../../service/connect-api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  name: string = '';
  alert: boolean = false;
@Input() images: any;
@Output() newImages: EventEmitter<any> = new EventEmitter<any>();
constructor(private ConnectApiService: ConnectApiService) {}

  async saveChanges(){
    try {
      if(this.name.length < 1){
        this.alert = true
      } else {
        this.alert = false
        await this.ConnectApiService.getImagesForSearchbar(this.name);
        this.images = this.ConnectApiService.data;
        this.newImages.emit(this.images);
      }
    } catch (error) {
      console.error('Error al obtener imágenes', error);
    }

  }

  async getImages() {
      this.images = {}
      this.newImages.emit(this.images);
      this.name = ''
  }
}
