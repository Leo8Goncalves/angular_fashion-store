import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptionSectionComponent } from './product-description-section.component';

describe('ProductDescriptionSectionComponent', () => {
  let component: ProductDescriptionSectionComponent;
  let fixture: ComponentFixture<ProductDescriptionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDescriptionSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDescriptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
