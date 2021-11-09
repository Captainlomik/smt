import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Lot } from 'src/app/shared/interfaces';
import { LotService } from 'src/app/shared/services/lot.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  lots: Lot[] = [];
  searchStr = ""
  testId=1

  constructor(private lotService: LotService) { }

  ngOnInit(): void {
    this.lotService.getAll().subscribe((lot: any) => {
   
      this.lots = lot['lotList']
      console.log(...lot['lotList'])
      console.log(lot.lotList.name)
    })
  }

}
