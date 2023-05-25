import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkingComponent } from './social-networking.component';

describe('SocialNetworkingComponent', () => {
  let component: SocialNetworkingComponent;
  let fixture: ComponentFixture<SocialNetworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNetworkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
