import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSidenavBarComponent } from './developer-sidenav-bar.component';

describe('DeveloperSidenavBarComponent', () => {
  let component: DeveloperSidenavBarComponent;
  let fixture: ComponentFixture<DeveloperSidenavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperSidenavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperSidenavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
