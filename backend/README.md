# docker-todo-spring

## MySQL 연동

https://memostack.tistory.com/155 참고

### mysql 설치 및 서버 실행

```shell
# brew 명령어로 mysql 설치
brew install mysql

# mysql 서버 실행
mysql.server start

# mysql 설정
mysql_secure_installation

# mysql 접속 (pwd: glory)
mysql -uroot -p
```

### db 생성

```shell
# mysql -uroot -p 명령어를 통해 db 서버에 접속한 상태

# DB 생성
CREATE DATABASE TODO_DB DEFAULT CHARACTER SET UTF8;

# DB 생성 확인
show databases;

# 유저 생성 및 권한 부여
CREATE USER test_user@localhost IDENTIFIED BY 'admin';

# DB 권한 부여
GRANT ALL PRIVILEGES ON TODO_DB.* TO test_user@localhost;

# 사용자 비밀번호 수정 (application.properties에서 언급해야함)
ALTER USER test_user@localhost IDENTIFIED WITH mysql_native_password BY 'glory';

# 테이블 생성
CREATE TABLE IF NOT EXISTS TODO_DB.TO_DO_ITEM (
  ID BIGINT NOT NULL AUTO_INCREMENT,
  TITLE VARCHAR(255),
  CONTENT VARCHAR(255),
  IS_DONE BIT(1),
  PRIMARY KEY(ID)
);
```

## docker 수행

```shell
# Docker file 작성 참조
docker build -t glory/docker-todo-spring . 
```