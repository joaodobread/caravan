import { BaseMapping } from '@caravan/infra/typeorm/mapping/base.mapping';
import { Column, Entity, Index } from 'typeorm';

@Index('pk__accounts', ['id'], { unique: true })
@Index('idx__part__uq__accounts_email', ['email'], { unique: true })
@Index('idx__uq__accounts_email', ['deletedAt', 'email'], { unique: true })
@Entity('accounts', {})
export class AccountMapping extends BaseMapping {
  @Column('character varying', { name: 'email', nullable: false, length: 300 })
  email: string;

  @Column('character varying', {
    name: 'password',
    nullable: false,
    length: 300,
  })
  password: string;
}
