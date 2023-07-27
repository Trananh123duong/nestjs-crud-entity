import { Story } from 'src/story/story.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Story, (story) => story.ratings)
  @JoinColumn({ name: 'story_id' })
  story: Story;

  @ManyToOne(() => User, (user) => user.ratings)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  rating: number;

  @Column('text', { nullable: true })
  comment: string;

  @Column()
  created_at: Date;
}
