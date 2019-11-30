import { ROUTE_TYPE } from './enums';

export const utils = {
  getRoutePrefix(
    requestType: ROUTE_TYPE,
    endPointName: string,
    apiVersion: number = 1
  ): string {
    if (requestType === ROUTE_TYPE.private) {
      return `/api/v${apiVersion}/${endPointName}`;
    } else if (requestType === ROUTE_TYPE.public) {
      return `/api/public/${endPointName}`;
    } else {
      return `/${endPointName}`;
    }
  }
};
