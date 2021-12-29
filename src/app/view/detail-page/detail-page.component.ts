import { Component, OnInit } from '@angular/core';

import { Kundendaten } from '../../core/http/in-memory-data-service/in-memory-data-service';
import { StateService } from '../../core/state/state.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  kundendaten: Kundendaten = this.stateService.selectedKundendaten.value;

  constructor(private readonly stateService: StateService) { }

  ngOnInit(): void { }

}
