import { BoardsService } from './services/boards/boards.service';
import { MiddlemanService } from './services/middleman/middleman.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardPopupComponent } from './board-popup/board-popup.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { BoardComponent } from './board/board.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BoardListComponent,
    BoardPopupComponent,
    NewBoardComponent,
    BoardComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MiddlemanService,
    BoardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
