import { IUUIDService } from '@caravan/shared/infra/uuid/uuid.interface';
import { Injectable } from '@nestjs/common';
import { isUUID } from 'class-validator';
import { randomUUID } from 'crypto';

@Injectable()
export class UUIDService implements IUUIDService {
  generate(): string {
    return randomUUID();
  }
  validate(v: string): boolean {
    return isUUID(v);
  }
}
