import { IsString, IsNumber, IsNotEmpty, IsOptional, Min, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class DestinoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}

export class CreateViagemDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  dataSaida: string;

  @IsNotEmpty()
  @IsString()
  dataChegada: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  valor: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DestinoDto)
  destinos?: DestinoDto[];
}

export class UpdateViagemDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  dataSaida?: string;

  @IsOptional()
  @IsString()
  dataChegada?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  valor?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DestinoDto)
  destinos?: DestinoDto[];
}

export class AddDestinoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}

export class RemoveDestinoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}