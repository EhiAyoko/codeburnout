import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-save-details-explore',
  templateUrl: './save-details-explore.page.html',
  styleUrls: ['./save-details-explore.page.scss'],
})
export class SaveDetailsExplorePage implements OnInit {

  
  brandsdetails: any = '';
  postId:any;
  brandsdetailsexp: any;
  constructor(private router: Router, private http: HttpClient,) { 
    const navigation = this.router.getCurrentNavigation();
		const state = navigation.extras.state as {
      item,
    };
    if(state!=undefined){
    this.brandsdetails =state.item;
    console.log(this.brandsdetails);
    }
    
  }
  ngOnInit() {
  }
  crazyEvent(val, value, postimg){
    console.log("vslueOfToggle",val.detail.checked)
    console.log("vslueOfObj",value);
    console.log("fff",postimg);
    let records: [];
    let obj = {
      records : [
        {
            id: value.id,
            fields: {
              Save: val.detail.checked,
              Name: this.brandsdetails.fields.Name,
              ActivityCategory: this.brandsdetails.fields.ActivityCategory,
              description: this.brandsdetails.fields.description,
              FeaturedPhoto:[
                {
                  url: postimg.url,
                }
              ],
              TypeOfActivity: this.brandsdetails.fields.TypeOfActivity,
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
  this.http.put<any>('https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities', body, { headers }).subscribe(data => {
      this.postId = data;
      console.log('this.postAPI', this.postId)
  });
}
createAuthorizationHeader(headers: HttpHeaders) {
  let _token = "keyhliJN6zZ2igddb"
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization', `Bearer ${_token}`);
  return headers;
}

}
