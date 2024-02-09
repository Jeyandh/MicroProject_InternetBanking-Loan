import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ToastrModule } from 'ngx-toastr';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AdminhomeComponent } from './adminhome.component';

describe('Admin Home Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminhomeComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatSnackBarModule,
        ToastrModule.forRoot(),
        MatGridListModule,
        MatCardModule
        
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  it('Admin Home Component Test', () => {
    const fixture = TestBed.createComponent(AdminhomeComponent);
    const adminhome = fixture.componentInstance;
    expect(adminhome).toBeTruthy();
  });

  it(`should have as title 'Admin Home Form Component'`, () => {
    const fixture = TestBed.createComponent(AdminhomeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Admin Home Component');
  });


});
