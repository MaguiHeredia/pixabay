import { Component, Input } from '@angular/core';
import { Data, ConnectApiService} from '../../service/connect-api.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() images: Data[] = [];
  constructor(private ConnectApiService: ConnectApiService) {}
  saveImage(url: string) : void {
    this.ConnectApiService.changeFrontPage(url)
  }
}
