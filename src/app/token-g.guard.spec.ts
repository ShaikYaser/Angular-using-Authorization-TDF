import { TestBed } from '@angular/core/testing';

import { TokenGGuard } from './token-g.guard';

describe('TokenGGuard', () => {
  let guard: TokenGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TokenGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
