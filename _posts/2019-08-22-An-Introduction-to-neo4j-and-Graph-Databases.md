---
layout: post
title: "An introduction to Neo4j and Graph Databases"
date: 2019-08-22
tags: neo4j graphs data-visualisation data
---

## 1. What is a graph database?
Graph Databases take business and user needs (i.e what you want your application to do) and transform them into a structure for sorting data. The performance of this graph database remains consistent even as data volume and connections between data points increases. It is flexible, as you can keep adding to the existing graph without endangering the current functionality. It allows us to label data in order to group it and establish trends, and ask questions about our information.

**Node + Relationships**
- A node can be a person, place, thing etc.
- A relationship tells us how 2 nodes are associated

![Image](/assets/img/twitter-users-graph-database-model.png)

Nodes can be **labelled** with multiple labels to make it easier to group them.
You can add **properties** to nodes and relationships to add more information to the graph.

## 2. Creating a graph database

- CREATE (The Matrix: Movie {title: "The Matrix", released 1999, tagline: "Welcome to the Real World"})
- CREATE (Keanu: Person {name: "Keanu Reeves", born: 1964})
- CREATE (Keanu)-[:ACTED_IN{roles:"Neo"}) -> (The Matrix)

### Creating nodes
**Node**: A representation of a domain entity with labels, properties and relationships
- Generally: CREATE (optionalVariable: optionalLables {optionalProperties})

You can create multiple nodes by separating with a comma:
- CREATE (:Person {name: "Michael Caine", born: 1933}), (:Person {name: "Liam Neeson", born: 1952}), (:Person {name: "Katie Holmes", born: 1978})

To add a label to a node: SET x: Label
- Eg. MATCH (m:Movie) WHERE m.title = 'Batman Begins' SET m: Action RETURN labels(m)

To remove a label from a node: REMOVE x: Label

To add Properties to a node: SET x.PropertyName = value
- To add multiple properties you have two methods:
1. MATCH (m:Movie) WHERE m.title = 'Batman Begins' SET m.released = 2005, m.lengthInMinutes = 140 RETURN m
2. MATCH (m:Movie) WHERE m.title = 'Batman Begins' SET m = {title = 'Batman Begins', released = 2006, videoFormat = "DVD"} RETURN m
3. MATCH (m:Movie) WHERE m.title += 'Batman Begins' SET m = {released = 2006, videoFormat = "DVD"} RETURN m

**SET =** must include all of the properties for the relationship where as **SET +=** adds or updates the properties. = instead of += could remove existing properties if they aren't included in the set.

To remove a property: REMOVE x.propertyName or SET x.propertyName = NULL

### Creating Relationships

- CREATE(x)-[:REL_TYPE]->(y)

When you create a relationship, you must give it a direction.

To identify two nodes you want to create a relationship between:
- Eg. MATCH (a:Person), (m:Movie) WHERE a.name = "Michael Caine" AND m.title = "Batman Begins" CREATE (a)-[:ACTED_IN]->(m) RETURN a, m

This gives us (Michael Caine) -- ACTED IN --> (Batman Begins)

To delete relationships you must first identify which relationship you want to remove:
- MATCH (a:Person)-[rel:ACTED_IN]->(m:Movie) WHERE a.name = "Christian Bale" AND m.title = "Batman Begins" DELETE rel RETURN a, m

To delete both a node and a relationship: MATCH (p:Person) WHERE p.name = "Liam Neeson" DETACH DELETE p

![relationships between office workers](/assets/img/graph%20-%20Superiors.png)

### MERGE

- **MERGE** will prevent the creation of a node with the same properties as a node that already exists (i.e duplicates)

If you use CREATE:
1. If a **node** with the same property value exists, a duplicate is created
2. If the **label** already exists for the node, the node isn't updated
3. If the **relationship** exists, a duplicate relationship is created
4. If the **node or relationship property** already exists it is updated with a new value

WARNING: You should avoid creating duplicate nodes/relationships in a graph

**MERGE** is used to find elements in a graph. If those elements aren't found, merge creates them.

- MERGE(variable: Label {nodeProperties}) RETURN variable
- Eg. MERGE (a:Actor {name: "Michael Caine"}) SET a.born = 1933 RETURN a

MERGE to create relationships
- MERGE (variable: Label {nodeProperties})-[REL_TYPE]->(otherNode) RETURN variable
- Eg. MERGE (a:Person {name: "Emma Watson"}) ON CREATE SET a.birthPlace = "Paris", a.born = 1990 RETURN a

## 3. How do we query the graph?
neo4j uses **CYPHER**, a declarative query language to get information from the graph.

- Eg. CREATE (:Label{Property})-[:RELATIONSHIP]->(Label{Property})
- CREATE (:Person{name: "Harry"}) -[:LOVES] (:Person {name: "Tom"})

Nodes are represented by () or (n). To retrieve all the nodes in your graph use MATCH (n) RETURN n. () is an anonymous node. (n) tells the database 'for this query, use the variable n to represent nodes'. You can filter the type of node you are searching for by specifying labels, eg. (variable: Label1: Label2) eg. (p: Actor: Director) to get people who are both actors and directors.

**CALL db.schema** returns information about nodes, labels and relationships in the graph. It tells you what relationships exist and how nodes are linked so you get an overview of the the graph structure.

**MATCH** performs a pattern match against the data in the graph eg. MATCH (variable) RETURN variable

**CALL db.propertyKeys** returns all the property keys in the database.

You can return **type(n)** where n is a relationship and you want to know its type.

**WHERE** is also a key word to use in searches.
- Eg. MATCH (a)-[n]->(m) WHERE a:Person and type(n) = 'WROTE' AND m.movie RETURN a.name AS name, m.title as Movie
- This can also be replaced by WHERE NOT to get all the people who do not relate to a property
- WHERE is also useful for string manipulation queries. You can search for people whose name's **START WITH** 'Esther' or **CONTAINS** 'fun', or **WHERE** m.released **IN** [2000, 2004] to get all movies released in 2000 and 2004.

### Examples
- Retrieve nodes as list: MATCH (p:Person)-[:ACTED_IN]->(m:Movie) RETURN p.name, **collect(m.title)**
- Count: MATCH (p:PERSON)-[:ACTED_IN]->(m:Movie) RETURN m.title, count(p), collect(p.name)
- Actors who have acted in exactly 5 movies: MATCH (a:Person)-[:ACTED_IN]->(m:Movie) WITH a, count(a), collect(m.title) WHERE count(a) = 5 RETURN a.name, collect (m.title)
- Movies with at least 2 directors and other optional data: MATCH (m:Movie) with m, size((:Person)-[:DIRECTED]->(m)) AS directors WHERE directors >=2 OPTIONAL MATCH (p:Person)-[:REVIEWED]->(m) RETURN m.title, p.name

**DISTINCT** retrieves only unique results

## 4. Conclusion

This is the basic understanding I have gained from following neo4j tutorials and reading around online for the last couple of days. It's a very fun software to play with, and helps to display data in a visually interesting and useful manner. In the future I'd like to continue learning to see how I can upload csv files and write more complex queries.
