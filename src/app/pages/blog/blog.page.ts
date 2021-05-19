import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  public search = false ;
  filterTerm: string;
 public posts: Object[];
visible = false;
  itemsdeatail: any;
  constructor(public http:HttpService, private navCtrl: NavController, public router: Router) { }

  ngOnInit() {
    this.http.blogget().subscribe((post :any) => {
      this.posts = post;
      console.log(this.posts)
  },error => {
    console.log(error);
  })
}
  search1(){
    if (this.search == false) {
    this.search = true;
    }
    else {
    this.search = false;
    }
  }
  
  blogdetails(item){
     console.log(item)
this.itemsdeatail = item
let navigationExtras: NavigationExtras = {
  state: {
    item
  },
};
     this.navCtrl.navigateForward('blog-details', navigationExtras);
  }
}
