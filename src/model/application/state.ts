/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */

import { Apiresponse } from "../client/response";

export namespace State {
  export interface App {
    request: any;
    response: any;
    current: number;
    selectedKey: string;
    openKey?: string;
    pageTitle: string;
    record: any;
    page?: any;
    pageSize?: any;
    searchTerm?: string;
    users?: Array<Apiresponse.Users>
  }
}
