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
  showThis = false;

  constructor(private middlemanService: MiddlemanService) { }

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
}
