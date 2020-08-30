import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KabinfoComponent } from './kabinfo.component';

describe('KabinfoComponent', () => {
  let component: KabinfoComponent;
  let fixture: ComponentFixture<KabinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KabinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KabinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
