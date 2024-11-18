import {
 BaseEntity, Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('errors')
export class ErrorEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  error: string

  @Column({ type: 'text', nullable: true })
  trace: string | null

  @Column({ type: 'varchar' })
  source: string
}
