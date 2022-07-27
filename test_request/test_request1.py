import requests
from requests.structures import CaseInsensitiveDict

url = "http://demo.sgberjangka.com/tempstatement.php"

headers = CaseInsensitiveDict()
headers["Cookie"] = "PHPSESSID=n03c5a2trsdjtd3u57u4i105d7; SERVERID=supra"


resp = requests.get(url, headers=headers)

print(resp.status_code)
