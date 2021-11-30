export enum UserTypeEnum {
  FUNCIONARIO = 0,
  CLIENTE = 1,
}

export const stringToTypeEnum = (type: string): UserTypeEnum => {
  switch (type) {
    case "FUNCIONARIO":
      return UserTypeEnum.FUNCIONARIO;
    case "CLIENTE":
      return UserTypeEnum.CLIENTE;
    default:
      return UserTypeEnum.CLIENTE;
  }
};
