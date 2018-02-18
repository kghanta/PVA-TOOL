import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBarHorizantalchartComponent } from './multi-bar-horizantalchart.component';

describe('MultiBarHorizantalchartComponent', () => {
  let component: MultiBarHorizantalchartComponent;
  let fixture: ComponentFixture<MultiBarHorizantalchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiBarHorizantalchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBarHorizantalchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
