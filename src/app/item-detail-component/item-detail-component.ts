
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail-component',
  imports: [],
  templateUrl: './item-detail-component.html',
  styleUrl: './item-detail-component.css'
})
export class ItemDetailComponent {
  @Input() elemento: any = null;
}

