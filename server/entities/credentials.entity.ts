import type { Relation } from 'typeorm'
import {
 BaseEntity,
 JoinColumn, ManyToOne,
  Column, Entity, Index, PrimaryGeneratedColumn,
} from 'typeorm'
import { IsEnum } from 'class-validator'
import { UserEntity } from '~~/server/entities/user.entity'

export enum CredentialType {
  CREDENTIAL_VK,
  CREDENTIAL_GOOGLE,
}

@Entity('credentials')
export class CredentialModal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'enum', enum: CredentialType })
  @IsEnum(CredentialType)
  type: CredentialType

  @Index()
  @Column({ type: 'bigint' })
  externalId: number

  @ManyToOne(() => UserEntity, user => user.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  user: Relation<UserEntity>
}
