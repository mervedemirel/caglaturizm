import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MailService} from '../../../../services/mail.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  contactForm: FormGroup;
  sended = false;

  constructor(private fb: FormBuilder, private mail: MailService) {
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      ad: [''],
      soyad: [''],
      email: [''],
      konu: [''],
      mesaj: ['']
    });
  }

  formSubmit() {
    console.log(this.contactForm.value);
    this.mail.sendMail(this.contactForm.value).subscribe(value => {
      // @ts-ignore
      if (value.message === 'success') {
        this.sended = true;
      }
    });
    this.contactForm.reset();
  }

}
