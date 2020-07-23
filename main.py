# -*- coding: utf-8 -*-
"""
Created on Thu Jul 23 00:58:20 2020

@author: armyv
"""


from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import io

options = Options()
#options.add_argument(
#    '--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1')
#options.add_argument("--headless")
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option('useAutomationExtension', False)
options.add_argument("start-maximized")



driver = webdriver.Chrome(options=options)
driver.execute_cdp_cmd(
            "Page.addScriptToEvaluateOnNewDocument",
            {
                "source": """
        Object.defineProperty(window, 'navigator', {
            value: new Proxy(navigator, {
              has: (target, key) => (key === 'webdriver' ? false : key in target),
              get: (target, key) =>
                key === 'webdriver'
                  ? undefined
                  : typeof target[key] === 'function'
                  ? target[key].bind(target)
                  : target[key]
            })
        })
                  """
            },
        )
original_user_agent_string = driver.execute_script(
            "return navigator.userAgent"
        )
driver.execute_cdp_cmd(
            "Network.setUserAgentOverride",
            {
                "userAgent": original_user_agent_string.replace("Headless", ""),
            },
        )



driver.get('https://www.bet365.com/#/AS/B1/')
