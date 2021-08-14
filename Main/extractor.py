from sklearn.feature_extraction.text import CountVectorizer
import spacy
from transformers import AutoModel, AutoTokenizer
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer
import json

text = """
         Supervised learning is the machine learning task of 
         learning a function that maps an input to an output based 
         on example input-output pairs.[1] It infers a function 
         from labeled training data consisting of a set of 
         training examples.[2] In supervised learning, each 
         example is a pair consisting of an input object 
         (typically a vector) and a desired output value (also 
         called the supervisory signal). A supervised learning 
         algorithm analyzes the training data and produces an 
         inferred function, which can be used for mapping new 
         examples. An optimal scenario will allow for the algorithm 
         to correctly determine the class labels for unseen 
         instances. This requires the learning algorithm to  
         generalize from the training data to unseen situations 
         in a 'reasonable' way (see inductive bias).
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
top_k = 1
distances = cosine_similarity(text_embedding, candidate_embeddings)
keywords = [candidates[index] for index in distances.argsort()[0][-top_k:]]

print(keywords)