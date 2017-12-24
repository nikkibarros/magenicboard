import { MiddlemanService } from './services/middleman/middleman.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardPopupComponent } from './board-popup/board-popup.component';
import { NewBoardComponent } from './new-board/new-board.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BoardListComponent,
    BoardPopupComponent,
    NewBoardComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [MiddlemanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
