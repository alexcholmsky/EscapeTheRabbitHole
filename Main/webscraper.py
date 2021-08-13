from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import openpyxl as xl
import re
# setup
wb = xl.load_workbook('python_test.xlsx')
sheet = wb['Sheet1']

# search
driver = webdriver.Chrome('/Users/acac0/OneDrive/Desktop/chromedriver.exe')
driver.get('https://www.google.ca/')
