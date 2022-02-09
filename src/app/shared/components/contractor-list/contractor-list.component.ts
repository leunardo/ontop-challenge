import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContractorListComponent implements OnInit {

  contractorsList = [
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: 200,
      status: { value: 'active', name: 'active' }
    },
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: 200,
      status: { value: 'active', name: 'active' }
    },
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: 200,
      status: { value: 'pending', name: 'signature pending' }
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
