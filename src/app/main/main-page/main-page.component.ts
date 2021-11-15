import { Component, OnInit } from '@angular/core';
import { Lot } from 'src/app/shared/interfaces';
import { LotService } from 'src/app/shared/services/lot.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent implements OnInit {


  sortValue = [{ value: 'cheap', name: "Самое дешевое" }, { value: 'expendsive', name: "Самое дорогое" }, { value: 'new', name: "Новое" }]
  categoryValue = [{ value: 'coin', name: 'Монета', chek:false }, { value: 'receipt', name: 'Чек', chek:false }, { value: 'bona', name: 'Бона', chek:false }]
  lots: Lot[] = []
  searchStr = ""
  sortItem: any = ""
  checked: boolean = false


  constructor(private lotService: LotService) { }

  ngOnInit(): void {
    this.getData()
    this.checked = this.checked ? this.checked : false;
  }

  getData() {
    this.lotService.getAll().subscribe((lot: any) => {
      this.lots = lot

      switch (this.sortItem.value) {

        case 'cheap':
          this.lots = this.lots.sort((a, b) => {
            return b.price - a.price;
          })
          break;

        case 'expensive':
          this.lots = this.lots.sort((a, b) => {
            return a.price - b.price
          })
          break;

        case 'new':
          this.lots = this.lots.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
          })
          break;

      }

    })

  }

toToggle(item: any, item2:any){
  console.log(item)
}
}

