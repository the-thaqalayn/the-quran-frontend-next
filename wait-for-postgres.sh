#!/bin/bash

set -e  # Exit immediately if any command exits with a non-zero status

host="$1"
port="$2"
user="$3"
pass="$4"
shift 4  # Remove host, port, user and pass from arguments

# Wait for Postgres to be ready accepting connections
while ! psql -h "$host" -p "$port" -U "$user" -W "$pass" -c "select 1" > /dev/null 2>&1; do
  echo "Waiting for postgres to start on $host:$port..."
  sleep 1
done

echo "Postgres is up and ready!"

# Execute the remaining commands passed as arguments
# (likely your prisma seed script)
 "$@"