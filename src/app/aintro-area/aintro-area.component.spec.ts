import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIntroAreaComponent } from './aintro-area.component';

describe('AIntroAreaComponent', () => {
  let component: AIntroAreaComponent;
  let fixture: ComponentFixture<AIntroAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIntroAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIntroAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
