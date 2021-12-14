import { Component } from '@angular/core';
import { KanyeService } from './kanye.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes: string[] = [];
  constructor(private yeService: KanyeService) { }

  ngOnInit(): void {
    const check: string[] = ['sex', 'fuck', 'porn', 'shit'];

    this.yeService.getYe().subscribe(payload => {
      if (check.some(el => payload.quote.toLowerCase().includes(el))) {
        console.log('I contained a no-no word so Im going again')
        return this.ngOnInit()
      };
      this.quotes.push(payload.quote);
    })


    this.yeService.getYe().subscribe(payload => {
      if (check.some(el => payload.quote.toLowerCase().includes(el))) {
        console.log('I contained a no-no word so Im going again')
        return this.ngOnInit()
      };
      this.quotes.push(payload.quote);

    })


  }
}
