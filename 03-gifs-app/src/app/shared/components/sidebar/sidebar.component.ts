import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  //llamar a mi servicio para poder listar lo que se escribe en la busqyeda del otro componente
  constructor(private gifsService: GifsService) { }


  get tags(): string[] {
    const tagsList = this.gifsService.tagHistory;
    return tagsList
  }

  searchText(tag: string): void {
    this.gifsService.searchTag(tag)
  }
}
