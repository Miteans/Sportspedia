import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KabaddiComponent } from './kabaddi.component';

describe('KabaddiComponent', () => {
  let component: KabaddiComponent;
  let fixture: ComponentFixture<KabaddiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KabaddiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KabaddiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
