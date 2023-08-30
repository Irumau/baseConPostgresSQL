version: '1.27.0'

services:
  postgres:
    image: postgres
    environment:
      - POSTGRES_DB=my_store
      - POSTGRES_USER=Mauri
      - POSTGRES_PASSWORD=ADMIN
    ports:
      - 5432:5432
    volumes:
      - ./postgres_data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    restart: always
    environment:
      - PGADMIN_DEFAULT_EMAIL=admin@mail.com
      - PGADMIN_DEFAULT_PASSWORD=root
    ports:
      - 5050:80

  mysql:
    image: mysql
    environment:
      - MYSQL_DATABASE=my_store
      - MYSQL_USER=root
      - MYSQL_ROOT_PASSWORD=ADMIN
      - MYSQL_PORT=3306
    ports:
      - 3306:3306
    volumes:
      - ./mysql_data:/var/lib/mysql

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    environment:
      - MYSQL_ROOT_PASSWORD=ADMIN
      - PMA_HOST=mysql
    ports:
      - 8080:80
