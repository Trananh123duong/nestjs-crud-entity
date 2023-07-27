import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getById(id: number): Promise<User> {
    const options: FindOneOptions<User> = { where: { id: id } };
    return this.userRepository.findOne(options);
  }

  async paginateAll(page: number, limit: number): Promise<User[]> {
    const skip = (page - 1) * limit;
    return this.userRepository.find({ skip, take: limit });
  }

  async create(userData: UserDto): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  async update(id: number, userData: UserDto): Promise<User> {
    await this.userRepository.update(id, userData);
    const options: FindOneOptions<User> = { where: { id: id } };
    return this.userRepository.findOne(options);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
