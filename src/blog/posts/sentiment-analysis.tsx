import { Divider } from '@mui/material';

const content = (
  <div>
    <p>
      Sentiment Analysis is a subset of Natural Language Processing (NLP), a branch of AI that is
      concerned with understanding, modelling and engineering natural language. Sentiment analysis
      refers to using NLP to classify and study texts to determine whether data is positive or
      negative (or neutral).
    </p>
    <p>
      In this particular, introductory example, I am just going to be training classifiers to
      identify positive and negative sentiments. The goal is to play around with different kinds of
      classifiers, in order to try and determine which ML model works best for sentence-level
      sentiment classification. I will be using scikit-learn and nltk.
    </p>
    <p>
      I am going to be using the movie review dataset from Bo Pang and Lillian Lee's 'Seeing stars:
      Exploiting class relationships for sentiment categorization with respect to rating scales.'
      (2005) which can be found
      <a href="http://www.cs.cornell.edu/people/pabo/movie-review-data"> here</a>. It is derived
      from the Rotten Tomatoes webpage. The data comes in two files, each containing 5331 text
      snippets. One contains positive snippets and the other negative snippets. Each line
      corresponds to one snippet.
    </p>
    <h2>Preprocessing Text</h2>
    <p>
      A key part when dealing with language and text data is the preprocessing. The point is to
      extract the key information from the snippets and remove noise. I am going to write a few
      functions to do just this. Firstly, to strip the punctuation:
    </p>
    <pre>
      <code>
        def remove_punctuation(text): <br />
        &nbsp;&nbsp;no_punct = "".join([c for c in text if c not in string.punctuation]) <br />
        &nbsp;&nbsp;return no_punct
      </code>
    </pre>
    <p>
      Next, I will remove stopwords. Stopwords are common words in a natural language. They
      don&apos;t necessarily add much value to the fundamental meaning of the text. Some examples
      include &apos;the&apos;, &apos;is&apos;, &apos;to&apos;, &apos;at&apos;.
    </p>
    <pre>
      <code>
        from nltk.corpus import stopwords <br />
        <br />
        def remove_stopwords(text): <br />
        &nbsp;&nbsp;words = word_tokenize(text) <br />
        &nbsp;&nbsp;words_without_stopwords = "".join([w for w in words if w not in
        stopwords.words(&apos;english&apos;)])
        <br />
        &nbsp;&nbsp;return words_without_stopwords
      </code>
    </pre>
    <p>
      When preprocessing text data, often we can choose between stemming or lemmatizing the data.
      Stemming is more aggressive than lemmatizing. It involves entirely cutting off the affix of a
      word to find the stem. The most common method for this is the Porter Stemmer method.
      Lemmatizing removes affixes but recovers the lemma (the form you&apos;d look up in the
      dictionary). It leaves us with words that still exist, where stemming might give us
      &apos;poni&apos; rather than &apos;ponies&apos;, or &apos;pulver&apos; rather than
      &apos;pulverized&apos;.
    </p>
    <p>
      I choose to go with lemmatizing for this exercise because time is not of any concern.
      Lemmatizing can be slower than stemming. Also, since stemming is so aggressive, I worry that
      meaning might be lost and I don&apos;t want to run that risk.
    </p>
    <pre>
      <code>
        from nltk.stem import WordNetLemmatizer
        <br />
        lemmatizer = WordNetLemmatizer()
        <br />
        def word_lemmatizer(text): <br />
        &nbsp;&nbsp;&nbsp;&nbsp;lem_text= "".join([lemmatizer.lemmatize(i) for i in text])
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;return lem_text
      </code>
    </pre>
    <p>
      These three functions work on a single sentence. In order to apply them to an array of
      sentences I will write two more simple functions:
    </p>
    <pre>
      <code>
        def preprocess(sentence): <br />
        &nbsp;&nbsp;&nbsp;&nbsp;t = remove_punctuation(sentence)
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;t = remove_stopwords(t)
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;t = word_lemmatizer(t)
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;return t <br /> <br />
        def preprocess_array(text_array): <br /> &nbsp;&nbsp;&nbsp;&nbsp;new_str = [] <br />{' '}
        &nbsp;&nbsp;&nbsp;&nbsp;for i in text_array: <br /> &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;new_str.append(preprocess(i)) return new_str
      </code>
    </pre>
    <h2>Dealing with Data</h2>
    <p>
      Now, we can turn our attention to our actual datasets - the movie reviews. I am going to read
      the positive and negative data into two different arrays using numpy. Every sentence (or every
      text snippet) is handily separated by a newline, and fills a new entry in our array:
    </p>
    <pre>
      <code>
        with open('rt-polarity.pos') as f: <br /> &nbsp;&nbsp;&nbsp;&nbsp;raw_pos = np.loadtxt(f,
        delimiter="\n", dtype = np.str)
        <br />
        sentiment_pos = [1]*5331
        <br />
        pos_np = np.array(sentiment_pos)
      </code>
    </pre>
    <p>
      The intention is to train a model on this data, so it's important to keep track of which
      snippets are positive and which are negative. To do this, I'm simply going to create a new
      array of equal length to each of the datasets, and initialise every entry with a 1 for the
      positive snippets, and a 0 for the negative snippets.
    </p>
    <p>Then we can join our two arrays together as follows:</p>
    <pre>
      <code>
        text_data = np.concatenate((raw_pos, raw_neg))
        <br />
        sentiment_data = np.concatenate((pos_np , neg_np))
      </code>
    </pre>
    <p>We can run the earlier preprocess functions on our text_data array:</p>
    <pre>
      <code>preprocess_array(text_data)</code>
    </pre>
    <p>
      And now we should have a cleaned array of text entries and a corresponding array of 1s and 0s
      denoting positive or negative sentiments.
    </p>
    <h2>Setting up an ML Model</h2>
    <p>
      Machine Learning models can&apos;t understand text. So now we have to find a way to turn our
      arrays into something that can be understood by a model. We&apos;ve already extracted
      properties from the dataset by cleaning and lemmatizing it. Now we need to turn these features
      into a vector that can be used to train the classifier. This can be done in several ways eg.
      N-grams involve separating text into sequences of adjacent words.
    </p>
    <p>
      Machine learning models generally accept two arrays. In this case, our model needs a training
      vector of features / data. These are the sentences of movie reviews, but transformed into
      numbers so the model can understand it. Our model also needs a corresponding array which tells
      it the &apos;solution&apos; of sorts, to the problem. In our case, we need to tell the model
      which sentences are positive and negative so it can learn - we feed it the array of 1s and 0s
      from earlier.
    </p>
    <p>Now, how do we turn our text into a feature vector? Scikit-learn has a useful tool:</p>
    <pre>
      <code>
        from sklearn.feature_extraction.text import CountVectorizer <br />
        vectorizer=CountVectorizer()
        <br />
        def vectorize(text):
        <br /> &nbsp;&nbsp;&nbsp;&nbsp; X = (vectorizer.fit_transform(text))
        <br /> &nbsp;&nbsp;&nbsp;&nbsp; return X
      </code>
    </pre>
    <p>
      There are plenty of different ways you can vectorize your data. In this case, my features are
      simply going to be unigram counts - words in isolation. I apply the above function to my
      text_data of sentences:
    </p>
    <pre>
      <code>
        X = vectorize(text_data) <br />X = X.toarray()
      </code>
    </pre>
    <p>
      And for convenience, I am also going to rename my &apos;sentiment_data&apos; of 1s and 0s
      corresponding to positive or negative snippets &apos;y&apos;:
    </p>
    <pre>
      <code>y = sentiment_data</code>
    </pre>
    <h3>Training and Testing Data</h3>
    <p>
      So now we have X and y, which we can feed into a model. However, if we want to evaluate our
      model after training, we need to have unseen data it hasn&apos;t been exposed to that we can
      test it on. For this reason, I&apos;m going to split the data into a training set and a
      testing set. Usually, training data makes up 60-90% of the total data, and testing data about
      10-20%. For this exercise, I am going to split things 80 : 20. (Sometimes, a third set known
      as a validation set can also be useful to decide between different versions of a model.)
    </p>
    <pre>
      <code>
        from sklearn.model_selection import train_test_split
        <br /> &nbsp;&nbsp;&nbsp;&nbsp; X_train, X_test, y_train, y_test = train_test_split(X, y,
        test_size = 0.2, train_size = 0.8, shuffle = True)
      </code>
    </pre>
    <p>
      I also make sure to shuffle the data as currently, the positive and negative data is simply
      stacked one on top of the other. (This can also be done with two arrays using c =
      list(zip(X,y)) , random.shuffle(c) , X, y = zip(*c) )
    </p>
    <p>Cool! We&apos;re just about ready to run some models.</p>
    <h2>Running and Comparing ML models</h2>
    <p>
      Running the models, once you have your data sorted, is probably the most straightforward part.
      You can change the model parameters and there are other ways to optimise these parameters, but
      for now I&apos;m just going to use the default settings.
    </p>
    <h3>Logistic Regression</h3>
    <pre>
      <code>
        from sklearn.linear_model import LogisticRegression <br />
        clf1 = LogisticRegression(random_state = 0, solver = &apos;lbfgs&apos;).fit(X_train,
        y_train)
        <br />
        clf1.score(X_train, y_train)
        <br />
        clf1_pred = clf1.predict(X_test)
        <br />
        acc_score1 = metrics.accuracy_score(y_test, clf1_pred)
        <br />
        print(&apos;Accuracy Classification Score LR: {}
        &apos;.format(acc_score1))
      </code>
    </pre>
    <p>
      Once the model is trained on the training set data, the test sets are used to predict and test
      the accuracy of the model. I compared the accuracy over three different models.
    </p>
    <p> Naive Bayes performed better than linear regression and support vector machines. </p>
    <pre>
      <code>
        Accuracy Classification Score Linear Regression: 0.7613689639006095 <br />
        Accuracy Classification Score SVM: 0.7524613220815752 <br />
        Accuracy Classification Score Naïve Bayes: 0.7641819034224098
      </code>
    </pre>
    <p>
      Finally, just to note, running your code on the full dataset whenever changes are made to it
      can be long and tedious, especially when debugging. It can be useful to just load the first
      part of the dataset and work with that.
    </p>
    <pre>
      <code>raw_pos = np.loadtxt(f, delimiter="\n", dtype = np.str)[:100]</code>
    </pre>
    <Divider orientation="horizontal" sx={{ marginBottom: 2 }} flexItem />
    <p>
      This was written after taking Comp 550 - Natural Language Processing at McGill University. The
      exercise and some of the definitions were taken from Jackie Cheung&rsquo;s course. 2020-10-10
    </p>
  </div>
);

export default {
  slug: 'an-experiment-with-sentiment-analysis',
  title: 'An Experiment with Sentiment Analysis on Film Reviews',
  date: '2025-07-10',
  description: 'Classifying movie review snippets as positive or negative with ML',
  tags: ['cs'],
  content,
};
