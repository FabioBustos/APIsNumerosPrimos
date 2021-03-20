import { IsInt, IsNotEmpty, IsNumberString, Min  } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class InputDto {
  @ApiProperty({ 
    description: 'digit up to which to look for prime numbers',
    minimum: 2,
  })
  @IsNotEmpty()
  @Type(() => Number)
  @Min(2)
  @IsInt()
  id: number;
}

