import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Cards } from './models/cards.model';
import { Comments} from './models/comments';

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private card: Cards = { 
    id: "",
    title: "",
    category:"",
    shortDescription: "",
    description: "",
    publishedAt: "",
    image:"",
    comments:""
  };
  private url = "https://private-c3edb-postsmock.apiary-mock.com/posts"; // URL to web api

  // comments
  private comment: Comments = {
    id: '',
    comment: '',
    author: ''
  }

  constructor(private http: HttpClient) {}

  //Posts Services
  public getPosts(): Observable<Cards> {
    return this.http.get<Cards>(this.url);
  }
   public getPostsById(id:any): Observable<Cards> {
    return this.http.get<Cards>(this.url +"/"+id);
  }
  public createPosts(cards: Cards): Observable<Comment> {
    return this.http.post<Comment>(this.url, cards);
  }
  public deletePostsById(id:any): Observable<Cards> {
    return this.http.delete<Cards>(this.url +"/"+id);
  }
  public editPostsById(cards:Cards,id:any): Observable<Cards> {
    return this.http.put<Cards>(this.url +"/"+id, cards);
  }
  public getCategories(): Observable<Cards> {
    return this.http.get<Cards>(this.url +"/"+"categories");
  }
  
  //Comments Services
  public createComment(comment: Comment, id: string): Observable<Comment> {
    return this.http.post<Comment>(this.url +"/"+id, comment);
  }

  public getCommentsById(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url +"/"+id);
  }
  
  public postCommentsById(comment: Comment, id: string): Observable<Comment[]> {
    return this.http.put<any>(this.url +"/"+id, comment);
  }


}