import requests
import json

class TestRequest:

    def __init__(self, url):
        self.url = url

    def test_post(self, route, body):
        res = requests.post(f"http://{self.url}/auth/{route}", json=body)
        return res.json()


if __name__ == "__main__":
    url = 'http://demo.sgberjangka.com/tempstatement.php'
    cookies = {'PHPSESSID': 'n03c5a2trsdjtd3u57u4i105d7', 'SERVERID': 'supra'}
    r = requests.get(url, cookies=cookies)
    print(r)
