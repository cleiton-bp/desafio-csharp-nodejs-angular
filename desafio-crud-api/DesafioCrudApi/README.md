## ---- POSTGRESQL

docker run --name postgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=DB_Desafio -p 5432:5432 -d postgres