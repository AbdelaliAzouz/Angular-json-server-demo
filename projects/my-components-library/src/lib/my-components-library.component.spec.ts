import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsLibraryComponent } from './my-components-library.component';

describe('MyComponentsLibraryComponent', () => {
  let component: MyComponentsLibraryComponent;
  let fixture: ComponentFixture<MyComponentsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentsLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
