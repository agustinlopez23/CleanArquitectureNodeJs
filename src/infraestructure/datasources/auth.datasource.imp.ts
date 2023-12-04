import { AuthDatasource, CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain"

export class AuthDatasourceImpl implements AuthDatasource{
   async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const {name,email,password}=registerUserDto
        try {


            return new UserEntity(
                "1",name,email,password,["ADMIN_ROLE"],"image",
            );
        } catch (error) {
            if(error instanceof CustomError){
                throw error
            }
            throw CustomError.internalServer()
        }
    }

}