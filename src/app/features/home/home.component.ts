import { Component } from '@angular/core';
import { homeOverview } from 'src/app/core/services/enum/genral-enum';

interface home{
  homeTitle: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }

  ngOnInit(): void {}
  home:home[]=homeOverview;
}
