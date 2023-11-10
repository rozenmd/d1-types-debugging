drop table if exists users;

create table users (
    id integer primary key autoincrement,
    username text not null,
    created_at datetime default current_timestamp
);

insert into users (username) values ('alice');
insert into users (username) values ('bob');
insert into users (username) values ('carol');
insert into users (username) values ('dave');