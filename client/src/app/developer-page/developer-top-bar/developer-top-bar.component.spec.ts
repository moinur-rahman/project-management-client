import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperTopBarComponent } from './developer-top-bar.component';

describe('DeveloperTopBarComponent', () => {
  let component: DeveloperTopBarComponent;
  let fixture: ComponentFixture<DeveloperTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
