#!/bin/sh
cd json
for (( i = 10002; i <= 10100; i++ )); do
	\cp -fr esp-10001.json esp-$i.json
	sed -i "s@10001@${i}@g" esp-$i.json
	sed -i "s@筒叶花月@Name-${i}@g" esp-$i.json
done
