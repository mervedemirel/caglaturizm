import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(public title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Çağla Turizm | Hizmetlerimiz');
    this.meta.addTag({name: 'description', content: 'Personel,Öğrenci,Vip Taşımacılıkta Rahat,Güvenli,Kaliteli, Ulaşım Konforu Sağlamak.'});
  }

}
