like a virtual machine but structured differently to save RAM and CPU

#### getting info
`docker version`
`docker info`
`
#### Momentaufnahme laufernder Prozesse:
`docker ps -a` // show (-a) all (ps) **p**rocesse**s**

#### show only running containers:
`docker container ls`

#### Workflow after Setup:

In empty folder create 'docker-compose.yml' 

#### to run start your docker containers:
`docker-compose up -d`
use `docker-compose up` without the `-d` to see what is happening (and know when it has finished)

#### to stop thus created docker containers:
`docker-compose down`

#### to list thus created containers even when they are down:
`docker-compose ps -a`


Example for docker-compose.yml:

```
version: '3.7'
services:
  ghost:
    image: ghost:latest
    restart: always
    depends_on:
      - db
    environment:
      url: http://localhost:3001
      database__client: mysql
      database__connection__host: db
      database__connection__user: root
      database__connection__password: MyStrongPassword
      database__connection__database: ghost
    ports:
      - 3001:2368
    volumes:
      - ./content:/var/lib/ghost/content
  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: MyStrongPassword
```





Docker is like a virtual machine but structured differently to save RAM and CPU.

#### initiate and run a docker container:
Beispiel: `docker run -d --name some-ghost -e url=http://localhost:3001 -p 3001:2368 ghost`
Übersetzt: starte docker, (-d for 'detached') lass es im Hintergrund laufen, (--name) nenne es 'some-ghost', (-e) set environment variable: url=...., (-p) Portweiterleitung auf 3001 (von 2368), aus dem image 'ghost'

#### start a docker container
??

#### show all (running) docker container:
`docker ps -a`

#### stop docker container:
`docker stop example-container-name`

#### delete all non-active container and images:
`docker system prune -af`

#### ghost at docker:
https://hub.docker.com/_/ghost/

#### list all commands
`docker` 
and
`docker run --help` 

#### Gist from Brad:
https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3

#### very good ELI5: https://www.reddit.com/r/AskComputerScience/comments/9xktwl/eli5_please_what_is_docker/

Docker Installation (nach `brew update`): `brew install --cask docker`

#### download image:
you do it automatically when you start a container:
`docker run -d --name some-ghost -e url=http://localhost:3001 -p 3001:2368 ghost` // last part calls the respective image down from docker hub

you can do it directly:
`docker pull nginx`

#### delete image
`docker image rm exampleID`  // instead of exampleID use the first 3 digits of the image ID. To get the image ID:

#### list all images
`docker images`

#### remove container

`docker container rm example` /instead of example use the first 3 digits from the containers ID

to see all containers run:
`docker container ls -a`


