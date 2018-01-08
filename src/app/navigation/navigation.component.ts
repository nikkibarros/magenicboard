import { MiddlemanService } from './../services/middleman/middleman.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private middlemanService: MiddlemanService) { }

  ngOnInit() {
  }

  toggleBoardPopup(): void {
    this.middlemanService.toggleBoardPopup();
  }
}
