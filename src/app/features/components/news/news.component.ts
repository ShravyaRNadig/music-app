import { Component } from '@angular/core';
import { news } from 'src/app/core/services/enum/genral-enum';

interface Student {  
  title: String;  
  data: String;  
}  

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  constructor() { }

  ngOnInit(): void {}
  news: Student[] = news;  
 
}
