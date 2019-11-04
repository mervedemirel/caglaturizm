import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-buttonhizmet',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonHizmetComponent implements OnInit {
  @Input() text;
  @Input() destination;

  constructor() { }

  ngOnInit() {
  }

}
