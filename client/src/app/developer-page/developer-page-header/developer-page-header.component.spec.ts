import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperPageHeaderComponent } from './developer-page-header.component';

describe('DeveloperPageHeaderComponent', () => {
  let component: DeveloperPageHeaderComponent;
  let fixture: ComponentFixture<DeveloperPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperPageHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
