import { Board } from './../../models/board';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class BoardsService {
  // endpoint = 'https://my-json-server.typicode.com/nikkibarros/magenicboard/boards';
  endpoint = 'http://localhost:3000/boards';

  constructor(private http: HttpClient) { }

  get(): Observable<Board[]> {
    return this.http.get(this.endpoint)
      .catch(this.handleError);
  }

  create(board: Board): Observable<Board> {
    return this.http.post(this.endpoint, board)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(error);
  }
}
