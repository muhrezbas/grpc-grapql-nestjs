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

@Entity('reporter')
@ObjectType()

export class Reporter extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 250, nullable: true })
    @Index()
    @Field(() => String)
    name: string;

    @Column({ type: 'int', name: 'topic_id'})
    @Index()
    @Field(() => Number)
    topicId: number;

    @Column({ type: 'varchar', length: 250, nullable: true })
    @Index()
    @Field(() => String)
    asal: string;
}