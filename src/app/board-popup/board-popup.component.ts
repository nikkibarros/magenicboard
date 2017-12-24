import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { MiddlemanService } from './../services/middleman/middleman.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-board-popup',
  templateUrl: './board-popup.component.html',
  styleUrls: ['./board-popup.component.css']
})
export class BoardPopupComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  showThis = false;

  constructor(private middlemanService: MiddlemanService) { }

  ngOnInit() {
    this.middlemanService.toggleBoardPopup$.takeUntil(this.destroyed$).subscribe(
      toggleBoardPopup => this.toggleBoardPopup()
    );
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

  addNewBoard(): void {
    this.middlemanService.toggleNewBoard();
  }
}
