mysql -uroot -p1234 -e 'drop database hackifieds;';
mysql -uroot -p1234 -e 'create database hackifieds;';
node ./db/seed.js