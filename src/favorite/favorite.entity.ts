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
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.favorites)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Story, (story) => story.favorites)
  @JoinColumn({ name: 'story_id' })
  story: Story;

  @Column({ type: 'integer' })
  chapter_id: number;

  @Column()
  created_at: Date;
}
