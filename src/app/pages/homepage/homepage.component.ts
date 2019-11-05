import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Özcandan Seyahat | Ana Sayfa');
    this.meta.addTag({name: 'description', content: 'Konforlu,Güvenli,Donanımlı Araçlarımızla Müşterilerimizin Daima Hizmetinizdeyiz'});
  }

}
