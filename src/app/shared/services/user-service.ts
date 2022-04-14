import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<Array<string>> = new BehaviorSubject<
    Array<string>
  >([]);

  public addUser(user: string): void {
    this.users$.next([...this.users$.value, user]);
  }

  constructor() {}
}
