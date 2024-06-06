import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';
import { IArtist } from './artist.interface';
import { CreateArtistDto } from './dto/create-artist-dto';
import { UpdateArtistDto } from './dto/update-artist-dto';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist)
    private artistRepository: Repository<Artist>,
  ) {}

  findAll(): Promise<IArtist[]> {
    return this.artistRepository.find();
  }

  findOne(id: number): Promise<IArtist> {
    return this.artistRepository.findOne({ where: { id } });
  }

  async create(createArtistDto: CreateArtistDto): Promise<IArtist> {
    const artist = this.artistRepository.create(createArtistDto);
    return this.artistRepository.save(artist);
  }

  async update(id: number, updateArtistDto: UpdateArtistDto): Promise<IArtist> {
    await this.artistRepository.update(id, updateArtistDto);
    return this.artistRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.artistRepository.delete(id);
  }
}
