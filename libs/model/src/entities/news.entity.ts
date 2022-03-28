import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    BaseEntity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity('news')
@ObjectType()

export class News extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: number;

    @Column({ type: 'varchar', length: 250, nullable: true })
    @Index()
    @Field(() => String)
    name: string;

    @Column({ type: 'varchar', length: 30, nullable: true })
    @Index()
    @Field(() => String)
    status: string;

    @CreateDateColumn({ name: 'created_at', nullable: true })
    @Field(() => Date)
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', nullable: true })
    @Field(() => Date)
    updatedAt: Date;
  
    @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
    deletedAt?: Date;
}