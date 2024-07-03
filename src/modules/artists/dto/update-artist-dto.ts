import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateArtistDto {
  @IsString()
  @IsNotEmpty()
  readonly name?: string;

  readonly bio?: string;
}
