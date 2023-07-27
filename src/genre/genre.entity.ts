import { Story } from 'src/story/story.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // Nhiều-nhiều với truyện
  @ManyToMany(() => Story, (story) => story.genres)
  stories: Story[];
}
