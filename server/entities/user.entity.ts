import type { Relation } from 'typeorm'
import {
 BaseEntity,
 OneToMany,
 ManyToOne, Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar' })
  defaultPhoto: string

  @Column({ type: 'boolean', default: false })
  hasCustomPhoto: boolean

  @Index()
  @Column({ type: 'decimal', precision: 11, scale: 2, default: 0.00 })
  gold: number

  @Index()
  @Column({ type: 'decimal', precision: 11, scale: 2, default: 0.00 })
  silver: number

  @Index()
  @ManyToOne(() => UserEntity, user => user.id, { nullable: true })
  referral: Relation<UserEntity>

  @OneToMany(() => UserEntity, user => user.referral)
  referrals: Relation<UserEntity[]>

  @Index()
  @Column({ type: 'boolean', default: true })
  showSocial: boolean

  @Column({ type: 'decimal', precision: 8, scale: 2, default: 0.00 })
  donatesSum: number

  @Column({ type: 'decimal', precision: 8, scale: 2, default: 0.00 })
  donatesSumFull: number

  @Column({ type: 'decimal', precision: 8, scale: 2, default: 0.00 })
  donateThisDay: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
