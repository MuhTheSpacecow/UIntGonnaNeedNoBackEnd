import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { InMemoryDataService } from '../../core/http/in-memory-data-service/in-memory-data-service';
import { StateService } from '../../core/state/state.service';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 }),
        MatButtonModule,
        MatRadioModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: StateService,
          useValue: {
            selectedKundendaten: new FormControl()
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
