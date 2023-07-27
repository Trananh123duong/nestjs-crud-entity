import { Chapter } from 'src/chapter/chapter.entity';
import { Comment } from 'src/comment/comment.entity';
import { Favorite } from 'src/favorite/favorite.entity';
import { Genre } from 'src/genre/genre.entity';
import { Rating } from 'src/rating/rating.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class Story {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  // Nhiều-nhiều với thể loại
  @ManyToMany(() => Genre, (genre) => genre.stories)
  @JoinTable({
    name: 'story_genre',
    joinColumn: {
      name: 'story_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'genre_id',
      referencedColumnName: 'id',
    },
  })
  genres: Genre[];

  @Column('text')
  description: string;

  @Column({ nullable: true })
  cover_image: string;

  @Column({ default: 0 })
  total_reads: number;

  @Column({ default: 0 })
  weekly_reads: number;

  @Column({ default: 0 })
  daily_reads: number;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  recommendations: number;

  // Một-nhiều với các chương truyện
  @OneToMany(() => Chapter, (chapter) => chapter.story)
  chapters: Chapter[];

  // Một-nhiều với đánh giá truyện
  @OneToMany(() => Rating, (rating) => rating.story)
  ratings: Rating[];

  @OneToMany(() => Favorite, (favorite) => favorite.story)
  favorites: Favorite[];

  @OneToMany(() => Comment, (comment) => comment.story)
  comments: Comment[];

  @Column()
  created_at: Date;

  @Column({ nullable: true })
  latest_update: Date;
}
