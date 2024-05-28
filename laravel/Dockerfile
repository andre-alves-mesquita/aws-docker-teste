FROM php:8.2.0-fpm-alpine

RUN chmod -R 777 /var/www
RUN apk --no-cache add postgresql-dev
RUN docker-php-ext-install pdo pdo_pgsql pdo_mysql mysqli
RUN apk add --no-cache zip libzip-dev libpng-dev
RUN docker-php-ext-install zip
RUN docker-php-ext-install gd

