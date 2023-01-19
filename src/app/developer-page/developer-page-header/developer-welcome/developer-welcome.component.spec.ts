import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperWelcomeComponent } from './developer-welcome.component';

describe('DeveloperWelcomeComponent', () => {
  let component: DeveloperWelcomeComponent;
  let fixture: ComponentFixture<DeveloperWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
