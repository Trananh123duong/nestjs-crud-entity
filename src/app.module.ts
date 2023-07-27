import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './response.interceptor';
import { Story } from './story/story.entity';
import { Rating } from './rating/rating.entity';
import { Genre } from './genre/genre.entity';
import { Favorite } from './favorite/favorite.entity';
import { Comment } from './comment/comment.entity';
import { Chapter } from './chapter/chapter.entity';
import { StoryModule } from './story/story.module';
import { RatingModule } from './rating/rating.module';
import { GenreModule } from './genre/genre.module';
import { FavoriteModule } from './favorite/favorite.module';
import { CommentModule } from './comment/comment.module';
import { ChapterModule } from './chapter/chapter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'ohayo',
      password: 'ohayo',
      database: 'ohayo_community',
      entities: [User, Story, Rating, Genre, Favorite, Comment, Chapter],
      synchronize: true,
    }),
    UserModule,
    StoryModule,
    RatingModule,
    GenreModule,
    FavoriteModule,
    CommentModule,
    ChapterModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
