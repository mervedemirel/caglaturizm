import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  constructor(public title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Çağla Turizm | Referanslar');
    this.meta.addTag({name: 'description', content: 'Hizmet Kalitemizden Memnun Kalıp Bizi Tercih eden referanslarımız.'});
  }

}
