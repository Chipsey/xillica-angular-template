import { NgStyle, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Nft } from 'src/app/models/nft';

@Component({
  selector: 'app-duel-card',
  templateUrl: './duel-card.component.html',
  styleUrls: ['./duel-card.component.scss'],
  standalone: true,
  imports: [NgStyle, CurrencyPipe],
})
export class DuelCardComponent {
  @Input() nft: Nft = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
