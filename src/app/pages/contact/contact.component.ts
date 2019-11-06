import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Özcandan Seyahat | İletişim');
    this.meta.addTag({name: 'description', content: 'Fiyat Almak,Kalite,Konforlu,Hizmetlerimizden yararlanmak için Bize Ulaşabilirsiniz'});
  }

}
