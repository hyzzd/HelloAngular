import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonfoundComponent } from './nonfound.component';

describe('NonfoundComponent', () => {
  let component: NonfoundComponent;
  let fixture: ComponentFixture<NonfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
