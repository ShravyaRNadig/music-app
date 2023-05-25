import { Component } from '@angular/core';
import { news,topHits,mostPopularNews } from 'src/app/core/services/enum/genral-enum';

interface GenralNews {  
  title: String;  
  data: String;  
}  

interface TopHits {
  hitSongs: String;
}

interface popularNews{
  popularNews:string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  constructor() { }

  ngOnInit(): void {}
  new: GenralNews[] = news;  
  popularNews: popularNews[] = mostPopularNews;
  hits: TopHits[] = topHits;
 
}
