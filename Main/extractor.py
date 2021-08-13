from sklearn.feature_extraction.text import CountVectorizer
import spacy
from transformers import AutoModel, AutoTokenizer
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer
import json

text = """
         The Battle of Blenheim was fought on 13 August 1704 during the War of the Spanish Succession. The French were seeking to knock Austria out of the war by seizing its capital, Vienna. An army of the reconstituted Grand Alliance, led by the Duke of Marlborough, marched south from the Dutch Republic to the Danube.
      """
# n_gram = keyword where n_gram_range = (lower boundary of number of words, upper boundary)
n_gram_range = (2, 4)

# stop words are words that are presumed to be uniformative, ex. "like", "him", "the"
stop_words = "english"

# Extract candidate words/phrases
# CountVectorizer is a sklearn function that converts words to vectors as per the Bag of Words analogy (frequency of words in text)
count = CountVectorizer(ngram_range=n_gram_range, stop_words=stop_words).fit([text])
all_candidates = count.get_feature_names()

# FINDING NOUNS

# Load the Spacy model for NLP
nlp = spacy.load('en_core_web_sm')
doc = nlp(text)

# Create a set for noun chunks (base noun phrases) within the doc
# Uses the spacy built-in models to find noun chunks
noun_phrases = set(chunk.text.strip().lower() for chunk in doc.noun_chunks)

# Create an empty set (for nouns within in the text), only want unique values
nouns = set()
# doc refers to the text
# Uses spacy model to determine whether word is noun and add to noun set
for token in doc:
    if token.pos_ == "NOUN":
        nouns.add(token.text)

# Joins the noun and noun_phrases set into an all_nouns set
all_nouns = nouns.union(noun_phrases)

# Filter for candidate that are in both all_nouns and all_candidates, add to list candidates
candidates = list(filter(lambda candidate: candidate in all_nouns, all_candidates))

# CALCULATING BEST KEYWORDS

# Defining the BERT NLP Embedding model used
# Encodes each word as a specific vector in relation to other words, values are determined through semantics learned by the BERT model
model = SentenceTransformer('distilbert-base-nli-mean-tokens')
text_embedding = model.encode([doc])
candidate_embeddings = model.encode(candidates)

# Use cosine similarity between text and candidate to determine proximity, and therefore top candidates
# Generate top 5 keywords
top_k = 5
distances = cosine_similarity(text_embedding, candidate_embeddings)
keywords = [candidates[index] for index in distances.argsort()[0][-top_k:]]

print(keywords)

keyword = {
    'keywords':keywords,
}

with open('Main/export.js', 'w') as out_file:
  out_file.write('var export = %s;' % json.dumps(keyword))