import { Chapter } from 'src/chapter/chapter.entity';
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
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Story, (story) => story.comments)
  @JoinColumn({ name: 'story_id' })
  story: Story;

  @Column('text')
  content: string;

  @Column()
  created_at: Date;
}
