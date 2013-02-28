
SELECT title, votes
 FROM movie
 WHERE votes>=30000

1b. 电影'Citizen Kane'的首映年份．
SELECT yr FROM movie WHERE title='Citizen Kane'

1c. 列出包含the Police Academy（警校）字样的title（电影名称）和 score（得分） films.
SELECT title, score FROM movie
  WHERE title LIKE 'Police Academy%'

1d. 列出所有the Star Trek movies（星际系列电影）,显示title（电影标题）和score（得分）. 按电影的发行 yr（年份）排序.
SELECT title, score FROM movie
 WHERE title LIKE 'Star Trek%'
 ORDER BY yr

1e. 列出名称中包含'Dog'的电影名和得分．
SELECT title, score FROM movie
  WHERE title LIKE '%Dog%'

2a. 列出id为 1, 2, 3的电影的名称．
SELECT title FROM movie WHERE id IN (1,2,3)

2b. 电影'Glenn Close' 的ID号是多少?
SELECT id FROM actor WHERE name= 'Glenn Close'

2c. 电影'Casablanca' 的ID号是多少?
SELECT id FROM movie WHERE title='Casablanca'

上面几道题基本上是对之前的知识做个回顾。下面正式进入多表连接
3a. 显示id=1的电影'Star Wars'（星球大战）中演员（角色）名单．
SELECT name
  FROM casting, actor
  WHERE movieid=1
    AND actorid=actor.id

3b. 显示电影'Alien'的演员（角色）名单 ．
SELECT name
  FROM movie, casting, actor
  WHERE title='Alien'
    AND movieid=movie.id
    AND actorid=actor.id
这道题将三张表连接起来。表movie和actor是多对多的关系，因此需要一张角色表casting来连接他们，那么他们分别和casting都是一对多的关系，通过外键来进行联系。

3c. 显示有'Harrison Ford'参演的电影名称．
SELECT title
  FROM movie, casting, actor
 WHERE name='Harrison Ford'
    AND movieid=movie.id
    AND actorid=actor.id

3d. 显示有'Harrison Ford'参演的电影名称，但'Harrison Ford'在该影片中不是主角（即在角色表中不是排名第一）
SELECT title
  FROM movie, casting, actor
 WHERE name='Harrison Ford'
    AND movieid=movie.id
    AND actorid=actor.id
  AND ord>1
这道题又加上了个ord>1的条件，也就是说列出不是主角的电影名。

3e. 显示1962年发行的电影以及该影片中主角（即在角色表中排名第一）
SELECT title, name
  FROM movie, casting, actor
 WHERE yr=1962
    AND movieid=movie.id
    AND actorid=actor.id
    AND ord=1

下面几道题稍微有点难度。
4a. 'John Travolta'哪一年最忙？ 显示出他每年的出演电影数量．
 SELECT yr, COUNT(movie.id)
  FROM movie, casting, actor
  WHERE name='John Travolta'
    AND movieid=movie.id
    AND actorid=actor.id
    GROUP BY yr
这道题除了连接表之外，还加上了分组。

4b. 列出有'Julie Andrews'参演的所有电影名称以及该片的主角．
SELECT title, name
  FROM movie, casting, actor
  WHERE movieid=movie.id
    AND actorid=actor.id
    AND ord=1
    AND movieid IN
    (SELECT movieid FROM casting, actor
     WHERE actorid=actor.id
     AND name='Julie Andrews')
这道题要复杂点。在分析这道题的时候，首先应该从大范围开始考虑，也就是说先将表连接起来后，过滤掉所有没有Julie Andrews'参与的电影，然后再加上显示出该电影主角这一条件。

4c. 列出那些最起码在10部电影中出任过主角的演员．
SELECT name
    FROM casting JOIN actor
      ON  actorid = actor.id
    WHERE ord=1
    GROUP BY name
    HAVING COUNT(movieid)>=10

4d. 按演员人数的多少依次列出1978 的电影以及演员数．人数最多排在最前．
SELECT title, COUNT(actorid)
  FROM casting, movie
  WHERE yr=1978
    AND movieid=movie.id
  GROUP BY title
  ORDER BY 2 DESC
这里2表示查询出来的表中第二列字段

4e. 列出所有和'Art Garfunkel'合作过的演员（不要列出'Art Garfunkel'他自己）.
SELECT DISTINCT name
  FROM actor, casting
  WHERE actorid=actor.id
    AND movieid IN (
    SELECT movieid FROM casting, actor
      WHERE actorid=actor.id
        AND name='Art Garfunkel'
    )
    AND NOT name='Art Garfunkel'  
陈源 2008-01-09 04:23 发表评论]]