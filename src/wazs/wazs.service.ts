import { Injectable } from '@nestjs/common';

@Injectable()
export class WazsService {
  private readonly wazs = [];
  create(waz): string[] {
    this.wazs.push(waz);
    return this.wazs;
  }
  findAll(): string[] {
    return this.wazs;
  }
}
