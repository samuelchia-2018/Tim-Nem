import requests
from bs4 import BeautifulSoup
import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/getmarketcap/<string:companyname>")
def getmarketcap(companyname):
  assert companyname == request.view_args['companyname']
  URL = "https://sg.finance.yahoo.com/quote/" + companyname
  page = requests.get(URL)
  try:
      soup = BeautifulSoup(page.content, 'html.parser')
      result = soup.find_all('table', class_='W(100%) M(0) Bdcl(c)')[0]
      market_cap = result.find_all('span', attrs={'data-reactid': '85'})[0]
      market_cap_value = market_cap.contents[0]
      market_cap_last_digit = market_cap_value[-1]
      market_cap_value_2 = market_cap_value[0: len(market_cap_value)-1]
      if market_cap_last_digit == "T":
          toreturn = float(market_cap_value_2) * 1000000000000
          return {"Marketcapvalue": str(toreturn)}
      elif market_cap_last_digit == "M":
          toreturn = float(market_cap_value_2) * 1000000
          return {"Marketcapvalue": str(toreturn)}
      elif market_cap_last_digit == "B":
          toreturn = float(market_cap_value_2) * 1000000000
          return {"Marketcapvalue": str(toreturn)}
      return {"Marketcapvalue": market_cap_value}
  except Exception as e:
      print('did you print write the correct ticker?')
      print(f'error is {e}')
      return 400


if __name__ == "__main__":
    app.run('localhost', port=9000, debug=True)
