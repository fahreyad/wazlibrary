import {
  IsArray,
  IsString,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
} from 'class-validator';

export class CreateWazDTO {
  @IsString()
  readonly title: string;
  @IsArray()
  @IsNotEmpty()
  readonly artist: string[];
  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: Date;
  @IsMilitaryTime()
  @IsNotEmpty()
  readonly Duration: Date;
}
