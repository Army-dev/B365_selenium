const ETFabi =[
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "tokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "percentages",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "routerAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "BNB",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "BuyTokenForETF",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "NumOfTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "TokenIndexMap",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOfETF",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "sellETFforBNB",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "uniswapV2Router",
      "outputs": [
        {
          "internalType": "contract IUniswapV2Router02",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]

  const RouterABI = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "ETFPurchased",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "ETFSold",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          }
        ],
        "name": "ChangePlatformFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "ETFcontracts",
            "type": "address"
          }
        ],
        "name": "InsertETF",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "PlatformFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "SBDAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "SellETF",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "ThreshHold",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "changeThreshHold",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "getPaymentForETF",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sbd",
            "type": "address"
          }
        ],
        "name": "setSBDAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "showBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "showETFAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "contracts",
            "type": "address"
          }
        ],
        "name": "showETFName",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "showETFOwnedByAddress",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ]






var charts=[];
function changeMenu(){
  var x =document.getElementsByClassName('sidebar')[0];
  x.style.display=='none'?x.style.display='initial':x.style.display='none'

}

function changeTab(id){
  var tabIDs=['home','catalogue','explore']
  tabIDs.forEach((id)=>{
    document.getElementById(id).style.display='none';
  })
  document.getElementById(id).style.display='initial';
  if(screen.width <1770){
  document.getElementsByClassName('sidebar')[0].style.display='none';}
}


async function exploreETF(etfName,contract,image){
  var balances = await getETFBalance(contract);
  CurrentETFLoaded = contract;
  await $.ajax({
    url:'/explore',
    data:{'address':etfName},
    contentType:'application/json',
    async:true,
    method:'GET',
    success: function(assets,names){
      document.getElementById('etfNameExplore').innerHTML="";
      document.getElementById('etfNameExplore').innerHTML=etfName+" Package";
      var rows=document.getElementsByClassName('tokens');
    while(rows.length>0){
      rows[0].parentNode.removeChild(rows[0]);
      charts.pop();
    }

    console.log(assets);
      var x = document.getElementById('etfdataexplore');
      var keys =Object.keys(assets);

      keys.sort();
      keys.forEach(async (key)=>{
      var indexNum=keys.indexOf(key);
      charts.push([`BINANCE:${key}USD|1M`]);
      var price = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${assets[key]}&vs_currencies=usd`);
      price = await price.json();
      price=`$${price[assets[key].toLowerCase()]['usd']}`;
      var row = document.createElement('tr');
      row.className='tokens'
      row.style.textAlign='center';
      var name = document.createElement('th');
      name.style.fontSize='12px';
      var rate = document.createElement('th');
      rate.style.fontSize='12px';
      var balance = document.createElement('td');
      balance.style.fontSize='12px';
      rate.innerHTML = price;
      balance.innerHTML=(balances[indexNum]/1e18).toFixed(4);
      name.innerHTML=key;

      row.appendChild(name);
      row.appendChild(rate);
      row.appendChild(balance);
      x.appendChild(row);
      indexNum+=1;
    });
    document.getElementById('imgID').src ="./static/"+image;
      updateChart(charts);
    },
    fail: function(){
      console.log('failed');
    }

  });
  document.getElementById('catalogue').style.display='none';
  document.getElementById('explore').style.display='initial';
}

function updateChart(ch){

  new TradingView.MediumWidget(
  {
  "symbols": ch,
  "chartOnly": false,
  "width": "100%",
  "height": 400,
  "locale": "in",
  "colorTheme": "dark",
  "gridLineColor": "rgba(240, 243, 250, 0)",
  "trendLineColor": "#2962FF",
  "fontColor": "#787B86",
  "underLineColor": "rgba(41, 98, 255, 0.3)",
  "underLineBottomColor": "rgba(41, 98, 255, 0)",
  "isTransparent": false,
  "autosize": false,
  "showFloatingTooltip": false,
  "container_id": "tradingview_bf855"
}
  );

}

var web ;
var contract;
var account;
var CurrentETFLoaded;
async function getWalletConnection(){
  try{
     web = new Web3(window.ethereum);
     account = await window.ethereum.request({method:'eth_requestAccounts'});
     document.getElementById('connector').style.display="none";
      }
  catch(error){
    console.log(error.message);
  }
}

async function getETFBalance(etfAddress){
  var etf = new web.eth.Contract(ETFabi,etfAddress);
  var balances = await etf.methods.balanceOfETF(account[0]).call();
  console.log(balances);
  return balances;
}

async function buyETF(){

  var bnbValue = document.getElementById('buy').value;
  var router = new web.eth.Contract(RouterABI,'0x3e87700b85b034d885bae7302284fdd3b815948b');
  var etfToBuy = document.getElementById('etfNameExplore').innerHTML;
  etfToBuy = etfToBuy.split(" ")[0];
  bnbValue = bnbValue*1e18;
  bnbValue = String(bnbValue);
  console.log(bnbValue,etfToBuy);
  var tx = await router.methods.getPaymentForETF(bnbValue,etfToBuy).send({from:account[0],gas:0, value:100000000000});
  console.log(tx.transactionHash);
  exploreETF(etfToBuy,CurrentETFLoaded,etfToBuy.toLowerCase()+'.png');
}

async function sellETFs(){

  var percentage = document.getElementById('sell').value;
  var router  = new web.eth.Contract(RouterABI,'0x3e87700b85b034d885bae7302284fdd3b815948b');
  var etfToSell = document.getElementById('etfNameExplore').innerHTML;
  etfToSell= etfToSell.split(" ")[0];
  console.log(percentage,etfToSell);
  var tx = await router.methods.SellETF(percentage,etfToSell).send({from:account[0],gas:0});
  console.log(tx.transactionHash);
  exploreETF(etfToSell,CurrentETFLoaded,etfToSell.toLowerCase()+'.png');
}

window.ethereum.on("accountsChanged",async(acc)=>{
  account[0] = acc[0];
  var etfToBuy = document.getElementById('etfNameExplore').innerHTML;
  etfToBuy = etfToBuy.split(" ")[0];
  exploreETF(etfToBuy,CurrentETFLoaded,etfToBuy.toLowerCase()+".png");
})
