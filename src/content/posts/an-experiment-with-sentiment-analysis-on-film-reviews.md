---
title: 🎞️ An Experiment with Sentiment Analysis on Film Reviews
published: 2025-01-23
description: "An exploration of sentiment analysis on film and movie review data."
image: ""
tags: [NLP, ML]
category: "cs-learnings"
draft: false
lang: "en"
---

Sentiment Analysis is a subset of Natural Language Processing (NLP), a branch of AI that
is concerned with understanding, modelling and engineering natural language. Sentiment
analysis refers to using NLP to classify and study texts to determine whether data is
positive or negative (or neutral).
In this particular, introductory example, I am just going to be training classifiers to
identify positive and negative sentiments. The goal is to play around with different
kinds of classifiers, in order to try and determine which ML model works best for
sentence-level sentiment classification.
I will be using scikit-learn and nltk.

I am going to be using the movie review dataset from Bo Pang and Lillian Lee's 'Seeing
stars: Exploiting class relationships for sentiment categorization with respect
to rating scales.' (2005) which can be found
[here](http://www.cs.cornell.edu/people/pabo/movie-review-data). It is derived from the
Rotten Tomatoes webpage.
The data comes in two files, each containing 5331 text snippets. One contains positive
snippets and the other negative snippets. Each line corresponds to one snippet.

## Preprocessing Text

A key part when dealing with language and text data is the preprocessing. The point is to
extract the key information from the snippets and remove noise. I am going to write a few
functions to do just this. Firstly, to strip the punctuation:

```
def remove_punctuation(text):
    no_punct = "".join([c for c in text if c not in string.punctuation])
    return no_punct
```

Next, I will remove stopwords. Stopwords are common words in a natural language. They
don't necessarily add much value to the fundamental meaning of the text. Some examples
include 'the', 'is', 'to', 'at'.

```
from nltk.corpus import stopwords
def remove_stopwords(text):
    words = word_tokenize(text)
    words_without_stopwords = " ".join([w for w in words if w not in stopwords.words('english')])
    return words_without_stopwords
```

When preprocessing text data, often we can choose between stemming or lemmatizing the data.
Stemming is a more aggressive than lemmatizing. It involves entirely cutting off the affix of
a word to find the stem. The most common method for this is the Porter Stemmer method.
Lemmatizing removes affixes but recovers the lemma (the form you'd look up in the
dictionary). It leaves us with words that still exist, where stemming might give us
'poni' rather than 'ponies', or 'pulver' rather than 'pulverized'.
I choose to go with lemmatizing for this exercise because time is not of any concert.
Lemmatizing can be slower than stemming. Also, since stemming is so aggressive, I worry
that meaning might be lost and I don't want to run that risk.

```
from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
def word_lemmatizer(text):
    lem_text= "".join([lemmatizer.lemmatize(i) for i in text])
    return lem_text
```

These three functions work on a single sentence. In order to apply them to an array of
sentences I will write two more simple functions:

```
def preprocess(sentence):
    t = remove_punctuation(sentence)
    t = remove_stopwords(t)
    t = word_lemmatizer(t)
    return t

def preprocess_array(text_array):
    new_str = []
    for i in text_array:
        new_str.append(preprocess(i))
    return new_str
```

## Dealing with Data

Now, we can turn our attention to our actual datasets - the movie reviews. I am going to
read the positive and negative data into two different arrays using numpy.
Every sentence (or every text snippet) is handily separated by a newline, and fills a new
entry in our array:

```
with open('rt-polarity.pos') as f:
    raw_pos = np.loadtxt(f, delimiter="\n", dtype = np.str)
sentiment_pos = [1]*5331
pos_np = np.array(sentiment_pos)
```

The intention is to train a model on this data, so it's important to keep track of which
snippets are positive and which are negative. To do this, I'm simply going to create a
new array of equal length to each of the datasets, and initialise every entry with a
1 for the positive snippets, and a 0 for the negative snippets.

Then we can join our two arrays together as follows:

```
text_data = np.concatenate((raw_pos, raw_neg))
sentiment_data = np.concatenate((pos_np , neg_np))
```

We can run the earlier preprocess functions on our text_data array:

```
preprocess_array(text_data)
```

And now we should have a cleaned array of text entries and a corresponding array of 1s and
0s denoting positive or negative sentiments.

## Setting up an ML Model

Machine Learning models can't understand text. So now we have to find a way to turn our
arrays into something that can be understood by a model. We've already extracted
properties from the dataset by cleaning and lemmatizing it. Now we need to turn these
features into a vector that can be used to train the classifier. This can be done
in several ways eg. N-grams involve separating text into sequences of adjacent words.

Machine learning models generally accept two arrays. In this case, our model needs
a training vector of features / data. These are the sentences of movie reviews, but
transformed into numbers so the model can understand it. Our model also needs a
corresponding array which tells it the 'solution' of sorts, to the problem. In our case,
we need to tell the model which sentences are positive and negative so it can learn -
we feed it the array of 1s and 0s from earlier.

Now, how do we turn our text into a feature vector? Scikit-learn has a useful tool:

```
from sklearn.feature_extraction.text import CountVectorizer
vectorizer=CountVectorizer()
def vectorize(text):
    X = (vectorizer.fit_transform(text))
    return X
```

There are plenty of different ways you can vectorize your data. In this case, my features
are simply going to be unigram counts - words in isolation.
I apply the above function to my text_data of sentences:

```
X = vectorize(text_data)
X = X.toarray()
```

And for convenience, I am also going to rename my 'sentiment_data' of 1s and 0s
corresponding to positive or negative snippets 'y':

```
y = sentiment_data
```

### Training and Testing Data

So now we have X and y, which we can feed into a model. However, if we want to evaluate
our model after training, we need to have unseen data it hasn't been exposed to that we
can test it on.
For this reason, I'm going to split the data into a training set and a testing set.
Usually, training data makes up 60-90% of the total data, and testing data about
10-20%. For this exercise, I am going to split things 80 : 20.
(Sometimes, a third set known as a validation set can also be useful to decide between
different versions of a model.)

```
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, train_size = 0.8, shuffle = True)
```

I also make sure to shuffle the data as currently, the positive and negative data is simply
stacked one on top of the other. (This can also be done with two arrays using c = list(zip(X,y)) ,
random.shuffle(c) , X, y = zip(\*c) )

Cool! We're just about ready to run some models.

## Running and Comparing ML models

Running the models, once you have your data sorted, is probably the most straightforward
part. You can change the model parameters and there are other ways to optimise these
parameters, but for now I'm just going to use the default settings.

### Logistic Regression

```
from sklearn.linear_model import LogisticRegression
clf1 = LogisticRegression(random_state = 0, solver = 'lbfgs').fit(X_train, y_train)
clf1.score(X_train, y_train)
clf1_pred = clf1.predict(X_test)
acc_score1 = metrics.accuracy_score(y_test, clf1_pred)
print('Accuracy Classification Score LR: {}'.format(acc_score1))
```

Once the model is trained on the training set data, the test sets are used to predict
and test the accuracy of the model. I compared the accuracy over three different models.

Naive Bayes performed better than linear regression and support vector machines.

```
Accuracy Classification Score Linear Regression: 0.7613689639006095
Accuracy Classification Score SVM: 0.7524613220815752
Accuracy Classification Score Naïve Bayes: 0.7641819034224098
```

Finally, just to note, running your code on the full dataset whenever changes are made
to it can be long and tedious, especially when debugging. It can be useful to just load
the first part of the dataset and work with that.

```
raw_pos = np.loadtxt(f, delimiter="\n", dtype = np.str)[:100]
```

This was written after taking Comp 550 - Natural Language Processing at McGill University.
The exercise and some of the definitions were taken from Jackie Cheung's course.
2020-10-10
