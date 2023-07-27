import { Story } from 'src/story/story.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  content: string;

  @Column()
  status: string;

  @ManyToOne(() => Story, (story) => story.chapters)
  @JoinColumn({ name: 'story_id' })
  story: Story;

  @Column()
  created_at: Date;
}
