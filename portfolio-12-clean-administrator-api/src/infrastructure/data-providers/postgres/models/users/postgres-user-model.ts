// Framework

// External
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Infrastructure
import { LENGTH } from '../../config';

// Domain
import { USER_STATUS_ENUM, User } from 'src/domain';
import { MAX_LENGTH } from 'class-validator';

@Entity({ name: 'users' })
export class PostgresUser extends BaseEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  _id: string;
  @Column({ type: 'varchar', length: LENGTH, nullable: false })
  firstName: string;
  @Column({ type: 'varchar', length: LENGTH, nullable: false })
  lastName: string;
  @Column({ type: 'int', nullable: false, unique: true })
  employeeNumber: number;
  @Column({ type: 'varchar', length: LENGTH, nullable: false, unique: true })
  email: string;
  @Column({ type: 'varchar', length: MAX_LENGTH, nullable: false })
  password: string;
  @Column({ type: 'varchar', length: LENGTH, nullable: false })
  position: string;
  @Column({ type: 'varchar', length: LENGTH, nullable: true })
  token: string;
  @Column({ type: 'timestamp', nullable: true })
  lastConnection?: Date;
  @Column({
    type: 'enum',
    enum: USER_STATUS_ENUM,
    default: USER_STATUS_ENUM.ACTIVE,
  })
  status: USER_STATUS_ENUM;
  @Column({ type: 'varchar', length: LENGTH, nullable: true })
  loginCodeVerification?: string;
  @Column({ type: 'timestamp', length: LENGTH, nullable: true })
  loginCodeExpiration?: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
