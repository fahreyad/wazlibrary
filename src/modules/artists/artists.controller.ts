import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist-dto';
import { UpdateArtistDto } from './dto/update-artist-dto';
import { IArtist } from './artist.interface';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  findAll(): Promise<IArtist[]> {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<IArtist> {
    return this.artistsService.findOne(id);
  }

  @Post()
  create(@Body() createArtistDto: CreateArtistDto): Promise<IArtist> {
    return this.artistsService.create(createArtistDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateArtistDto: UpdateArtistDto,
  ): Promise<IArtist> {
    return this.artistsService.update(id, updateArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.artistsService.remove(id);
  }
}
