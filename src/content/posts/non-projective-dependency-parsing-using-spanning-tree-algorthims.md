---
title: Non-Projective Dependency Parsing using Spanning Tree Algorithms
published: 2025-01-02
description: "A short summary of the paper: Non-Projective Dependency Parsing using Spanning Tree Algorithms by McDonald et al., 2005"
image: ""
tags: [NLP, ML]
category: "cs-learnings"
draft: false
lang: "en"
---

This is a short summary of ['Non-projective dependency parsing using spanning tree algorithms' by McDonald et al., 2005.](https://www.aclweb.org/anthology/H05-1066.pdf)

The paper seeks to use search in maximum spanning trees (MSTs) in directed graphs to formalise weighted
dependency parsing to increase parsing efficiency and accuracy in languages with non-projective dependencies.
In the dependency trees explored by the paper, each word is dependent on a single parent, which could also be a
dummy root symbol. The term ‘projective’ refers to trees where, when the words are ordered beginning with the
root, edges can be drawn above the words with no intersection. Similarly, this means a word and its descendants
form a contiguous substring of the sentence. In Fig 2, the paper gives an example of a non-projective tree, where
the edges between (saw, yesterday) and (dog, was) must cross. This is because the sentence contains a modified
object and its relative clause, ‘dog’ and ‘which was a Yorkshire Terrier’, are separated by ‘yesterday’. The inclusion
of relative clauses may lead to non-projectivity. English, a language with stricter word order, is compared to
languages with more flexible syntax, like German, Dutch, and Czech. They search to improve parsing methods in
the second case. Formulating dependency parsing as an MST search in a directed graph and using this method on
non-projective dependencies is suggested.

The paper uses edge based factorization to score the edges from one word to another, by summing the scores of
all the edges in the tree to factor the score of the dependency tree. A weight vector w and the high dimensional
feature representation of the edge are multiplied with a dot product to find the score. An advantage is that this
gives us a simple way to compute and assign a score to all the trees and edges in order to do an MST search.
However, the calculation and dot product might be too simplistic a representation of the scores. A directed graph
is formed with the dummy root and the words in the sentence working as vertices and directed edges between all
pairs of distinct words and from the root to every word. The existing MST Chu-Liu-Edmonds algorithm is then used
to find the highest scoring non-projective tree. This algorithm contracts vertices when a cycle is found, and the
algorithm is recursively called again. This method works for both projective and non-projective languages.

Next, the learning algorithm (single/factored) Margin Infused Relaxed Algorithm (MIRA) is extended to train the
model and learn the weight w. The vector v accumulates the values of w, so the final w is an average, which helps
deal with overfitting. Loss of a tree is defined as the number of words with incorrect parents relative to the correct
tree. The paper suggests relaxing the optimization of the algorithm to deal with the exponential blow-up in the
number of trees. MIRA updates the weight to maximise the margin between the correct tree and the highest
scoring tree, increasing accuracy. Neural networks could be used instead, to learn the value of w, using different
layers with every tree. However, they are prone to overfitting and perform better with more data. They can also be
computationally expensive. I didn’t completely understand why the weight the correct incoming edge to a word
and the weight out of all other edges had to be separated by 1, but it seemed like the correct MST and the
incorrect MSTs had to be separated by a score of at least the number of incorrect incoming edges to a word.

The paper experiments on the Czech Prague Dependency Treebank (PDT), using the pre-generated POS tags in the
dataset. 23% of sentences in the datasets had at least one non-projective dependency, but less than 2% of edges
are actually non-projective. To highlight this, two test sets are created. Czech A holds the entire PDT and Czech B
has just the 23% of sentences with at least one non-projective dependency (Allowing the team to evaluate the
model on non-projective sentences).

In their results, I was surprised to see that all the models did poorly in ‘Complete’, the measure of the number of
sentences where the resulting tree is entirely correct. For the non-projective sentences, the best score was 14.9%,
with single-best MIRA. The results suggest that the model does better inefficiency and accuracy for non-projective
sentences. The team manages to increase the time complexity of the algorithm as well. However, for English, a
language with less flexibility than Czech and so fewer non-projective dependencies, McDonald et al. (2005) is more
accurate.
