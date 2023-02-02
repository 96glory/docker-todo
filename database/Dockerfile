FROM mysql:8

# 인코딩
ENV LC_ALL=C.UTF-8
ENV character-set-server utf8
ENV collation-server utf8_general_ci
ENV default-character-set utf8
ENV default-collation utf8_general_ci

# 스키마 명, 비밀번호
# ENV MYSQL_DATABASE TODO_DB
# ENV MYSQL_ROOT_PASSWORD glory
# ENV MYSQL_USER test_user
# ENV MYSQL_PASSWORD glory
# ENV MYSQL_ROOT_HOST %

COPY initdb.sql /docker-entrypoint-initdb.d/initdb.sql

EXPOSE 3306

CMD ["mysqld"]