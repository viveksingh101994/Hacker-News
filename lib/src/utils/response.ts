export class Response {
  public static UnAuthorized(): any {
    return this.createNewObj(ResponseMessage.UnAuthorized);
  }
  public static ServerError(): any {
    return this.createNewObj(ResponseMessage.ServerError);
  }
  public static Success(): any {
    return this.createNewObj(ResponseMessage.Success);
  }
  public static NoContent(): any {
    return this.createNewObj(ResponseMessage.NoContent);
  }
  public static Created(): any {
    return this.createNewObj(ResponseMessage.Created);
  }
  public static BadRequest(): any {
    return this.createNewObj(ResponseMessage.BadRequest);
  }
  private static createNewObj(resType: object) {
    return Object.assign({}, resType);
  }
}

const ResponseMessage = {
  UnAuthorized: {
    status: 403,
    message: {
      type: 'invalid_request_error',
      message: 'Not authorized'
    }
  },
  ServerError: {
    status: 500,
    body: {
      type: 'api_error',
      message: 'Internal server error'
    }
  },
  Success: {
    status: 200,
    body: {}
  },
  NoContent: {
    status: 204,
    body: 'No Content'
  },
  Created: {
    status: 201,
    body: {}
  },
  BadRequest: {
    status: 400,
    body: {}
  }
};
