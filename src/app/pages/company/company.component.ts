import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(public title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Çağla Turizm | Kurumsal');
    this.meta.addTag({name: 'description', content: 'Teknolojik Değişimlere Açık,Modern,Yenilik Hizmette Temel Vizyonumuzdur.'});
  }

}
