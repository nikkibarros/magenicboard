import { Subject } from 'rxjs/Subject';
import { MiddlemanService } from './../services/middleman/middleman.service';
import { BoardsService } from './../services/boards/boards.service';
import { Board } from './../models/board';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private destroyed$ = new Subject();
  board: Board = new Board('', '');
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private middlemanService: MiddlemanService,
    private boardsService: BoardsService) {
  }

  ngOnInit() {
    this.getBoard();

    this.middlemanService.goToBoard$.takeUntil(this.destroyed$).subscribe(
      goToBoard => this.getBoard()
    );
  }

  getBoard(): void {
    const path = '/' + this.route.snapshot.paramMap.get('path');
    this.boardsService.get().subscribe(values => {
      this.board = values.find(b => b.path === path);
    }, error => this.errorMessage = error);
  }
}
