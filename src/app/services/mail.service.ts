import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) {
  }

  sendMail(mailObject) {
    const sendMailObject = {
      toEmail: undefined,
      mailBody: undefined
    };
    sendMailObject.toEmail = 'vogaart@gmail.com';
    sendMailObject.mailBody = `<b>Ad:</b> ${mailObject.ad} <br>
                               <b>Soyad:</b> ${mailObject.soyad} <br>
                               <b>E-Mail:</b> ${mailObject.email} <br>
                               <b>Konu:</b> ${mailObject.konu} <br>
                               <b>Mesaj:</b> ${mailObject.mesaj}`;
    return this.http.post('https://mailer.sehatekgis.com/contact', sendMailObject);
  }

  sendRawMail(mailObject) {
    const sendMailObject = {
      toEmail: undefined,
      mailBody: undefined
    };
    sendMailObject.toEmail = 'balcimustafa1@gmail.com';
    sendMailObject.mailBody = mailObject;
    return this.http.post('https://mailer.sehatekgis.com/contact', sendMailObject);
  }
}
