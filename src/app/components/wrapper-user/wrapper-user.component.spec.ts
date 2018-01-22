import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperUserComponent } from './wrapper-user.component';

describe('WrapperUserComponent', () => {
  let component: WrapperUserComponent;
  let fixture: ComponentFixture<WrapperUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
