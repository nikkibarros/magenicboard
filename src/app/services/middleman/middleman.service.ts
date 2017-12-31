import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class MiddlemanService {
  private toggleBoardPopupSubject: Subject<boolean> = new Subject<boolean>();
  private toggleNewBoardSubject: Subject<boolean> = new Subject<boolean>();
  private refreshBoardListSubject: Subject<boolean> = new Subject<boolean>();

  public toggleBoardPopup$ = this.toggleBoardPopupSubject.asObservable();
  public toggleNewBoard$ = this.toggleNewBoardSubject.asObservable();
  public refreshBoardList$ = this.refreshBoardListSubject.asObservable();

  constructor() { }

  toggleBoardPopup(): void {
    this.toggleBoardPopupSubject.next();
  }

  toggleNewBoard(): void {
    this.toggleNewBoardSubject.next();
  }

  refreshBoardList(): void {
    this.refreshBoardListSubject.next();
  }
}
