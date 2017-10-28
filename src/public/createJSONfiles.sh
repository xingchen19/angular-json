#!/bin/sh
for (( i = 10; i < 150; i++ )); do
\cp -fr demo-1.json demo-$i.json
done
