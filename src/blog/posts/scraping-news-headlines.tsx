import { Box, Typography, Link, Paper, Divider } from '@mui/material';

const content = (
  <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
    <Typography variant="h5" gutterBottom>
      <Link
        href="https://raphaelletseng.github.io/news_autoscraper/"
        target="_blank"
        rel="noopener"
        underline="hover"
      >
        A Daily News Scraper
      </Link>
    </Typography>

    <Box sx={{ my: 3 }}>
      <iframe
        src="https://raphaelletseng.github.io/news_autoscraper/"
        frameBorder="0"
        style={{ width: '100%', height: 450, backgroundColor: 'white' }}
        title="Daily News Scraper"
      />
    </Box>

    <Typography variant="h5" gutterBottom sx={{ marginTop: 3, marginBottom: 2 }}>
      Motivation
    </Typography>
    <Typography>
      I built this news scraper to compare what different news organisations are writing about, and
      what each deems worthy of being in their daily headlines. The goal for this project is to
      eventually add more diverse news sources, to get a better view of what's newsworthy around the
      world.
      <br /> <br />
      The repository for this project can be found{' '}
      <Link
        href="https://github.com/raphaelletseng/news_autoscraper/tree/main"
        target="_blank"
        rel="noopener"
        underline="hover"
      >
        here
      </Link>
      .
    </Typography>

    <Typography variant="h5" gutterBottom sx={{ marginTop: 3, marginBottom: 2 }}>
      Scraping a Website with Beautiful Soup
    </Typography>
    <Typography>
      Using Beautiful Soup to scrape a website just involves a little digging into a website's DOM
      to find relevant tags and, to build a dataset, writing a couple of loops. However, not all
      websites are built the same, so although the general format of my script remained similar, it
      had to be tweaked across news organisations.
    </Typography>
    <Typography>
      While The Economist had a straightforward section <code>id</code> called
      <code>'new-relic-top-stories'</code>, the BBC div I was looking for had a{' '}
      <code>data-testid</code> called <code>'vermont-section'</code>. For the BBC, I had to skip a
      couple headlines that shared the same attributes but did not contain relevant information. Al
      Jazeera had things in duplicates that required some cleaning, and for Le Monde, it was easier
      to hard code the tag attributes rather than write any kind of loop. Reuters identified my
      script as a bot after an initial pass (and so may require a more sophisticated touch to
      scrape), and the South China Morning Post had nothing but random strings as class names,
      making it rather difficult to find what I was looking for.
      <br /> <br />
      My code takes the headline as well as the URL for the article and appends them to an existing
      CSV:
    </Typography>

    <Paper
      variant="outlined"
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        my: 2,
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
      }}
    >
      {`df = pd.DataFrame(data, index=[0])
try:
    existing_df = pd.read_csv("updated_headlines.csv")
except:
    existing_df = pd.DataFrame([])

combined = pd.concat([df, existing_df], ignore_index=True)

combined.to_csv("updated_headlines.csv", index=False)`}
    </Paper>

    <Typography>
      <strong>ignore_index: bool, default=False</strong> – If True, do not use the index values
      along the concatenation axis. The resulting axis will be labeled 0, …, n - 1. This is useful
      if you are concatenating objects where the concatenation axis does not have meaningful
      indexing information. Note the index values on the other axes are still respected in the join.
      <br /> <br />
      Running the different scripts for each news organisation creates the CSV{' '}
      <code>'updated_headlines.csv'</code>.
      <br /> <br />I was able to write this code thanks to Jonathan Soma's page on{' '}
      <Link
        href="https://www.jonathansoma.com/everything/scraping/convert-web-pages-to-csv/#__tabbed_1_1"
        target="_blank"
        rel="noopener"
        underline="hover"
      >
        scraping
      </Link>
      , where he goes into more depth on more advanced techniques.
    </Typography>

    <Typography variant="h5" gutterBottom sx={{ marginTop: 3, marginBottom: 2 }}>
      Creating an Automation with Github Workflows
    </Typography>

    <Typography>
      I wasn't really looking to have to run a script every time I wanted to check the news, so the
      next step was to automate the updates to this CSV. Luckily,{' '}
      <Link
        href="https://github.com/jsoma/lede-2023-auto-scraper/blob/main/.github/workflows/main.yml"
        target="_blank"
        rel="noopener"
        underline="hover"
      >
        GitHub workflows exist
      </Link>
      , so I added a <code>.github/workflows/main.yml</code> to do this step for me.
    </Typography>

    <Paper
      variant="outlined"
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        my: 2,
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
      }}
    >
      {`on:
    schedule:
        cron: '30 5 * * *'`}
    </Paper>

    <Typography>
      <strong>schedule</strong> allows you to run a workflow at a specified UTC time according to{' '}
      <Link
        href="https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07"
        target="_blank"
        rel="noopener"
        underline="hover"
      >
        POSIX cron syntax
      </Link>
      . In my case, I run these workflows daily at 5:30am UTC. The <code>*</code> means “all valid
      values”.
      <br /> <br />
      In the future, I could separate each of the scripts into steps, so that the entire workflow
      doesn't fail if only a single part fails.
    </Typography>

    <Typography variant="h5" gutterBottom sx={{ marginTop: 3, marginBottom: 2 }}>
      Displaying Data
    </Typography>

    <Typography>
      This table is available in a simple iframe in the repo's <code>index.html</code> thanks to{' '}
      <Link href="https://www.datawrapper.de/" target="_blank" rel="noopener" underline="hover">
        Datawrapper
      </Link>
      . To get this step to work, you first have to host your CSV with GitHub Pages to make it
      publicly accessible, and then you can have Datawrapper consistently update.
    </Typography>

    <Typography variant="h5" gutterBottom sx={{ marginTop: 3, marginBottom: 2 }}>
      Transforming Data with Pandas
    </Typography>

    <Typography>
      Once I'd let this autoscraper run for a couple of weeks, I had enough data to start analysing.
      I experimented in a Jupyter notebook using a subset of the full dataset. In order to parse any
      of the data, my dataframe first required some cleaning. I split the URLs from the titles:
    </Typography>

    <Paper
      variant="outlined"
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        my: 2,
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
      }}
    >
      {`df[['headline_1_title', 'headline_1_url']] = df['headline_1'].str.split('https://', n=1, expand=True)
df.drop(['headline_1'], axis=1, inplace=True)`}
    </Paper>

    <Typography>
      Then I melted the dataframe so that every headline had its own row. I wanted to identify
      counts and keywords in these headlines to get an idea of what topics news organisations had
      been reporting on the most between certain dates. I used{' '}
      <Link
        href="https://www.nltk.org/search.html?q=stopwords"
        target="_blank"
        rel="noopener"
        underline="hover"
      >
        nltk’s corpus of stopwords
      </Link>{' '}
      and stripped the headlines of punctuation down to keywords:
    </Typography>

    <Paper
      variant="outlined"
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        my: 2,
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
      }}
    >
      {`from nltk.corpus import stopwords
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
    return without_stopwords`}
    </Paper>

    <Typography>
      This caused a headline like <em>"Elon Musk’s xAI goes after OpenAI"</em> to become{' '}
      <em>"Elon Musk ’ xAI goes OpenAI"</em> and{' '}
      <em>"Trump wastes no time in reigniting trade wars"</em> to become{' '}
      <em>"Trump wastes time reigniting trade wars"</em> (which, I recognize, does change the
      meaning of the sentence).
    </Typography>

    <Typography variant="h5" gutterBottom sx={{ marginTop: 3, marginBottom: 2 }}>
      Word Frequency Analysis
    </Typography>

    <Typography>
      Then I used a <code>Counter</code> to build a new DataFrame with word counts across the
      stripped headlines:
    </Typography>

    <Paper
      variant="outlined"
      sx={{
        p: 2,
        my: 2,
        bgcolor: 'background.paper',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
      }}
    >
      {`from collections import Counter

all_headlines = ''.join(final_df['headline'])     
words_counts = Counter(word_tokenize(all_headlines))
most_common_words = words_counts.most_common(20)
print(most_common_words)

e.g:
[('’', 77), ('Trump', 45), ('Gaza', 26), ('Ukraine', 24), ('‘', 22), ('Israel', 19),
 ('US', 19), ('Lebanon', 14), ('says', 14), ('Donald', 13), ('Harris', 13), ('ceasefire', 11), 
 ('election', 11), ('Hezbollah', 10), ('war', 9), ('new', 9), ('Musk', 8), ('truce', 7), 
 ('Gaetz', 7), ('attacks', 7)]`}
    </Paper>

    <Typography>
      The apostrophes and quotation marks weren’t getting stripped by nltk’s punctuation cleaner, so
      I removed them from the list manually. Then I used <strong>matplotlib</strong> to generate a
      pie chart of the result:
    </Typography>

    <Box sx={{ my: 3 }}>
      <img
        src="https://raw.githubusercontent.com/raphaelletseng/news_autoscraper/refs/heads/main/top_10_words_2024-11-01%2005%3A37%3A41.760206.png"
        alt="Top 10 Word Pie Chart"
        style={{ width: '100%', maxWidth: '100%', display: 'block', borderRadius: 4 }}
      />
    </Box>

    <Typography>In short: </Typography>

    <Paper
      variant="outlined"
      sx={{
        p: 2,
        my: 2,
        bgcolor: 'background.paper',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
      }}
    >
      {`original_df = pd.read_csv('updated_headlines.csv', parse_dates=['scraped_at'])
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

draw_pie(filtered_june, most_common_words_df)`}
    </Paper>

    <Typography variant="h5" gutterBottom sx={{ marginTop: 3, marginBottom: 2 }}>
      Some Findings
    </Typography>

    <Typography paragraph>
      These{' '}
      <Link
        href="https://github.com/raphaelletseng/news_autoscraper/blob/main/pie_charts.ipynb"
        target="_blank"
        rel="noopener"
        underline="hover"
      >
        pie charts
      </Link>{' '}
      show that in 2025, headlines were dominated by <strong>Trump</strong> and{' '}
      <strong>Gaza</strong>. Mentions of tariffs rose after Trump’s return in January 2025. Elon
      Musk also continued appearing frequently.
    </Typography>

    <Typography>
      Looking at trends across 2024:
      <ul>
        <li>
          <strong>BBC</strong>: "Trump" appeared in 20.71% of their top 10 words.
        </li>
        <li>
          <strong>Al Jazeera</strong>: "Gaza" led with 28.01%, with “Israel” and related terms close
          behind.
        </li>
        <li>
          <strong>Le Monde</strong>: "says" and "Trump" topped the list, followed by “France” and
          “French.”
        </li>
        <li>
          <strong>The Economist</strong>: "Donald" and "Trump" together made up 26.11%. “America”
          followed with 14.16%.
        </li>
      </ul>
      All four organisations included the words <strong>Trump</strong> and either{' '}
      <strong>US</strong> or <strong>America</strong>. Interestingly, "Gaza" did not appear in The
      Economist's top 10.
    </Typography>

    <Box sx={{ my: 3 }}>
      <img
        src="https://raw.githubusercontent.com/raphaelletseng/news_autoscraper/refs/heads/main/2024_graphs.png"
        alt="Pie charts of top 10 most occurring words in headlines across four organisations"
        style={{ width: '100%', maxWidth: '100%', display: 'block', borderRadius: 4 }}
      />
      <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
        Pie Charts displaying the Top 10 Most Common Words in 2024 Headlines for The BBC, Al
        Jazeera, The Economist, and Le Monde
      </Typography>
    </Box>

    <Typography variant="h5" gutterBottom sx={{ marginTop: 3, marginBottom: 2 }}>
      Future Directions
    </Typography>

    <Typography>
      This was a fun exercise in learning how to scrape websites and work with dataframes. Ideally,
      I’d like to track what different news organisations are reporting on over time, rather than
      aggregating everything. Improving the UI with clickable headlines and timestamped cycles would
      also be a great next step.
    </Typography>
    <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
  </Box>
);

export default {
  slug: 'scraping-news-headlines',
  title: '📰 Scraping News Headlines',
  date: '2025-02-15',
  description:
    'I built this news scraper to compare what different news organisations are writing about, and what each deems worthy of being in their daily headlines.',
  tags: ['cs'],
  content,
};
