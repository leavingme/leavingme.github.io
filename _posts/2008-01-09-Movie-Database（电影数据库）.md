---
layout: post
title: Movie Database（电影数据库）
---
SELECT title, votes

&nbsp;FROM movie

&nbsp;WHERE votes&gt;=30000

1b. 电影'Citizen Kane'的首映年份．

SELECT yr FROM movie WHERE title='Citizen Kane'

1c. 列出包含the Police Academy（警校）字样的title（电影名称）和 score（得分） films.

SELECT title, score FROM movie

&nbsp; WHERE title LIKE 'Police Academy%'

1d. 列出所有the Star Trek movies（星际系列电影）,显示title（电影标题）和score（得分）. 按电影的发行 yr（年份）排序.

SELECT title, score FROM movie

&nbsp;WHERE title LIKE 'Star Trek%'

&nbsp;ORDER BY yr

1e. 列出名称中包含'Dog'的电影名和得分．

SELECT title, score FROM movie

&nbsp; WHERE title LIKE '%Dog%'

2a. 列出id为 1, 2, 3的电影的名称．

SELECT title FROM movie WHERE id IN (1,2,3)

2b. 电影'Glenn Close' 的ID号是多少?

SELECT id FROM actor WHERE name= 'Glenn Close'

2c. 电影'Casablanca' 的ID号是多少?

SELECT id FROM movie WHERE title='Casablanca'

上面几道题基本上是对之前的知识做个回顾。下面正式进入多表连接

3a. 显示id=1的电影'Star Wars'（星球大战）中演员（角色）名单．

SELECT name

&nbsp; FROM casting, actor

&nbsp; WHERE movieid=1

&nbsp;&nbsp;&nbsp; AND actorid=actor.id

3b. 显示电影'Alien'的演员（角色）名单 ．

SELECT name

&nbsp; FROM movie, casting, actor

&nbsp; WHERE title='Alien'

&nbsp;&nbsp;&nbsp; AND movieid=movie.id

&nbsp;&nbsp;&nbsp; AND actorid=actor.id

这道题将三张表连接起来。表movie和actor是多对多的关系，因此需要一张角色表casting来连接他们，那么他们分别和casting都是一对多的关系，通过外键来进行联系。

3c. 显示有'Harrison Ford'参演的电影名称．

SELECT title

&nbsp; FROM movie, casting, actor

&nbsp;WHERE name='Harrison Ford'

&nbsp;&nbsp;&nbsp; AND movieid=movie.id

&nbsp;&nbsp;&nbsp; AND actorid=actor.id

3d. 显示有'Harrison Ford'参演的电影名称，但'Harrison Ford'在该影片中不是主角（即在角色表中不是排名第一）

SELECT title

&nbsp; FROM movie, casting, actor

&nbsp;WHERE name='Harrison Ford'

&nbsp;&nbsp;&nbsp; AND movieid=movie.id

&nbsp;&nbsp;&nbsp; AND actorid=actor.id

&nbsp; AND ord&gt;1

这道题又加上了个ord&gt;1的条件，也就是说列出不是主角的电影名。

3e. 显示1962年发行的电影以及该影片中主角（即在角色表中排名第一）

SELECT title, name

&nbsp; FROM movie, casting, actor

&nbsp;WHERE yr=1962

&nbsp;&nbsp;&nbsp; AND movieid=movie.id

&nbsp;&nbsp;&nbsp; AND actorid=actor.id

&nbsp;&nbsp;&nbsp; AND ord=1

下面几道题稍微有点难度。

4a. 'John Travolta'哪一年最忙？ 显示出他每年的出演电影数量．

&nbsp;SELECT yr, COUNT(movie.id)

&nbsp; FROM movie, casting, actor

&nbsp; WHERE name='John Travolta'

&nbsp;&nbsp;&nbsp; AND movieid=movie.id

&nbsp;&nbsp;&nbsp; AND actorid=actor.id

&nbsp;&nbsp;&nbsp; GROUP BY yr

这道题除了连接表之外，还加上了分组。

4b. 列出有'Julie Andrews'参演的所有电影名称以及该片的主角．

SELECT title, name

&nbsp; FROM movie, casting, actor

&nbsp; WHERE movieid=movie.id

&nbsp;&nbsp;&nbsp; AND actorid=actor.id

&nbsp;&nbsp;&nbsp; AND ord=1

&nbsp;&nbsp;&nbsp; AND movieid IN

&nbsp;&nbsp;&nbsp; (SELECT movieid FROM casting, actor

&nbsp;&nbsp;&nbsp;&nbsp; WHERE actorid=actor.id

&nbsp;&nbsp;&nbsp;&nbsp; AND name='Julie Andrews')

这道题要复杂点。在分析这道题的时候，首先应该从大范围开始考虑，也就是说先将表连接起来后，过滤掉所有没有Julie Andrews'参与的电影，然后再加上显示出该电影主角这一条件。

4c. 列出那些最起码在10部电影中出任过主角的演员．

SELECT name

&nbsp;&nbsp;&nbsp; FROM casting JOIN actor

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ON&nbsp; actorid = actor.id

&nbsp;&nbsp;&nbsp; WHERE ord=1

&nbsp;&nbsp;&nbsp; GROUP BY name

&nbsp;&nbsp;&nbsp; HAVING COUNT(movieid)&gt;=10

4d. 按演员人数的多少依次列出1978 的电影以及演员数．人数最多排在最前．

SELECT title, COUNT(actorid)

&nbsp; FROM casting, movie

&nbsp; WHERE yr=1978

&nbsp;&nbsp;&nbsp; AND movieid=movie.id

&nbsp; GROUP BY title

&nbsp; ORDER BY 2 DESC

这里2表示查询出来的表中第二列字段

4e. 列出所有和'Art Garfunkel'合作过的演员（不要列出'Art Garfunkel'他自己）.

SELECT DISTINCT name

&nbsp; FROM actor, casting

&nbsp; WHERE actorid=actor.id

&nbsp;&nbsp;&nbsp; AND movieid IN (

&nbsp;&nbsp;&nbsp; SELECT movieid FROM casting, actor

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WHERE actorid=actor.id

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AND name='Art Garfunkel'

&nbsp;&nbsp;&nbsp; )

&nbsp;&nbsp;&nbsp; AND NOT name='Art Garfunkel'&nbsp;&nbsp;

![](http://www.cnblogs.com/leavingme/aggbug/1166233.html)

<div align="right">[陈源](http://leavingme.cnblogs.com/) 2008-01-09 04:23 [发表评论](http://www.cnblogs.com/leavingme/archive/2008/01/09/1166233.html#Feedback)</div>]]