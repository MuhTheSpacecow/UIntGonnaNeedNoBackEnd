import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Kundendaten } from '../../core/http/in-memory-data-service/in-memory-data-service';
import { StateService } from '../../core/state/state.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  kundendaten: Kundendaten[] = [];
  selectedKundendaten = this.stateService.selectedKundendaten;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly stateService: StateService
  ) {
    this.httpClient.get<Kundendaten[]>('api/kundendaten').subscribe(kundendaten => {
      this.kundendaten = kundendaten;
    });
  }

}
