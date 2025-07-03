import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { CountrySetTheme } from '../../store/country.actions';
import { selectCountryUiTheme } from '../../store/country.selectors';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent implements OnInit {
  theme$: Observable<'light' | 'dark'>;
  isBrowser: boolean;

  constructor(
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.theme$ = this.store.select(selectCountryUiTheme);
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.theme$.subscribe((theme) => {
        document.body.setAttribute('data-theme', theme);
      });
    }
  }

  toggleTheme() {
    if (this.isBrowser) {
      this.theme$.pipe(take(1)).subscribe((currentTheme) => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.store.dispatch(CountrySetTheme({ uiTheme: newTheme }));
      });
    }
  }
}
