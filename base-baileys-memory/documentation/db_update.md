## Update Render's Postgres DB

* Since the database used in this project is free and must be updated every 30 days, I saved this tutorial with the necessary steps to configure a new one.

1. Remove the obsolete instance.
2. Create a new one.

Now, you will create the tables and add the necessary rows to let the system be correctly configured.

3. Copy the command from Connect >> External >> PSQL Command and run it in your local terminal
4. Run the following commands:

```bash
CREATE TABLE completed_flow (
    phone VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE app_status (
    id SERIAL PRIMARY KEY,
    is_on BOOLEAN NOT NULL
);

INSERT INTO app_status (is_on) VALUES (false);

INSERT INTO completed_flow (phone)
VALUES (1234)
ON CONFLICT (phone) DO NOTHING;
```
5. Update the ENV variable DATABASE_URL to the new value found in Connect >> Internal
