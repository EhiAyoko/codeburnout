import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-saved-activities',
  templateUrl: './saved-activities.page.html',
  styleUrls: ['./saved-activities.page.scss'],
})
export class SavedActivitiesPage implements OnInit {
  public postsexpolore = [];
  public posts = [];
  public postsactivity = [];
  postId:any;
  constructor(public postsService:HttpService,private http: HttpClient,) {
    this.ngOnInit()
this.ionViewWillEnter()
   }

  ngOnInit() {
    this.postsService.getTeams().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts) 
  })

  this.postsService.getActivities().subscribe((posts) => {
    this.postsexpolore = posts;
})
  }

  ionViewWillEnter(){
    this.ngOnInit()
  }

crazyEvent(val,value){
  console.log("vslueOfToggle",val.detail.checked)
  console.log("vslueOfObj",value);
  let records: [];
  let obj = {
    records : [
      {
          id: value.id,
          fields: {
            Save: val.detail.checked
          }
      }
  ]
  } 
    console.log("records",obj)
  this.postapiaittable(obj)
}


postapiaittable(toggleValue) { 
  let headers = new HttpHeaders();
   headers = this.createAuthorizationHeader(headers);
  const body = toggleValue ;
  console.log('body',body)
  this.http.put<any>('https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities', body, { headers }).subscribe(data => {
      this.postId = data;
      console.log('this.postAPI', this.postId)
      this.ngOnInit()
  });
}
createAuthorizationHeader(headers: HttpHeaders) {
  let _token = "keyhliJN6zZ2igddb"
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization', `Bearer ${_token}`);
  return headers;
}

crazyEvent1(val,value){
  console.log("vslueOfToggle",val.detail.checked)
  console.log("vslueOfObj",value);
  let records: [];
  let obj = {
    records : [
      {
          id: value.id,
          fields: {
            Save: val.detail.checked
          }
      }
  ]
  } 
    console.log("records",obj)
  this.postapiaittable1(obj)
  
}

postapiaittable1(toggleValue) { 
  let headers = new HttpHeaders();
   headers = this.createAuthorizationHeader(headers);
  const body = toggleValue ;
  console.log('body',body)
  this.http.put<any>('https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities', body, { headers }).subscribe(data => {
      this.postId = data;
      console.log('this.postAPI', this.postId)
  });
}
createAuthorizationHeader1(headers: HttpHeaders) {
  let _token = "keyhliJN6zZ2igddb"
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization', `Bearer ${_token}`);
  return headers;
}
}