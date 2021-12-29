import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { StateService } from '../../core/state/state.service';
import { DetailPageComponent } from './detail-page.component';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPageComponent],
      imports: [
        MatButtonModule
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
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
