# Events calender


Install postgres:
apt-get install postgresql

-----------------------------
Data directory on Ubuntu
Creating new cluster 9.5/main ...
  config /etc/postgresql/9.5/main
  data   /var/lib/postgresql/9.5/main
  locale en_GB.UTF-8
  socket /var/run/postgresql
  port   5432

User: postgres
-----------------------------

connect to the sever: 

sudo -u postgres psql

-----------------------------

Create databse: 

create database events_calendar;

-----------------------------

Create user and grant privileges to eventsuser: 

create user eventsuser;
alter user eventsuser with encrypted password 'eventsuser147';
grant all privileges on database events_calendar to eventsuser;

-----------------------------

Login user: 
sudo -u postgres psql events_calendar -h localhost -U eventsuser

-----------------------------
Create events table:

CREATE TABLE events_tbl (
id serial primary key,
lesson VARCHAR(55),
event_date Date,
description text
);


-----------------------------

Insert data into the table

INSERT INTO events_tbl (lesson, event_date, description) values ('html-1',
       '01-09-2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

-----------------------------

export database to home directory:

sudo -u postgres pg_dump  events_calendar -h localhost -U eventsuser>events_calendar_database_script

-----------------------------

