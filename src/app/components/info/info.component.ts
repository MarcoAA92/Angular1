import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../app.service';
import { FormControl,FormBuilder, FormGroup } from "@angular/forms";



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 id:any;
 cards:any=[];
 comments:any=[];
 form: FormGroup;


 backgroundHeader= {
  "background-position": "center center",
  "background-size": "cover",
  "box-shadow": "0 0 0 1000px rgb(0 0 0 / 20%) inset",
  "transition": "all 350ms ease-in-out",
  "height": "100%",
  "color":"white",
}
  // Inject HttpClient into your component or service.
  constructor(private route: ActivatedRoute, private apiservice: ApiService) {
    console.log("info", route.snapshot.params['id'])
    this.id = route.snapshot.params['id'];
    
    //Form
    this.form = new FormGroup({
      author: new FormControl(''),
      comment: new FormControl(''),
    });
  }

  
  ngOnInit(){
    this.apiservice.getPostsById(this.id).subscribe(data => {this.cards = data
      console.log("data getPostsByID", data); 
    });
    this.apiservice.getCommentsById(this.id).subscribe(data => {this.comments = [data]
      console.log("data getCommentsByID", data); 
    });
  }

  submitForm() {
    var forma: any = new FormData();
    forma.append("author", this.form.get("author")?.value);
    forma.append("comment", this.form.get('comment')?.value);
    var commentData = this.form.value;
    console.log(this.form.value)
    this.apiservice.postCommentsById(commentData, this.id).subscribe(comment => {
     commentData = comment;
      console.log("this comments", commentData); 
    });
  }
}
