---
title: "🗞️ Scraping News Headlines"
published: 2025-02-15
description: 'Building an automatic daily news scraper to collect the top 3 headlines from Al Jazeera, The BBC, Le Monde, and The Economist'
image: './cafe.png'
tags: [beautiful soup, web scraping, dataframes, pandas, matplotlib, data]
category: 'just for fun'
draft: false 
lang: ''
---

[A Daily News Scraper](https://raphaelletseng.github.io/news_autoscraper/):

<iframe src="https://raphaelletseng.github.io/news_autoscraper/" frameBorder="0" style="width: 100%; height: 450px; background-color: white"></iframe>

## Motivation
I built this news scraper to compare what different news organisations are writing about, and what each deems worthy of being in their daily headlines. The goal for this project is to eventually add more diverse news sources, to get a better view of what's newsworthy around the world. 

The repository for this project can be found [here](https://github.com/raphaelletseng/news_autoscraper/tree/main).

## Scraping a Website with Beautiful Soup
Using beautiful soup to scrape a website just involves a little digging into a website's DOM to find relevant tags and, to build a dataset, writing a couple of loops. However, not all websites are built the same, so although the general format of my script remained similar, it had to be tweaked across news organisations. While The Economist had a straightforward section `id` called `'new-relic-top-stories`', the BBC div I was looking for had a `data-testid` called `'vermont-section'`. For the BBC, I had to skip a couple headlines that shared the same attributes but did not contain relevant information, Al Jazeera had things in duplicates that required some cleaning, and for Le Monde, it was easier to hard code the tag attributes rather than write any kind of loop. Reuters identified my script as a bot after an initial pass (and so may require a more sophisticated touch to scrape), and the South China Morning Post had nothing but random strings as class names making it rather difficult to find what I was looking for. 

My code takes the headline as well as the url for the article, and appends them to an existing csv:

```
df = pd.DataFrame(data, index= [0])
try:
    existing_df = pd.read_csv("updated_headlines.csv")
except:
    existing_df = pd.DataFrame([])

combined = pd.concat([df, existing_df], ignore_index=True)

combined.to_csv("updated_headlines.csv", index=False)
```

> `ignore_index: bool, defult=False`  - If True, do not use the index values along the concatenation axis. The resulting axis will be labeled 0, …, n - 1. This is useful if you are concatenating objects where the concatenation axis does not have meaningful indexing information. Note the index values on the other axes are still respected in the join.
`
Running the different scripts for each news organisation creates the csv `'updated_headlines.csv'`. 

I was able to write this code thanks to Jonathan Soma's page on [scraping](https://www.jonathansoma.com/everything/scraping/convert-web-pages-to-csv/#__tabbed_1_1), where he goes into more depth on more advanced techniques. 

## Creating an Automation with Github Workflows

I wasn't really looking to have to run a script everytime I wanted to check the news, so the next step was to automate the updates to this csv. Luckily, [github workflows exists](https://github.com/jsoma/lede-2023-auto-scraper/blob/main/.github/workflows/main.yml
), so I added a `.github/workflows/main.yml` to do this step for me. 

```
on:
    schedule:
        cron: '30 5 * * *'
```

> `schedule` allows you to run a workflow at a specified UTC time according to [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). In my case, I run these workflows daily at 5:30am UTC. The * means 'all valid values'. 

In the future, I could seperate each of the scripts into steps, so that the entire workflow doesn't fail if only a single part fails. 

## Displaying Data

This table is available in a simple iframe in the repo's index.html thanks to [datawrapper](https://www.datawrapper.de/). To get this step to work, you first have to host your csv with github pages to make it publically accessible. And then you can have the datawrapper consistenly update. 

## Transforming Data with Pandas

Once I'd let this autoscraper run for a couple of weeks, I had enough data to start analysing. I experimented in a jupyter notebook using a subset of the full dataset. In order to parse any of the data, my dataframe first required some cleaning. I split the urls from the titles: 
```
df[['headline_1_title', 'headline_1_url']] = df['headline_1'].str.split('https://', n=1, expand=True)
df.drop(['headline_1'], axis=1, inplace=True)
```

Then I melted the dataframe so that every headline had its own row. I wanted to idenitfy counts and keywords in these headlines to get an idea of what topics news organisations had been reporting on the most between cetain dates. I used [nltk's](https://www.nltk.org/search.html?q=stopwords) corpus of stopwords and stripped the headlines of punctuation down to key words:

```
rom nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('punkt_tab')

import re

def remove_punct(text):
    no_punct = "".join([c for c in text if c not in string.punctuation])
    return no_punct

def remove_stopwords(text):
    words = word_tokenize(text)
    without_stopwords = " ".join([w for w in words if w.lower() not in stopwords.words('english')])
    return without_stopwords
```

This caused a headline like `Elon Musk’s xAI goes after OpenAI` to become `Elon Musk ’ xAI goes OpenAI` and `Trump wastes no time in reigniting trade wars` to become `Trump wastes time reigniting trade wars` (which, I recognise, does change the meaning of the sentence).

Then I used a Counter to build a new data frame with word counts across the stripped headlines:

```
from collections import Counter

all_headlines = ''.join(final_df['headline'])     
words_counts = Counter(word_tokenize(all_headlines))
most_common_words = words_counts.most_common(20)
print(most_common_words)

e.g:
[('’', 77), ('Trump', 45), ('Gaza', 26), ('Ukraine', 24), ('‘', 22), ('Israel', 19),
 ('US', 19), ('Lebanon', 14), ('says', 14), ('Donald', 13), ('Harris', 13), ('ceasefire', 11), 
 ('election', 11), ('Hezbollah', 10), ('war', 9), ('new', 9), ('Musk', 8), ('truce', 7), 
 ('Gaetz', 7), ('attacks', 7)]
```

The apostrophes and quotations weren't getting stripped by nltk's punctuation stripper so I removed them from this list manually. And then I used matplotlib to create a pie chart of the result:

<img src="https://raw.githubusercontent.com/raphaelletseng/news_autoscraper/refs/heads/main/top_10_words_2024-11-01%2005%3A37%3A41.760206.png"/>


In short:

```
original_df = pd.read_csv('updated_headlines.csv', parse_dates=['scraped_at'])
filtered_june = original_df.loc[(original_df['scraped_at'] >= '2024-06-01') & (original_df['scraped_at'] <= '2024-07-01')]

def transform_dataframe(df):
    # transform df to get headlines as rows

def clean_data(df):
    # remove stopwords and punctuation

def get_most_common_words(df):
    # word_tokenize headlines and count words

def main(df):
    # run transform, clean, and tokenize

most_common_words_df = main(filtered_june)

def draw_pie(full_df, common_words_df):
    # draw pie chart from most_common_words_df

draw_pie(filtered_june, most_common_words_df)
```

## Some Findings

These [pie charts](https://github.com/raphaelletseng/news_autoscraper/blob/main/pie_charts.ipynb) demonstrate that across these four news organisations, 2025 news headlines have been dominated by Trump and Gaza. There's been an increase in talk about tariffs since Trump came to power in January 2025. And Musk is also regularly appearing. In 2024, it was war, Gaza, Ukraine, Isreal, Trump, the US. Unsurprisingly, news organisations report alot about what someone 'says'.

If we drill down to look at trends across 2024 for specific news organisations, we see that the BBC's most occuring word was 'Trump' at 20.71% of the top 10 words. Al Jazeera's was 'Gaza' (28.01%) with 'Israel' and 'Israeli' making up a further 26.73% and 'killed' and 'kills' accounting for 14.19%. Le Monde did a lot of reporting on what was being said with 'says' coming out on top at 15.61%, and 'Trump' at 12.42%. 'France' and 'French' followed with an aggregate of 21.84%. The Economist had 'Donald' and 'Trump' making up 26.11% of their top 10 words, and 'America' making up another 14.16%. 'Economy' (6.19%), was fittingly also present. 

<img src="https://raw.githubusercontent.com/raphaelletseng/news_autoscraper/refs/heads/main/2024_graphs.png" alt="pie charts of top 10 most occuring words in headlines across four organisations"/>
<em>Pie Charts displaying the Top 10 Most Common Words in 2024 Headlines for The BBC, Al Jazeera, The Economist, and Le Monde</em>


## Future Directions

This was a fun exercise in learning how to scrape websites, and tinker with dataframes. Ideally, I'd want to track what different news organisations are reporting on across time, rather than aggregating them all. It'd also be fun to improve the UI of this data, so that you can click directly on a headline to see the article. There's also something to be said about the meaning of ranking headlines as 1, 2, 3 as many news organisations tend to cycle through a series of headlines throughout the day. 

![cafe-doodle-footer](./cafe.png)