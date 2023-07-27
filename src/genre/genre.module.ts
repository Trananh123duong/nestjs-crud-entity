import { Module } from '@nestjs/common';
import { Genre } from './genre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
})
export class GenreModule {}
