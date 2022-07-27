\echo "Delete or recreate database wedding_registration?"

\prompt "Return for yes or ctrl-C to cancel > " answer

DROP DATABASE wedding_registration;
CREATE DATABASE wedding_registration;

\connect wedding_registration
\i wedding-registration-schema.sql
