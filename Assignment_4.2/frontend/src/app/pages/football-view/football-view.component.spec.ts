import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballViewComponent } from './football-view.component';

describe('FootballViewComponent', () => {
  let component: FootballViewComponent;
  let fixture: ComponentFixture<FootballViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
