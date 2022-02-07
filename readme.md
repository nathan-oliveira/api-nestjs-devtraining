### instalar Nest
npm install -g @nestjs/cli

### criar projeto
nest new project-name

### criar estruturas 
nest generate --help

## criar module
nest g module courses

## criar controller
nest g controller courses --no-spec
nest g controller module/courses --dry-run (Vai mostra como ficara a estrutura sem criar nada)

## criar service
nest g service courses

## criar class
nest g class courses/dto/create-course.dto --no-spec


## Container Docker Create
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres


## TypeORM Migration Create
npx typeorm migration:create -n CourseRefactoring

## TypeORM Migration Execute
npx typeorm migration:run

## TypeORM Migration Revert
npx typeorm migration:revert
