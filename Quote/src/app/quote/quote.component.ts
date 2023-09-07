import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{
  quote: any;
  author: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://api.api-ninjas.com/v1/quotes', {headers: new HttpHeaders({'X-Api-Key': '3KaiQjzB9Kk42i57SI3jdKtyI7tgVlWXJF9Vgeqs'})}).subscribe((data:any) => {
      this.quote = data[0].quote;
      this.author = data[0].author;
    })
  }
}
