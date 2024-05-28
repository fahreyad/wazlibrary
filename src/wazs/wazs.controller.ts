import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { WazsService } from './wazs.service';
import { CreateWazDTO } from './dtos/create-waz-dto';

@Controller('wazs')
export class WazsController {
  constructor(private wazsService: WazsService) {}
  @Get()
  findAll(): string[] {
    return this.wazsService.findAll();
  }

  @Get(':id')
  findOne(): string {
    return 'get a waz by id';
  }

  @Post()
  create(@Body() createWazDTO: CreateWazDTO): string[] {
    return this.wazsService.create(createWazDTO);
  }

  @Patch(':id')
  update(): string {
    return 'update the waz by id';
  }

  @Delete(':id')
  delete(): string {
    return 'delete  the waz by id';
  }
}
