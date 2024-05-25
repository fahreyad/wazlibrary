import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('wazs')
export class WazsController {
  @Get()
  findAll(): string {
    return 'get all the wazs';
  }

  @Get(':id')
  findOne(): string {
    return 'get a waz by id';
  }

  @Post()
  create(): string {
    return 'Create a waz';
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
