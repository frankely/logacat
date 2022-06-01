export class ErrorCode {
  public static readonly Unauthenticated = 'Unauthenticated'
  public static readonly NotFound = 'NotFound'
  public static readonly AsyncError = 'AsyncError'
  public static readonly UnknownError = 'UnknownError'
  public static readonly RecordAlreadyExists = 'RecordAlreadyExists'
}

export type ErrorModel = {
  /**
   * Unique error code which identifies the error.
   */
  code: string
  /**
   * Status code of the error.
   */
  status: number
  /**
   * Any additional data that is required for translation.
   */
  metaData?: any
}

export class ErrorException extends Error {
  public status: number = 500
  public metaData: any = null
  constructor(code: string = ErrorCode.UnknownError, metaData: any = null) {
    super(code)
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = code
    this.status = 500
    this.metaData = metaData
    switch (code) {
      case ErrorCode.Unauthenticated:
        this.status = 401
        break
      case ErrorCode.RecordAlreadyExists:
        this.status = 409
        break
      case ErrorCode.AsyncError:
        this.status = 400
        break
      case ErrorCode.NotFound:
        this.status = 404
        break
      default:
        this.status = 500
        break
    }
  }
}
