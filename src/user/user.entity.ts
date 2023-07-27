import { Comment } from 'src/comment/comment.entity';
import { Favorite } from 'src/favorite/favorite.entity';
import { Rating } from 'src/rating/rating.entity';
import { Story } from 'src/story/story.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @OneToMany(() => Rating, (rating) => rating.story)
  ratings: Rating[];

  // Một-nhiều với các chương truyện
  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
