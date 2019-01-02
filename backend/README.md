# CYF Events Calendar Database

# Backend Setup

## Install Posgresql on Ubuntu:

1. Postgres is available on Ubuntu repository. We can install the Postgres package and a -contrib package to add additional utilities and functionality:

`sudo apt-get update`

`sudo apt-get install postgresql postgresql-contrib`

2. Login as postgres default user account:

`sudo -i -u postgres`

3. Start postgres:

`psql`

4. Create user and grant privileges to eventsuser:

`create user eventsuser;`

`alter user eventsuser with encrypted password 'eventsuser147';`

`grant all privileges on database events_calendar to eventsuser;`

`ALTER USER eventsuser WITH SUPERUSER;`

5. Login user:

`sudo -u postgres psql events_calendar -h localhost -U eventsuser`

6. Run the script to create the database:

`sudo -u postgres psql < events_calendar.sql`

or login to postgres and open the file and paste it in the terminal

7. Allow local connection: As a super user you have to edit the configuration file. Go to the folder main and open

/etc/postgresql/9.6/main/pg_hba.conf (Ubuntu) or /var/lib/pgsql/9.6/data/pg_hba.conf (Red Hat)
as a super user by typing:

`sudo nano`

Scroll down to the line that describes local socket connections. It may look like this:

`local all all peer`

You have to change it to accespt remote connection

`local all all trust`

Save the file Ctrl + O, type the file name pg_hba.conf and overwrite it and exit Ctrl + x.

7. Restart the service:

`sudo service postgresql restart`

## Install Posgresql on Mac OS:

1. Install Postgres with Homebrew

`brew install postgres`

`brew services start postgresql`

2. Start PostgreSQL server

`psql`

3. Create Database

`create databse events_calendar;`

4. Create user and grant privileges to eventsuser:

`create user eventsuser;`

`alter user eventsuser with encrypted password 'eventsuser147';`

`grant all privileges on database events_calendar to eventsuser;`

`ALTER USER eventsuser WITH SUPERUSER;`

5. Login user:

`psql events_calendar -h localhost -U eventsuser`

6. Run the script to create the database:

`psql -f events_calendar.sql events_calendar`
