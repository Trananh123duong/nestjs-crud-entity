import { Module } from '@nestjs/common';
import { Favorite } from './favorite.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite])],
})
export class FavoriteModule {}
