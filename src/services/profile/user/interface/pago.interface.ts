export interface Payment {

  readonly programToken : string;
  readonly destinationToken : string;
  readonly currency : string;
  readonly clientPaymentId : string;
  readonly amount : string;
  readonly purpose : string;

}