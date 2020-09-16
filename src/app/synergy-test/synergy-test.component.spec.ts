import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynergyTestComponent } from './synergy-test.component';

describe('SynergyTestComponent', () => {
  let component: SynergyTestComponent;
  let fixture: ComponentFixture<SynergyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynergyTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynergyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
