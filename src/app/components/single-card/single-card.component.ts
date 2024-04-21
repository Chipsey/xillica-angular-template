import { NgStyle, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Nft } from 'src/app/models/nft';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent {
  @Input() nft: Nft = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
