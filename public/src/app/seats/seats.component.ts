import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  seats = [];

  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getSeats();
  }

  getSeats(){
    this._httpService.getName('seat').subscribe(data=>{
      console.log("From seats: ", data['data']);
      this.seats = data['data'];
    })
  }
}
