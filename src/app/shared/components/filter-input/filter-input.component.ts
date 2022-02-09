import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterInputComponent implements OnInit {

  @Input() icon?: string;
  @Input() placeholder!: string;
  @Input() options?: string[];
  @Input() width?: number;

  @HostBinding('style.width')
  get styleWidth() {
    return this.width ? this.width + '%' : 'inherit';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
