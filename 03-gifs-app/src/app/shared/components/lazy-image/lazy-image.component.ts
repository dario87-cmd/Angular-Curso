import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  //RECIBE EL URL
  @Input()
  public url!: string

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false; //cuando la img cargar por primera vez

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required')
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;

    }, 1000);

  }


}
