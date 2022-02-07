import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true }) // each => para validar o conteúdo dentro do array
  readonly tags: string[];
}
