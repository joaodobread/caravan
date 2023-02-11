export interface IListAllAccountsUseCase {
  execute(
    input: IListAllAccountsUseCase.Input,
  ): Promise<IListAllAccountsUseCase.Output>;
}

export namespace IListAllAccountsUseCase {
  export type Input = {
    skip?: number;
    take?: number;
  };

  type Result = {
    id: string;
    email: string;
    createdAt: Date;
  };

  export type Output = { rows: Result[]; count: number };
}
