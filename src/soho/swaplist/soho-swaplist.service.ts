﻿import { Observable } from 'rxjs/Rx';

/**
 * Dynamic Soho SwapList Service contract.
 */
export abstract class SohoSwapListService {
    /**
     * Returns a list of <SohoSwapListOptions> data.
     */
    abstract getData(): Observable<SohoSwapListOptions>;
}
