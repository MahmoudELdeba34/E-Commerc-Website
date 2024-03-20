import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDetalisComponent } from './category-detalis.component';

describe('CategoryDetalisComponent', () => {
  let component: CategoryDetalisComponent;
  let fixture: ComponentFixture<CategoryDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryDetalisComponent]
    });
    fixture = TestBed.createComponent(CategoryDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
