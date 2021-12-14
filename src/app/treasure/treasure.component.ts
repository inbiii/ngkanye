import { Component, OnInit } from '@angular/core';
import { TreasuryService } from '../treasury.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.css']
})
export class TreasureComponent implements OnInit {
  albums: Array<{ id: number, title: string, relDate: Date }> = [
    {
      "id": 1,
      "title": "The College Dropout",
      "relDate": new Date('2004-02-10')
    },
    {
      "id": 2,
      "title": "Late Registration",
      "relDate": new Date('2005-08-30')
    },
    {
      "id": 3,
      "title": "Graduation",
      "relDate": new Date('2007-09-11')
    },
    {
      "id": 4,
      "title": "808s & Heartbreak",
      "relDate": new Date('2008-11-24')
    },
    {
      "id": 5,
      "title": "My Beautiful Dark Twisted Fantasy",
      "relDate": new Date('2010-11-22')
    },
    {
      "id": 6,
      "title": "Yeezus",
      "relDate": new Date('2013-06-18')
    },
    {
      "id": 7,
      "title": "The Life of Pablo",
      "relDate": new Date('2016-02-14')
    },
    {
      "id": 8,
      "title": "Ye",
      "relDate": new Date('2018-06-01')
    },
    {
      "id": 9,
      "title": "Jesus Is King",
      "relDate": new Date('2019-10-25')
    },
    {
      "id": 10,
      "title": "Donda",
      "relDate": new Date('2021-08-29')
    }
  ];



  constructor(private treasService: TreasuryService) { }
  ngOnInit(): void {
    this.treasService.getUSD().subscribe(payload => {
      console.log(payload)
    })
  }

}
