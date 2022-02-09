import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBadgeComponent implements OnInit {

  @Input() status!: { value: string, name: string };

  @HostBinding('class.active')
  get classActive() {
    return this.status.value === 'active';
  }

  @HostBinding('class.pending')
  get classPending() {
    return this.status.value === 'pending';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
