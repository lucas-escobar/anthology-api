DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
CREATE EXTENSION pgcrypto;

CREATE TABLE community(
    community_id    serial PRIMARY KEY,
    community_name  text
);

CREATE TABLE app_user(
    app_user_id         serial PRIMARY KEY,
    username            text UNIQUE NOT NULL,
    password            text NOT NULL,
    email               text UNIQUE NOT NULL
);

CREATE TABLE appUser_communities(
    fk_appUserCommunities_appUser   integer references app_user(app_user_id),
    fk_appUserCommunities_community integer references community(community_id),
    PRIMARY KEY(fk_appUserCommunities_community, fk_appUserCommunities_appUser)
);

CREATE TABLE library(
    library_id              serial PRIMARY KEY,
    library_name            serial NOT NULL,
    fk_library_community    integer references community(community_id)
);

CREATE TABLE book(
    book_id         serial PRIMARY KEY,
    title           text,
    author          text[],
    UNIQUE(title, author),  -- TODO title equivalency test
    tags            text[],
    publish_date    date,   -- TODO handle multiple publication dates
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
    fk_excerpt_appUser  integer references app_user(app_user_id),
    fk_excerpt_library  integer references library(library_id),
    fk_excerpt_book     integer references book(book_id)
);