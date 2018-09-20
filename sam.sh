#!/usr/bin/env bash
set -eo pipefail

if [ $# -gt 0 ]; then

  # Start services.
  if [ "$1" == "web" ]; then
    shift 1
    docker-compose run --rm web "$@"
  else
    docker-compose "$@"
  fi
else
  docker-compose ps
fi
