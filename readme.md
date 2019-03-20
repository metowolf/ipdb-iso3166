# ipdb-iso3166

> IPIP.net database patches (ISO-3166)

Free databases available for [download here](https://www.ipip.net/free_download/). If you need better accuracy you should consider buying [commercial subscription](https://www.ipip.net/product/ip.html#ipv4city).


## Install

```
$ npm install @ipdb/iso3166
```

## Patches

|value|
|---|
|country_code|
|continent_code|
|timezone|
|utc_offset|
|idd_code|

## Usage

```js
const IPDB = require('ipdb');
const ipdb_iso3166 = require('@ipdb/iso3166');
const ipdb = new IPDB('./data/ipipfree.ipdb', {
  patches: [ipdb_iso3166]
});

ipdb.find('183.62.57.1');
/*
{
  code: 0,
  data: {
    country_name: '中国',
    region_name: '广东',
    city_name: '广州',
    bitmask: 18,
    country_code: 'CN',
    continent_code: 'AP',
    timezone: 'Asia/Shanghai',
    utc_offset: 'UTC+8',
    idd_code: '86'
  }
}
*/
```

## Related

 - [ipdb](https://github.com/metowolf/ipdb) - IP lookup using IPIP.net database

## License

MIT © [metowolf](https://i-meto.com/)
