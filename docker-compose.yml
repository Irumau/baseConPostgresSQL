services:
  postgres:
    image: postgres
    restart: always
    environment:
      POSTGRES_DB: my_store
      POSTGRES_USER: Mauri
      POSTGRES_PASSWORD: ADMIN
    ports:
      - 5432:5432
    volumes:
      - ./postgres_data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@mail.com
      PGADMIN_DEFAULT_PASSWORD: root
    ports:
      - 5050:80
