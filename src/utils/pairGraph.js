const pairGraph = new Map([
  [
    'ETH',
    [
      'BTC',
      'USDT',
      'TUSD',
      'PAX',
      'USDC',
      'BUSD',
      'RUB',
      'TRY',
      'EUR',
      'ZAR',
      'BKRW',
      'GBP',
      'BIDR',
      'AUD',
      'DAI',
      'NGN',
      'BRL',
    ],
  ],
  [
    'LTC',
    ['BTC', 'ETH', 'USDT', 'BNB', 'TUSD', 'PAX', 'USDC', 'BUSD', 'EUR', 'NGN', 'RUB', 'BRL', 'GBP'],
  ],
  [
    'BNB',
    [
      'BTC',
      'ETH',
      'USDT',
      'PAX',
      'TUSD',
      'USDC',
      'USDS',
      'BUSD',
      'NGN',
      'RUB',
      'TRY',
      'EUR',
      'ZAR',
      'BKRW',
      'IDRT',
      'GBP',
      'BIDR',
      'AUD',
      'DAI',
      'BRL',
      'UAH',
    ],
  ],
  ['NEO', ['BTC', 'ETH', 'USDT', 'BNB', 'TUSD', 'PAX', 'USDC', 'BUSD', 'TRY']],
  ['QTUM', ['ETH', 'BTC', 'BNB', 'USDT', 'BUSD']],
  ['EOS', ['ETH', 'BTC', 'USDT', 'BNB', 'PAX', 'TUSD', 'USDC', 'BUSD', 'EUR', 'TRY']],
  ['SNT', ['ETH', 'BTC']],
  ['BNT', ['ETH', 'BTC', 'USDT', 'BUSD']],
  ['BCC', ['BTC', 'ETH', 'USDT', 'BNB']],
  ['GAS', ['BTC']],
  [
    'BTC',
    [
      'USDT',
      'TUSD',
      'PAX',
      'USDC',
      'USDS',
      'BUSD',
      'NGN',
      'RUB',
      'TRY',
      'EUR',
      'ZAR',
      'BKRW',
      'IDRT',
      'GBP',
      'UAH',
      'BIDR',
      'AUD',
      'DAI',
      'BRL',
      'VAI',
      'GYEN',
    ],
  ],
  ['HSR', ['BTC', 'ETH']],
  ['OAX', ['ETH', 'BTC']],
  ['DNT', ['ETH', 'BTC', 'BUSD', 'USDT']],
  ['MCO', ['ETH', 'BTC', 'BNB', 'USDT']],
  ['ICN', ['ETH', 'BTC']],
  ['WTC', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['LRC', ['BTC', 'ETH', 'BUSD', 'USDT']],
  ['YOYO', ['BTC', 'ETH', 'BNB']],
  ['OMG', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  ['ZRX', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  ['STRAT', ['BTC', 'ETH', 'BUSD', 'BNB', 'USDT']],
  ['SNGLS', ['BTC', 'ETH']],
  ['BQX', ['BTC', 'ETH']],
  ['KNC', ['BTC', 'ETH', 'BUSD', 'USDT']],
  ['FUN', ['BTC', 'ETH', 'USDT']],
  ['SNM', ['BTC', 'ETH']],
  ['IOTA', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  [
    'LINK',
    [
      'BTC',
      'ETH',
      'USDT',
      'TUSD',
      'PAX',
      'USDC',
      'BUSD',
      'AUD',
      'TRY',
      'BKRW',
      'EUR',
      'BRL',
      'NGN',
      'GBP',
    ],
  ],
  ['XVG', ['BTC', 'ETH', 'BUSD']],
  ['SALT', ['BTC', 'ETH']],
  ['MDA', ['BTC', 'ETH']],
  ['MTL', ['BTC', 'ETH', 'USDT']],
  ['SUB', ['BTC', 'ETH']],
  ['ETC', ['ETH', 'BTC', 'USDT', 'BNB', 'USDC', 'PAX', 'TUSD', 'BUSD', 'EUR', 'BRL']],
  ['MTH', ['BTC', 'ETH']],
  ['ENG', ['BTC', 'ETH']],
  ['ZEC', ['BTC', 'ETH', 'BNB', 'USDT', 'PAX', 'TUSD', 'USDC', 'BUSD']],
  ['AST', ['BTC', 'ETH']],
  ['DASH', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  ['BTG', ['BTC', 'ETH', 'BUSD', 'USDT']],
  ['EVX', ['BTC', 'ETH']],
  ['REQ', ['BTC', 'ETH']],
  ['VIB', ['BTC', 'ETH']],
  [
    'TRX',
    ['BTC', 'ETH', 'BNB', 'USDT', 'TUSD', 'XRP', 'PAX', 'USDC', 'BUSD', 'NGN', 'TRY', 'AUD', 'EUR'],
  ],
  ['POWR', ['BTC', 'ETH', 'BNB']],
  ['ARK', ['BTC', 'ETH']],
  [
    'XRP',
    [
      'BTC',
      'ETH',
      'USDT',
      'BNB',
      'PAX',
      'TUSD',
      'USDC',
      'BUSD',
      'RUB',
      'TRY',
      'EUR',
      'GBP',
      'BKRW',
      'AUD',
      'BRL',
      'NGN',
    ],
  ],
  ['MOD', ['BTC', 'ETH']],
  ['ENJ', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD', 'BRL', 'EUR', 'GBP']],
  ['STORJ', ['BTC', 'ETH', 'BUSD', 'USDT']],
  ['VEN', ['BNB', 'BTC', 'ETH', 'USDT']],
  ['KMD', ['BTC', 'ETH', 'BUSD', 'USDT']],
  ['NULS', ['BNB', 'BTC', 'ETH', 'USDT']],
  ['RCN', ['BTC', 'ETH', 'BNB']],
  ['RDN', ['BTC', 'ETH', 'BNB']],
  ['XMR', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  ['DLT', ['BNB', 'BTC', 'ETH']],
  ['AMB', ['BTC', 'ETH', 'BNB']],
  ['BAT', ['BTC', 'ETH', 'BNB', 'USDT', 'USDC', 'PAX', 'TUSD', 'BUSD']],
  ['BCPT', ['BTC', 'ETH', 'BNB', 'TUSD', 'PAX', 'USDC']],
  ['ARN', ['BTC', 'ETH']],
  ['GVT', ['BTC', 'ETH']],
  ['CDT', ['BTC', 'ETH']],
  ['GXS', ['BTC', 'ETH', 'USDT']],
  ['POE', ['BTC', 'ETH']],
  ['QSP', ['BTC', 'ETH', 'BNB']],
  ['BTS', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  ['XZC', ['BTC', 'ETH', 'BNB', 'XRP', 'USDT']],
  ['LSK', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['TNT', ['BTC', 'ETH']],
  ['FUEL', ['BTC', 'ETH']],
  ['MANA', ['BTC', 'ETH', 'BUSD', 'USDT']],
  ['BCD', ['BTC', 'ETH']],
  ['DGD', ['BTC', 'ETH']],
  ['ADX', ['BTC', 'ETH', 'BNB']],
  [
    'ADA',
    [
      'BTC',
      'ETH',
      'USDT',
      'BNB',
      'TUSD',
      'PAX',
      'USDC',
      'BUSD',
      'BKRW',
      'EUR',
      'TRY',
      'BRL',
      'GBP',
      'AUD',
      'RUB',
    ],
  ],
  ['PPT', ['BTC', 'ETH']],
  ['CMT', ['BTC', 'ETH', 'BNB']],
  ['XLM', ['BTC', 'ETH', 'BNB', 'USDT', 'PAX', 'TUSD', 'USDC', 'BUSD', 'EUR', 'TRY']],
  ['CND', ['BTC', 'ETH', 'BNB']],
  ['LEND', ['BTC', 'ETH', 'USDT', 'BUSD', 'BKRW']],
  ['WABI', ['BTC', 'ETH', 'BNB']],
  ['TNB', ['BTC', 'ETH']],
  ['WAVES', ['BTC', 'ETH', 'BNB', 'USDT', 'TUSD', 'PAX', 'USDC', 'BUSD']],
  ['GTO', ['BTC', 'ETH', 'BNB', 'USDT', 'PAX', 'TUSD', 'USDC']],
  ['ICX', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  ['OST', ['BTC', 'ETH', 'BNB']],
  ['ELF', ['BTC', 'ETH']],
  ['AION', ['BTC', 'ETH', 'BNB', 'BUSD', 'USDT']],
  ['NEBL', ['BTC', 'ETH', 'BNB']],
  ['BRD', ['BTC', 'ETH', 'BNB']],
  ['EDO', ['BTC', 'ETH']],
  ['WINGS', ['BTC', 'ETH']],
  ['NAV', ['BTC', 'ETH', 'BNB']],
  ['LUN', ['BTC', 'ETH']],
  ['TRIG', ['BTC', 'ETH', 'BNB']],
  ['APPC', ['BTC', 'ETH', 'BNB']],
  ['VIBE', ['BTC', 'ETH']],
  ['RLC', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['INS', ['BTC', 'ETH']],
  ['PIVX', ['BTC', 'ETH', 'BNB']],
  ['IOST', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  ['CHAT', ['BTC', 'ETH']],
  ['STEEM', ['BTC', 'ETH', 'BNB']],
  ['NANO', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  ['VIA', ['BTC', 'ETH', 'BNB']],
  ['BLZ', ['BTC', 'ETH', 'BNB', 'BUSD', 'USDT']],
  ['AE', ['BTC', 'ETH', 'BNB']],
  ['RPX', ['BTC', 'ETH', 'BNB']],
  ['NCASH', ['BTC', 'ETH', 'BNB']],
  ['POA', ['BTC', 'ETH', 'BNB']],
  ['ZIL', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD', 'BIDR']],
  ['ONT', ['BTC', 'ETH', 'BNB', 'USDT', 'PAX', 'USDC', 'BUSD', 'TRY']],
  ['STORM', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['XEM', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['WAN', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['WPR', ['BTC', 'ETH']],
  ['QLC', ['BTC', 'ETH', 'BNB']],
  ['SYS', ['BTC', 'ETH', 'BNB', 'BUSD']],
  ['GRS', ['BTC', 'ETH']],
  ['CLOAK', ['BTC', 'ETH']],
  ['GNT', ['BTC', 'ETH', 'BNB']],
  ['LOOM', ['BTC', 'ETH', 'BNB']],
  ['BCN', ['BTC', 'ETH', 'BNB']],
  ['REP', ['BTC', 'ETH', 'BNB', 'BUSD', 'USDT']],
  ['TUSD', ['BTC', 'ETH', 'BNB', 'USDT', 'BUSD']],
  ['ZEN', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['SKY', ['BTC', 'ETH', 'BNB']],
  ['CVC', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['THETA', ['BTC', 'ETH', 'BNB', 'USDT', 'EUR']],
  ['IOTX', ['BTC', 'ETH', 'USDT']],
  ['QKC', ['BTC', 'ETH']],
  ['AGI', ['BTC', 'ETH', 'BNB']],
  ['NXS', ['BTC', 'ETH', 'BNB']],
  ['DATA', ['BTC', 'ETH', 'BUSD', 'USDT']],
  ['SC', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['NPXS', ['BTC', 'ETH', 'USDT', 'USDC']],
  ['KEY', ['BTC', 'ETH', 'USDT']],
  ['NAS', ['BTC', 'ETH', 'BNB']],
  ['MFT', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['DENT', ['BTC', 'ETH', 'USDT']],
  ['ARDR', ['BTC', 'ETH', 'BNB', 'USDT']],
  ['HOT', ['BTC', 'ETH', 'BNB', 'USDT', 'TRY', 'EUR', 'BUSD', 'BRL']],
  ['VET', ['BTC', 'ETH', 'USDT', 'BNB', 'BUSD', 'EUR', 'GBP', 'TRY']],
  ['DOCK', ['BTC', 'ETH', 'USDT']],
  ['POLY', ['BTC', 'BNB']],
  ['PHX', ['BTC', 'ETH', 'BNB']],
  ['HC', ['BTC', 'ETH', 'USDT']],
  ['GO', ['BTC', 'BNB']],
  ['PAX', ['BTC', 'BNB', 'USDT', 'ETH', 'TUSD', 'BUSD']],
  ['RVN', ['BTC', 'BNB', 'USDT', 'BUSD', 'TRY']],
  ['DCR', ['BTC', 'BNB', 'BUSD', 'USDT']],
  ['USDC', ['BNB', 'USDT', 'TUSD', 'PAX', 'BUSD']],
  ['MITH', ['BTC', 'BNB', 'USDT']],
  ['BCHABC', ['BTC', 'USDT', 'TUSD', 'PAX', 'USDC', 'BUSD']],
  ['BCHSV', ['BTC', 'USDT', 'TUSD', 'PAX', 'USDC']],
  ['REN', ['BTC', 'BNB', 'USDT']],
  ['BTT', ['BTC', 'BNB', 'USDT', 'PAX', 'TUSD', 'USDC', 'TRX', 'BUSD', 'TRY', 'BRL', 'EUR']],
  ['USDS', ['USDT', 'PAX', 'TUSD', 'USDC']],
  ['ONG', ['BNB', 'BTC', 'USDT']],
  ['FET', ['BNB', 'BTC', 'USDT']],
  ['CELR', ['BNB', 'BTC', 'USDT']],
  ['MATIC', ['BNB', 'BTC', 'USDT', 'BUSD', 'EUR']],
  ['ATOM', ['BNB', 'BTC', 'USDT', 'USDC', 'PAX', 'TUSD', 'BUSD']],
  ['PHB', ['BNB', 'BTC', 'USDC', 'TUSD', 'PAX']],
  ['TFUEL', ['BNB', 'BTC', 'USDT', 'USDC', 'TUSD', 'PAX']],
  ['ONE', ['BNB', 'BTC', 'USDT', 'TUSD', 'PAX', 'USDC', 'BIDR', 'BUSD']],
  ['FTM', ['BNB', 'BTC', 'USDT', 'TUSD', 'PAX', 'USDC']],
  ['BTCB', ['BTC']],
  ['ALGO', ['BNB', 'BTC', 'USDT', 'TUSD', 'PAX', 'USDC', 'BUSD']],
  ['USDSB', ['USDT', 'USDS']],
  ['ERD', ['BNB', 'BTC', 'USDT', 'PAX', 'USDC', 'BUSD']],
  [
    'DOGE',
    ['BNB', 'BTC', 'USDT', 'PAX', 'USDC', 'BUSD', 'EUR', 'TRY', 'AUD', 'BRL', 'GBP', 'RUB', 'BIDR'],
  ],
  ['DUSK', ['BNB', 'BTC', 'USDT', 'USDC', 'PAX']],
  ['BGBP', ['USDC']],
  ['ANKR', ['BNB', 'BTC', 'USDT', 'TUSD', 'PAX', 'USDC']],
  ['WIN', ['BNB', 'BTC', 'USDT', 'USDC', 'TRX', 'EUR', 'BRL']],
  ['COS', ['BNB', 'BTC', 'USDT']],
  ['TUSDB', ['TUSD']],
  ['COCOS', ['BNB', 'BTC', 'USDT']],
  ['TOMO', ['BNB', 'BTC', 'USDT', 'USDC', 'BUSD']],
  ['PERL', ['BNB', 'BTC', 'USDC', 'USDT']],
  ['CHZ', ['BNB', 'BTC', 'USDT', 'TRY', 'BRL', 'BUSD', 'EUR', 'GBP']],
  ['BAND', ['BNB', 'BTC', 'USDT', 'BUSD']],
  [
    'BUSD',
    ['USDT', 'NGN', 'RUB', 'TRY', 'ZAR', 'IDRT', 'BIDR', 'BKRW', 'DAI', 'BRL', 'BVND', 'VAI'],
  ],
  ['BEAM', ['BNB', 'BTC', 'USDT']],
  ['XTZ', ['BNB', 'BTC', 'USDT', 'BUSD']],
  ['HBAR', ['BNB', 'BTC', 'USDT', 'BUSD']],
  ['NKN', ['BNB', 'BTC', 'USDT']],
  ['STX', ['BNB', 'BTC', 'USDT']],
  ['KAVA', ['BNB', 'BTC', 'USDT']],
  ['ARPA', ['BNB', 'BTC', 'USDT']],
  ['CTXC', ['BNB', 'BTC', 'USDT']],
  ['BCH', ['BNB', 'BTC', 'USDT', 'USDC', 'TUSD', 'PAX', 'BUSD', 'EUR']],
  ['TROY', ['BNB', 'BTC', 'USDT']],
  ['VITE', ['BNB', 'BTC', 'USDT']],
  ['FTT', ['BNB', 'BTC', 'USDT']],
  [
    'USDT',
    ['TRY', 'RUB', 'ZAR', 'IDRT', 'UAH', 'BIDR', 'BKRW', 'DAI', 'NGN', 'BRL', 'BVND', 'GYEN'],
  ],
  ['EUR', ['BUSD', 'USDT']],
  ['OGN', ['BNB', 'BTC', 'USDT']],
  ['DREP', ['BNB', 'BTC', 'USDT']],
  ['BULL', ['USDT', 'BUSD']],
  ['BEAR', ['USDT', 'BUSD']],
  ['ETHBULL', ['USDT', 'BUSD']],
  ['ETHBEAR', ['USDT', 'BUSD']],
  ['TCT', ['BNB', 'BTC', 'USDT']],
  ['WRX', ['BNB', 'BTC', 'USDT', 'BUSD', 'EUR']],
  ['LTO', ['BNB', 'BTC', 'USDT']],
  ['EOSBULL', ['USDT', 'BUSD']],
  ['EOSBEAR', ['USDT', 'BUSD']],
  ['XRPBULL', ['USDT', 'BUSD']],
  ['XRPBEAR', ['USDT', 'BUSD']],
  ['MBL', ['BNB', 'BTC', 'USDT']],
  ['COTI', ['BNB', 'BTC', 'USDT']],
  ['BNBBULL', ['USDT', 'BUSD']],
  ['BNBBEAR', ['USDT', 'BUSD']],
  ['STPT', ['BNB', 'BTC', 'USDT']],
  ['SOL', ['BNB', 'BTC', 'USDT', 'BUSD']],
  ['CTSI', ['BTC', 'USDT', 'BNB', 'BUSD']],
  ['HIVE', ['BNB', 'BTC', 'USDT']],
  ['CHR', ['BNB', 'BTC', 'USDT']],
  ['BTCUP', ['USDT']],
  ['BTCDOWN', ['USDT']],
  ['MDT', ['BNB', 'BTC', 'USDT']],
  ['STMX', ['BNB', 'BTC', 'ETH', 'USDT']],
  ['IQ', ['BNB', 'BUSD']],
  ['PNT', ['BTC', 'USDT']],
  ['GBP', ['BUSD', 'USDT']],
  ['DGB', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['COMP', ['BTC', 'BNB', 'BUSD', 'USDT']],
  ['BKRW', ['USDT', 'BUSD']],
  ['SXP', ['BTC', 'BNB', 'BUSD', 'USDT', 'AUD', 'EUR', 'BIDR', 'TRY', 'GBP']],
  ['SNX', ['BTC', 'BNB', 'BUSD', 'USDT']],
  ['ETHUP', ['USDT']],
  ['ETHDOWN', ['USDT']],
  ['ADAUP', ['USDT']],
  ['ADADOWN', ['USDT']],
  ['LINKUP', ['USDT']],
  ['LINKDOWN', ['USDT']],
  ['VTHO', ['BNB', 'BUSD', 'USDT']],
  ['IRIS', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['MKR', ['BNB', 'BTC', 'USDT', 'BUSD']],
  ['DAI', ['BNB', 'BTC', 'USDT', 'BUSD']],
  ['RUNE', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['AUD', ['BUSD', 'USDT']],
  ['FIO', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['BNBUP', ['USDT']],
  ['BNBDOWN', ['USDT']],
  ['XTZUP', ['USDT']],
  ['XTZDOWN', ['USDT']],
  ['AVA', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['BAL', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['YFI', ['BNB', 'BTC', 'BUSD', 'USDT', 'EUR']],
  ['JST', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['SRM', ['BNB', 'BTC', 'BUSD', 'USDT', 'BIDR']],
  ['ANT', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['CRV', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['SAND', ['BNB', 'BTC', 'USDT', 'BUSD']],
  ['OCEAN', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['NMR', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['DOT', ['BNB', 'BTC', 'BUSD', 'USDT', 'BIDR', 'BKRW', 'EUR', 'NGN', 'TRY', 'GBP', 'BRL']],
  ['LUNA', ['BNB', 'BTC', 'BUSD', 'USDT', 'EUR']],
  ['IDEX', ['BTC', 'BUSD']],
  ['RSR', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['PAXG', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['WNXM', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['TRB', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['BZRX', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['WBTC', ['BTC', 'ETH']],
  ['SUSHI', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['YFII', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['KSM', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['EGLD', ['BNB', 'BTC', 'BUSD', 'USDT', 'EUR']],
  ['DIA', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['UMA', ['BTC', 'USDT']],
  ['EOSUP', ['USDT']],
  ['EOSDOWN', ['USDT']],
  ['TRXUP', ['USDT']],
  ['TRXDOWN', ['USDT']],
  ['XRPUP', ['USDT']],
  ['XRPDOWN', ['USDT']],
  ['DOTUP', ['USDT']],
  ['DOTDOWN', ['USDT']],
  ['BEL', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['WING', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['SWRV', ['BNB', 'BUSD']],
  ['LTCUP', ['USDT']],
  ['LTCDOWN', ['USDT']],
  ['CREAM', ['BNB', 'BUSD']],
  ['UNI', ['BNB', 'BTC', 'BUSD', 'USDT', 'EUR']],
  ['NBS', ['BTC', 'USDT']],
  ['OXT', ['BTC', 'USDT']],
  ['SUN', ['BTC', 'USDT']],
  ['AVAX', ['BNB', 'BTC', 'BUSD', 'USDT', 'TRY', 'EUR']],
  ['HNT', ['BTC', 'USDT']],
  ['BAKE', ['BNB', 'BUSD', 'USDT']],
  ['BURGER', ['BNB', 'BUSD', 'USDT']],
  ['FLM', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['SCRT', ['BTC', 'ETH']],
  ['CAKE', ['BNB', 'BUSD', 'BTC', 'USDT', 'GBP']],
  ['SPARTA', ['BNB']],
  ['UNIUP', ['USDT']],
  ['UNIDOWN', ['USDT']],
  ['ORN', ['BTC', 'USDT']],
  ['UTK', ['BTC', 'USDT']],
  ['XVS', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['ALPHA', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['VIDT', ['BTC', 'BUSD']],
  ['AAVE', ['BNB', 'BTC', 'ETH', 'BUSD', 'USDT', 'BKRW']],
  ['NEAR', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['SXPUP', ['USDT']],
  ['SXPDOWN', ['USDT']],
  ['FIL', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['FILUP', ['USDT']],
  ['FILDOWN', ['USDT']],
  ['YFIUP', ['USDT']],
  ['YFIDOWN', ['USDT']],
  ['INJ', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['AERGO', ['BTC', 'BUSD']],
  ['EASY', ['ETH', 'BTC']],
  ['AUDIO', ['BTC', 'BUSD', 'USDT']],
  ['CTK', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['BCHUP', ['USDT']],
  ['BCHDOWN', ['USDT']],
  ['BOT', ['BTC', 'BUSD']],
  ['AKRO', ['BTC', 'USDT']],
  ['KP3R', ['BNB', 'BUSD']],
  ['AXS', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['HARD', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['RENBTC', ['BTC', 'ETH']],
  ['SLP', ['ETH', 'BUSD', 'USDT']],
  ['CVP', ['ETH', 'BUSD']],
  ['STRAX', ['BTC', 'ETH', 'BUSD', 'USDT']],
  ['FOR', ['BTC', 'BUSD']],
  ['UNFI', ['BNB', 'BTC', 'BUSD', 'USDT']],
  ['FRONT', ['ETH', 'BUSD', 'BTC']],
  ['BCHA', ['BUSD']],
  ['ROSE', ['BTC', 'BUSD', 'USDT']],
  ['HEGIC', ['ETH', 'BUSD']],
  ['AAVEUP', ['USDT']],
  ['AAVEDOWN', ['USDT']],
  ['PROM', ['BNB', 'BUSD']],
  ['SKL', ['BTC', 'BUSD', 'USDT']],
  ['SUSD', ['BTC', 'ETH', 'USDT']],
  ['COVER', ['ETH', 'BUSD']],
  ['GLM', ['BTC', 'ETH']],
  ['GHST', ['ETH', 'BUSD']],
  ['SUSHIUP', ['USDT']],
  ['SUSHIDOWN', ['USDT']],
  ['XLMUP', ['USDT']],
  ['XLMDOWN', ['USDT']],
  ['DF', ['ETH', 'BUSD']],
  ['GRT', ['BTC', 'ETH', 'USDT', 'EUR', 'BUSD']],
  ['JUV', ['BTC', 'BUSD', 'USDT']],
  ['PSG', ['BTC', 'BUSD', 'USDT']],
  ['1INCH', ['BTC', 'USDT', 'BUSD']],
  ['REEF', ['BTC', 'USDT', 'BUSD']],
  ['OG', ['BTC', 'USDT']],
  ['ATM', ['BTC', 'USDT']],
  ['ASR', ['BTC', 'USDT']],
  ['CELO', ['BTC', 'USDT']],
  ['RIF', ['BTC', 'USDT']],
  ['BTCST', ['BTC', 'BUSD', 'USDT']],
  ['TRU', ['BTC', 'BUSD', 'USDT']],
  ['DEXE', ['ETH', 'BUSD']],
  ['CKB', ['BTC', 'BUSD', 'USDT']],
  ['TWT', ['BTC', 'BUSD', 'USDT']],
  ['FIRO', ['BTC', 'ETH', 'USDT']],
  ['BETH', ['ETH']],
  ['PROS', ['ETH']],
  ['LIT', ['BTC', 'BUSD', 'USDT']],
  ['SFP', ['BTC', 'BUSD', 'USDT']],
  ['FXS', ['BTC', 'BUSD']],
  ['DODO', ['BTC', 'BUSD', 'USDT']],
  ['UFT', ['ETH', 'BUSD']],
  ['ACM', ['BTC', 'BUSD', 'USDT']],
  ['AUCTION', ['BTC', 'BUSD']],
  ['PHA', ['BTC', 'BUSD']],
  ['TVK', ['BTC', 'BUSD']],
  ['BADGER', ['BTC', 'BUSD', 'USDT']],
  ['FIS', ['BTC', 'BUSD', 'USDT']],
  ['OM', ['BTC', 'BUSD', 'USDT']],
  ['POND', ['BTC', 'BUSD', 'USDT']],
  ['DEGO', ['BTC', 'BUSD', 'USDT']],
  ['ALICE', ['BTC', 'BUSD', 'USDT']],
  ['BIFI', ['BNB', 'BUSD']],
  ['LINA', ['BTC', 'BUSD', 'USDT']],
  ['PERP', ['BTC', 'BUSD', 'USDT']],
  ['RAMP', ['BTC', 'BUSD', 'USDT']],
  ['SUPER', ['BTC', 'BUSD', 'USDT']],
  ['CFX', ['BTC', 'BUSD', 'USDT']],
  ['EPS', ['BTC', 'BUSD', 'USDT']],
  ['AUTO', ['BTC', 'BUSD', 'USDT']],
  ['TKO', ['BTC', 'BIDR', 'BUSD', 'USDT']],
  ['PUNDIX', ['ETH', 'USDT']],
  ['TLM', ['BTC', 'BUSD', 'USDT']],
  ['1INCHUP', ['USDT']],
  ['1INCHDOWN', ['USDT']],
  ['MIR', ['BTC', 'BUSD', 'USDT']],
  ['BAR', ['BTC', 'BUSD', 'USDT']],
  ['FORTH', ['BTC', 'BUSD', 'USDT']],
  ['EZ', ['BTC', 'ETH']],
  ['SHIB', ['USDT', 'BUSD', 'EUR', 'RUB']],
  ['ICP', ['BTC', 'BNB', 'BUSD', 'USDT']],
  ['AR', ['BTC', 'BNB', 'BUSD', 'USDT']],
  ['POLS', ['BTC', 'BNB', 'BUSD', 'USDT']],
]);

export default pairGraph;
