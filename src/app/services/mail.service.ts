import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private sendMail = 'http://localhost:8080/mail-api-v1/sendDami';

  constructor(private http: HttpClient) {}

  postSendMail(): Observable<any> {
    return this.http.get<any>(this.sendMail);
  }
}
