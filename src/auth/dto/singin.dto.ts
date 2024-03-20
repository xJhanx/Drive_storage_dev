import { IsNotEmpty } from "class-validator";

export class SigInData {
    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    password : string;
}