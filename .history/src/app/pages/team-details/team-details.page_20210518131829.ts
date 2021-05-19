import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

  brandsdetails: any = '';
  constructor(private router: Router) { 
  }
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
		const state = navigation.extras.state as {
      post,
    };
    if(state!=undefined){
    this.brandsdetails =state.post;
    console.log(this.brandsdetails);
    }
  }
}