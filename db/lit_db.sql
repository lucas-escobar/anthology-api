CREATE EXTENSION pgcrypto;

CREATE TABLE group(
    group_id        serial PRIMARY KEY,
    name            text
);

CREATE TABLE user_groups(
    fk_userGroups_group integer references group(group_id),
    fk_userGroups_user  integer references user(user_id),
    PRIMARY KEY(fk_userGroups_group, fk_userGroups_user)
);

CREATE TABLE user(
    user_id             serial PRIMARY KEY,
    username            text UNIQUE NOT NULL,
    password            text NOT NULL,
    email               text UNIQUE NOT NULL,
);

CREATE TABLE library(
    library_id          serial PRIMARY KEY,
    library_name        serial NOT NULL,
    fk_library_group    integer references group(group_id)
);

CREATE TABLE book(
    book_id         serial PRIMARY KEY,
    title           text,
    author          text[],
    UNIQUE(title, author),
    tags            text[],
    publish_date    date,
    cover_thumbnail bytea UNIQUE,
    cover_url       text UNIQUE,
    book_file_url   text UNIQUE,
    fk_book_library integer references library(library_id)
);

CREATE TABLE excerpt(
    excerpt_id          serial PRIMARY KEY,
    content             text UNIQUE,
    tags                text[],
    bookmark            text,
    fk_excerpt_user     integer references user(user_id),
    fk_excerpt_library  integer references library(library_id),
    fk_excerpt_book     integer references book(book_id)
);