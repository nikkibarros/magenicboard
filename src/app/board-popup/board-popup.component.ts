import { Board } from './../models/board';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { BoardsService } from './../services/boards/boards.service';
import { MiddlemanService } from './../services/middleman/middleman.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-board-popup',
  templateUrl: './board-popup.component.html',
  styleUrls: ['./board-popup.component.css']
})
export class BoardPopupComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  boards: Board[];
  errorMessage: string;
  showThis = false;

  constructor(private middlemanService: MiddlemanService, public boardsService: BoardsService) { }

  ngOnInit() {
    this.middlemanService.toggleBoardPopup$.takeUntil(this.destroyed$).subscribe(
      toggleBoardPopup => this.toggleBoardPopup()
    );

    this.middlemanService.refreshBoardList$.takeUntil(this.destroyed$).subscribe(
      refreshed => this.processNewBoard()
    );

    this.getBoards();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  toggleBoardPopup(): void {
    this.showThis = !this.showThis;
  }

  blurBoardPopup(): void {
    this.showThis = false;
    console.log('board popup lost focus');
  }

  getBoards(): void {
    this.boardsService.get().subscribe(values => {
      this.boards = values;
    }, error => this.errorMessage = error);
  }

  processNewBoard(): void {
    this.getBoards();
    this.toggleBoardPopup();
  }

  addNewBoard(): void {
    this.middlemanService.toggleNewBoard();
  }
}
