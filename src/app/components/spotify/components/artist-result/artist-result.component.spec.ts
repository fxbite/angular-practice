import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistResultComponent } from './artist-result.component';

describe('ArtistResultComponent', () => {
  let component: ArtistResultComponent;
  let fixture: ComponentFixture<ArtistResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
