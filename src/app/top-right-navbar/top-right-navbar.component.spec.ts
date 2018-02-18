import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRightNavbarComponent } from './top-right-navbar.component';

describe('TopRightNavbarComponent', () => {
  let component: TopRightNavbarComponent;
  let fixture: ComponentFixture<TopRightNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRightNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRightNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
