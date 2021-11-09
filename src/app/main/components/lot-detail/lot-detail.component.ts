import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Lot } from 'src/app/shared/interfaces';
import { LotService } from 'src/app/shared/services/lot.service';

@Component({
  selector: 'app-lot-detail',
  templateUrl: './lot-detail.component.html',
  styleUrls: ['./lot-detail.component.scss']
})
export class LotDetailComponent implements OnInit {

  lot: Lot | undefined;

  constructor(private route: ActivatedRoute, private lotService: LotService, private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.lotService.getAll().subscribe(lot => { 
      
    })
    console.log(id)
  }

  goBack() {
    this.location.back()
  }
}
