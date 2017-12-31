import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BoardListComponent },
  { path: 'b/:path', component: BoardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
