import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cards } from '../../models/cards.model';
import { ApiService } from "../../app.service";
// import {promise} from 'rxjs/add/operator/toPromise';
// import { catchError, retry } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { PopupComponent } from '../../components/popup/popup.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {

  title = 'angular1';
  imag='https://material.angular.io/assets/img/examples/shiba2.jpg';
  whites= "{'color': 'white'}";
  cards: any=[];
  filteredCategory= 'All';
  background= {
    "background-position": "center center",
    "background-size": "cover",
    "box-shadow": "0 0 0 1000px rgb(0 0 0 / 20%) inset",
    "transition": "all 350ms ease-in-out",
    "height": "100%",
    "color":"white",
    "z-index":"0"
  }


  backgroundImage= "{'background-image':'url(' + image + ')'}";
  

 // Inject HttpClient into your component or service.
  constructor(private apiservice: ApiService,
    public dialog: MatDialog,private router: Router) {}


 //Dialog Logic Add
  openDialog() {
    this.dialog.open(PopupComponent, {
      autoFocus :true,
      hasBackdrop:true,
      height:'auto',
      width:'auto',
      data: {}
    });
  }

  redirect(id:any) {
    this.router.navigate(['posts/', id]);
  }

   //Delete Post
  deletePost(event: MouseEvent,id:any){
    event.preventDefault();
    event.stopPropagation();
    this.apiservice.deletePostsById(id).subscribe(data => {this.cards = data
      console.log("post deleted"); 
    });
  }

   //Dialog Logic Edit
  editPost(event: MouseEvent, id:any){
    event.preventDefault();
    event.stopPropagation();
   
    this.dialog.open(PopupComponent, {
      autoFocus :true,
      hasBackdrop:true,
      height:'auto',
      width:'auto',
      data: {
        id:id
      }
    });  
  }

  ngOnInit() {
    this.apiservice.getPosts().subscribe(data => {this.cards = data
      console.log("data getPosts", this.cards); 
    });
  }
}