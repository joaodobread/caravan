import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export class BaseMapping extends BaseEntity {
  @Column('uuid', {
    name: 'id',
    nullable: false,
    generated: 'uuid',
    unique: true,
    primary: true,
  })
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
    default: 'now()',
  })
  createdAt: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true,
    type: 'timestamp with time zone',
  })
  deletedAt: string | null;

  @DeleteDateColumn({
    name: 'updated_at',
    nullable: true,
    type: 'timestamp with time zone',
  })
  updatedAt: string | null;
}
