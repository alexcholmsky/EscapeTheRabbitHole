import parameters
import selenium
from time import sleep
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
import openpyxl as xl
import re
# setup
wb = xl.load_workbook('python_test.xlsx')
sheet = wb['Sheet1']

# search
driver = webdriver.Chrome('/Users/acac0/OneDrive/Desktop/chromedriver.exe')
driver.get('https://www.google.ca/')
