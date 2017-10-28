#!/bin/sh
for (( i = 0; i < 10; i++ )); do
	/cp -fr demo-1.json demo-$i.json
done
