import { Subject } from 'rxjs/Subject';
import { MiddlemanService } from './../services/middleman/middleman.service';
import { BoardsService } from './../services/boards/boards.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Board } from '../models/board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  errorMessage: string;
  boards: Board[];

  constructor(private middlemanService: MiddlemanService, public boardsService: BoardsService) { }

  ngOnInit() {
    this.middlemanService.refreshBoardList$.takeUntil(this.destroyed$).subscribe(
      refreshBoardList => this.getBoards()
    );

    this.getBoards();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getBoards(): void {
    this.boardsService.get().subscribe(values => {
      this.boards = values;
    }, error => this.errorMessage = error);
  }

  goToBoard(board: Board): void {
    this.middlemanService.goToBoard(board);
  }
}
