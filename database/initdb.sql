CREATE USER 'test_user'@'localhost' IDENTIFIED BY 'userpwd';
CREATE USER 'test_user'@'%' IDENTIFIED BY 'userpwd';

GRANT ALL PRIVILEGES ON *.* TO 'test_user'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'test_user'@'%';

DROP DATABASE IF EXISTS TODO_DB;
CREATE DATABASE TODO_DB;
USE TODO_DB;

-- CREATE TABLE IF NOT EXISTS TODO_DB.to_do_item (
--   ID BIGINT NOT NULL AUTO_INCREMENT,
--   TITLE VARCHAR(255),
--   CONTENT VARCHAR(255),
--   IS_DONE BIT(1),
--   PRIMARY KEY(ID)
-- );

-- INSERT INTO to_do_item (title, content, is_done)
-- VALUES
-- ('rest', '카페모카 사먹기', true),
-- ('frontend', '수정 버튼 및 기능 추가하기', false),
-- ('frontend', 'backend에서 데이터 들고 오게 바꾸기', false),
-- ('backend', 'mysql로 변경', false),
-- ('backend', 'delete api 추가', false);
