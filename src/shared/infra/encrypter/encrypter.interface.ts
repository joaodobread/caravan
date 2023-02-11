export interface IEncrypterService {
  hash(
    input: IEncrypterService.HashInput,
  ): Promise<IEncrypterService.HashOutput>;
}

export namespace IEncrypterService {
  export type HashInput = {
    plain: string;
  };

  export type HashOutput = string;
}
