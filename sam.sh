#!/usr/bin/env bash
set -eo pipefail

if [ $# -gt 0 ]; then

  # Start services.
  if [ "$1" == "node" ]; then
    shift 1
    docker-compose run --rm node "$@"
  else
    docker-compose "$@"
  fi
else
  docker-compose ps
fi
