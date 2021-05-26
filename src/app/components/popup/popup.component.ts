import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { dialogInterfase } from '../../models/dialog';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../app.service';
import { ActivatedRoute, Router} from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  // id:String;
  isAddMode:Boolean;
  dialogdata:any = {};
  cards:any=[];
  category:any=[];

  constructor(public dialogRef: MatDialogRef<PopupComponent>,@ Inject(MAT_DIALOG_DATA) public data: any, private apiservice: ApiService, private router: Router,private route: ActivatedRoute, ) {
    this.dialogdata = new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl('')
    });
    // console.log("info", route.snapshot.params['id'])
    // this.data.id = route.snapshot.params['id'];
    this.isAddMode = !this.data.id;
    console.log("this admode", this.isAddMode,"id", this.data.id)
  }

  closeDialog(){
    this.dialogRef.close();  
  }

  ngOnInit() {
    if (!this.isAddMode) {
      this.apiservice.getCategories().subscribe(category => {
        this.category= category;
        this.dialogdata.patchValue({category: this.category.category});
      });
    
      this.apiservice.getPostsById(this.data.id).subscribe(data => {this.dialogdata.patchValue(data)
        console.log("data getPostsByID on Edit", data); 
      });
    }
  }

  saveDialog(){
    if (this.isAddMode) {
      this.createPost();
    } else {
      console.log("uodate ID", this.data.id)
        this.updatePost(this.data.id);
    }
  }

  createPost(){
    var forma: any = new FormData();
    forma.append("title", this.dialogdata.get("title")?.value);
    forma.append("description", this.dialogdata.get('description')?.value);
    forma.append("category", this.dialogdata.get('category')?.value);
    forma.append("image", this.dialogdata.get('image')?.value);
    var createData = this.dialogdata.value;
    console.log(this.dialogdata.value)
    this.apiservice.createPosts(createData).subscribe(data => {this.cards = data
      console.log("data created", data); 
      this.closeDialog();
    });
  }

  updatePost(id:any) {
    console.log('datos a editar');
    console.log("forms value para edit", this.dialogdata.value);
    this.apiservice.editPostsById(this.dialogdata.value,id);
    this.closeDialog();
  }

}
