//Задание 1

1. SET index "index precalculated content"
2. EXISTS index
3. TTL index
4. PERSIST index

//Задание 2

1. HMSET ratings mysql 10 postgresql 20 mongodb 30 redis 40
2. HINCRBY ratings mysql 15
3. ZREM ratings (ZREVRANGE ratings 0 0 WITHSCORES | awk 'print $1')
4. ZREVRANK ratings mysql

//Задание 3

1. SUBSCRIBE events*
2. PUBLISH events101 "Hello there"

//Задание 4

1. SET squareRootFunction "function (key, value)  return Math.sqrt(value); "