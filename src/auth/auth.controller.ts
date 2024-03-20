import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigInData } from './dto/singin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sigin')
  async sigin(@Body(new ValidationPipe()) data : SigInData){
    const isValid = await this.authService.accessToSystem(data);
    let response : ResponseInterface = {
      status  : "",
      message : "",
      dataResponse : {}
    };

    if(!isValid){
      response.status = "error";
      response.message = "El usuario o la contraseña son incorrectas, porfavor intentelo de nuevo";
      response.dataResponse = {}
    }

    if(isValid){
      response.status = "success";
      response.message = "Login exitoso";
      response.dataResponse = {
        token : "asdasdasdasdasd"
      }
    }

    return response;
  }
}
