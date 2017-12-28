import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards: Board[] = [
    new Board('Board 1'),
    new Board('Board 2')
  ];

  constructor() { }

  ngOnInit() {
  }

}
