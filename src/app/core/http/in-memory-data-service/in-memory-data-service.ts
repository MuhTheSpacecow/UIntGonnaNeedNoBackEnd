import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

export interface Kundendaten {
    titel?: string;
    vorname: string;
    nachname: string;
    geburtsdatum: string;
    strasse: string;
    hausnummer: string;
    plz: string;
    ort: string;
}

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return {};
    }

    get(requestInfo: RequestInfo): Observable<any> {
        console.log(requestInfo);

        switch (requestInfo.collectionName) {
            case 'kundendaten':
                const kundendaten: Kundendaten[] = [{
                    titel: '',
                    vorname: 'Klaus',
                    nachname: 'Störtebeker',
                    geburtsdatum: '01.01.1360',
                    strasse: 'Platz d. Deutschen Einheit',
                    hausnummer: '3',
                    plz: '20457',
                    ort: 'Hamburg'
                }, {
                    titel: 'Captain',
                    vorname: 'Jack',
                    nachname: 'Sparrow',
                    geburtsdatum: '01.01.1689',
                    strasse: 'Main Street',
                    hausnummer: '13',
                    plz: '0815',
                    ort: 'Tortuga'
                }];
                return this.createResponseOK(kundendaten, requestInfo);

            default:
                break;
        }
        return this.createResponseOK(undefined, requestInfo);
    }

    createResponseOK(body: any, requestInfo: RequestInfo): Observable<any> {
        return requestInfo.utils.createResponse$(() => {
            return {
                body: body,
                headers: requestInfo.headers,
                status: STATUS.OK
            }
        });
    }
}