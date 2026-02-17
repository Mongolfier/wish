#!/bin/sh
set -e

# Запуск nginx в фоне
nginx

# Запуск Next.js приложения
exec npm start
