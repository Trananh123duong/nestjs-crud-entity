import { Module } from '@nestjs/common';
import { Chapter } from './chapter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
})
export class ChapterModule {}
