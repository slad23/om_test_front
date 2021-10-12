import { finalize } from "rxjs/operators";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SpinnerService } from "src/app/shared/components/spinner/spinner.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(req).pipe(
            finalize(() => this.spinnerService.hide())
        );
    }

}