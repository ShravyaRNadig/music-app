import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizationPersonalizationComponent } from './categorization-personalization.component';

describe('CategorizationPersonalizationComponent', () => {
  let component: CategorizationPersonalizationComponent;
  let fixture: ComponentFixture<CategorizationPersonalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorizationPersonalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizationPersonalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
