import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// emits an error with specified value on subscription
const source = throwError('This is an error!');
// output: 'Error: This is an error!'
const subscribe = source
    .pipe(
        catchError((err) => {
            console.error('Handling error locally and rethrowing it...', err);
            return throwError(err);
        }),
    )
    .subscribe({
        next: val => console.log(val),
        complete: () => console.log('Complete!'),
        error: val => console.log(`Error: ${val}`),
    });
