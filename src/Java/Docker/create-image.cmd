docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat17-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t postamat17-java/app ../../..
