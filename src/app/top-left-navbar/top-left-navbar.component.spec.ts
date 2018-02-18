import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftNavbarComponent } from './top-left-navbar.component';

describe('TopNavbarComponent', () => {
  let component: TopLeftNavbarComponent;
  let fixture: ComponentFixture<TopLeftNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLeftNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeftNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
