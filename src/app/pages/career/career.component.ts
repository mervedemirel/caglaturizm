import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(public title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Çağla Turizm | Kariyer');
    this.meta.addTag({name: 'description', content: 'Biz Bir Aileyiz.Sende Ailemize Katılıp,Bizimle Çalışmak İster Misin?'});
  }

}
