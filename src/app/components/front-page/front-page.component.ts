import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { ConnectApiService } from '../../service/connect-api.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements AfterViewInit {
  image: string = '';
  imageWidth: number = 0;
  imageHeight: number = 0;

  @ViewChild('imageContainer') imageContainer!: ElementRef;

  constructor(private ConnectApiService: ConnectApiService, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.getImage();
    this.calculateImageDimensions();
  }

  ngOnInit(): void {
    this.ConnectApiService.frontImage.subscribe((valor: string) => {
      this.image = valor; 
    });
  }

  calculateImageDimensions() {
    const container = this.imageContainer.nativeElement;
    this.imageWidth = container.offsetWidth;
    this.imageHeight = container.offsetHeight;

    this.cdRef.detectChanges();
  }

  async getImage() {
    try {
      await this.ConnectApiService.getFrontPage();
    } catch (error) {
      console.error('Error al obtener la imagen', error);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.calculateImageDimensions();
  }
}
