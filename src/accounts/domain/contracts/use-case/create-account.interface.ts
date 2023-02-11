export interface ICreateAccountUseCase {
  execute(
    input: ICreateAccountUseCase.Input,
  ): Promise<ICreateAccountUseCase.Output>;
}

export namespace ICreateAccountUseCase {
  export type Input = {
    email: string;
    password: string;
  };

  export type Output = {
    id: string;
    email: string;
    createdAt: Date;
  };
}
