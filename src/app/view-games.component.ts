import { Component } from '@angular/core';
import { Game } from './Game';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css']
})

export class Games{
  games: Game[] = [];
  myDate:Date;
  environmentName = 'production';
  URI = `/api/games/`; 
  constructor(private http: HttpClient ) {    
    this.myDate = new Date();
    this.http.get<any[]>(this.URI)
    .subscribe(products => {
      this.games = products;
    });
  }
  }
