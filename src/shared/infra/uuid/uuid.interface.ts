export interface IUUIDService {
  generate(): string;
  validate(v: string): boolean;
}
