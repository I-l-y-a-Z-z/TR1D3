docker run -p 5432:5432 -d \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_DB=trade_db \
    -v pgdata:/var/lib/postgresql/data \
    postgres 

# docker exec -it <CONTAINERID> psql -U <USER> <DB_NAME>