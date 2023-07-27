import { Module } from '@nestjs/common';
import { Rating } from './rating.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Rating])],
})
export class RatingModule {}
