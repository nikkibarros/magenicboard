import { Board } from './../models/board';
import { BoardsService } from './../services/boards/boards.service';
import { MiddlemanService } from './../services/middleman/middleman.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css']
})
export class NewBoardComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  title: string;
  showThis = false;

  constructor(private middlemanService: MiddlemanService, public boardsService: BoardsService) { }

  ngOnInit() {
    this.middlemanService.toggleNewBoard$.takeUntil(this.destroyed$).subscribe(
      toggleNewBoard => this.toggleNewBoard()
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  toggleNewBoard(): void {
    this.showThis = !this.showThis;
  }

  close(): void {
    this.showThis = false;
  }

  create(): void {
    if (this.title !== '') {
      const board = new Board(this.title);

      this.boardsService.create(board)
        .subscribe(
          value => {
            this.middlemanService.refreshBoardList();
          }
        );

      this.title = '';
      this.toggleNewBoard();
    }
  }
}
