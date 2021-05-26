import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BodyComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BodyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular1'`, () => {
    const fixture = TestBed.createComponent(BodyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BodyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular1 app is running!');
  });
});
