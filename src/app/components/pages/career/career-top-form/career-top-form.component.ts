import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MailService} from '../../../../services/mail.service';

@Component({
  selector: 'app-career-top-form',
  templateUrl: './career-top-form.component.html',
  styleUrls: ['./career-top-form.component.scss']
})
export class CareerTopFormComponent implements OnInit {
  careerForm: FormGroup;
  sended = false;
  gender;
  askerlik;

  teklifForm: FormGroup;
  teklifFormSended = false;

  constructor(private fb: FormBuilder, private mail: MailService) {
  }

  ngOnInit() {
    this.careerForm = this.fb.group({
      ad: [''],
      soyad: [''],
      email: [''],
      ehliyet: [''],
      telefon: [''],
      il: [''],
      ilce: [''],
      mesaj: ['']
    });

    this.teklifForm = this.fb.group({
      ad: [''],
      soyad: [''],
      email: [''],
      firmaUnvani: [''],
      calismaSaatleri: [''],
      guzergah: [''],
      adres: [''],
      mesaj: [''],
    });
  }

  formSubmit() {
    const rawHtml = `<b>Ad:</b> ${this.careerForm.value.ad} <br>
                     <b>Soyad:</b> ${this.careerForm.value.soyad} <br>
                     <b>Email:</b> ${this.careerForm.value.email} <br>
                     <b>Cinsiyet:</b> ${this.gender} <br>
                     <b>Ehliyet:</b> ${this.careerForm.value.ehliyet} <br>
                     <b>Askerlik:</b> ${this.askerlik} <br>
                     <b>Telefon:</b> ${this.careerForm.value.telefon} <br>
                     <b>İl:</b> ${this.careerForm.value.il} <br>
                     <b>İlçe:</b> ${this.careerForm.value.ilce} <br>
                     <b>Mesaj:</b> ${this.careerForm.value.mesaj} <br>
                     <b>Form:</b> Kariyer Formu`;
    this.mail.sendRawMail(rawHtml).subscribe(value => {
      // @ts-ignore
      if (value.message === 'success') {
        this.careerForm.reset();
        this.sended = true;
      }
    });
  }

  teklifFormSubmit() {
    const rawHtml = `<b>Ad:</b> ${this.teklifForm.value.ad} <br>
                     <b>Soyad:</b> ${this.teklifForm.value.soyad} <br>
                     <b>Email:</b> ${this.teklifForm.value.email} <br>
                     <b>Firma Ünvanı:</b> ${this.teklifForm.value.firmaUnvani} <br>
                     <b>Çalışma Saatleri:</b> ${this.teklifForm.value.calismaSaatleri} <br>
                     <b>Güzergah:</b> ${this.teklifForm.value.guzergah} <br>
                     <b>Adres:</b> ${this.teklifForm.value.adres} <br>
                     <b>Mesaj:</b> ${this.teklifForm.value.mesaj} <br>
                     <b>Form:</b> Teklif Formu`;
    this.mail.sendRawMail(rawHtml).subscribe(value => {
      // @ts-ignore
      if (value.message === 'success') {
        this.teklifForm.reset();
        this.teklifFormSended = true;
      }
    });
  }

  genderSelectionChange(event) {
    console.log(event.target.value);
    this.gender = event.target.value;
  }

  askerlikSelectionChange(event) {
    console.log(event.target.value);
    this.askerlik = event.target.value;
  }

}
