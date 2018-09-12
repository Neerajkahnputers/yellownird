import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../Services/shared-service/app-component.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private sharedService: AppComponentService) { }
public photoUrl;
  ngOnInit() {
   // this.photoUrl = this.sharedService.photoURL();
  }

}
