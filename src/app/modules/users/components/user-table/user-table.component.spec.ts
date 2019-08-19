import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableComponent } from './user-table.component';
import { MatTableModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatIconModule, MatMenuModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ UserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});