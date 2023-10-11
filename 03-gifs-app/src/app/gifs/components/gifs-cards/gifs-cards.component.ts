import { Component, Input, Output, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-cards',
  templateUrl: './gifs-cards.component.html',
  styleUrls: ['./gifs-cards.component.css']
})
export class GifsCardsComponent implements OnInit {

  @Input() gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Method not implemented.');
  }

}
