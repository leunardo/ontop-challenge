import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMenuComponent implements OnInit {

  @Input() text!: string;
  @Input() iconPath!: string;
  @Input() color: string = 'secondary';
  @HostBinding('class.accent')
  get accentColor() {
    return this.color === 'accent';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
