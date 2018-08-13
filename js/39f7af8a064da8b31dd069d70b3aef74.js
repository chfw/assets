(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('新晃侗族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"431227","properties":{"name":"新晃侗族自治县","cp":[109.174932,27.352673],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MO@AOOIIKG@@G@ABA@A@ABADAB@@@@AAAACGEG@AAA@A@A@A@CAA@AACAA@@A@C@A@C@A@@@AB@@A@AB@B@@@B@B@@@B@@A@@@A@CAA@A@GDEBA@AACAAAA@CAC@AB@CBADAAAA@CA@@C@ABA@A@A@A@ABA@A@ABC@C@EBCBA@AAA@CACBA@C@@D@BBF@BDD@@@BBBBBBDBDBD@D@B@B@B@BDD@@BBBDDD@@BDDFBB@@DBD@@@BBBBJBDBBH@DB@BDCDADEBE@EBM@@@E@A@CCAAAAC@EBAAECCC@@C@GBCBA@C@KAAAAA@AAACAA@CACCGGAAAAABAFAD@DCCAGACCAACACC@AA@@@@A@A@CAA@A@A@A@@BC@A@A@C@CB@BA@@DADABA@C@EACACCAACCAA@ABA@A@@AACA@@AA@C@CAAECIE@@OEA@GAIEGCGEA@GEGEGECECCAAEAKCCACBAACA@@EC@@ABA@AACAACDC@EBCBAF@DBDA@@@A@@BA@@A@@A@@AA@@@@@A@A@@@ABA@@@AB@@A@@@@@@BA@@@@@A@@@A@A@A@A@@@@@A@@@AA@@@AA@@@@A@@@@AA@@@A@@@AA@@A@@AA@@@A@@@A@@AA@@@@@@BBB@BB@A@CAC@AA@A@AAACAABC@@@A@@@@@AA@@A@@@@@A@@@@@AAA@@@@@A@A@@@@@A@@@A@@AA@@@AB@@AB@B@@@@@BB@@B@@@B@BBB@BBDB@@B@D@B@DADAB@BAACACACABABABABC@CAAAAC@@@ABAB@BC@AACAAA@@@@A@@@A@@@A@@@@@A@A@A@A@@@AA@@@@AA@@AA@@@@@@AA@@AA@AA@@@@AAA@@@AA@@@AA@@AA@@A@@@AA@@A@@A@@A@@AA@@AA@@@@@A@@AA@@@A@@@A@@@AA@@A@@@A@@AA@@@A@@@@@A@A@@@A@@D@BBBBBBBD@BB@D@H@B@@AB@B@@@@@B@@@BA@@BAB@@@BA@@@@D@D@B@BBD@@@@A@@@AAAE@@@@@@@@GN@BA@@@@@AABABABG@A@AA@A@@@A@@B@@A@@@@@@B@@@BB@@@@B@@@B@@@@@B@@@B@@@@A@@B@@A@@@@@A@@BA@@@A@@@@@AB@@A@@@CAC@A@@B@DA@@@ABCBCFADAB@DBBAB@@CBAB@@DBBB@@@D@B@@@B@@AB@@@B@@@B@@@@AB@@@@@B@@ABAB@@@BA@@@@@A@@B@@@@CC@AAAAAA@C@C@@@A@@@A@@@AB@@@BA@@@BD@BBBA@C@CA@@A@A@CBABAD@@A@AB@@@@A@@@@@AB@@@@A@@@AB@@@@AB@@@@AB@@@@A@@B@@A@@BA@@@@@A@A@A@AB@B@D@@@@@BA@@@A@@@@BA@@@A@@@CB@@@@A@AB@@A@@@ABA@@@A@@@ABA@@@ABB@@BBB@@@BB@@@B@@@BB@@@@B@@@B@@BB@B@@BB@@@@BB@@@@@BB@@BB@@BB@@@@B@@B@@@@BB@@@@@@BD@@B@DAD@B@D@B@BA@ABC@CB@@AF@BAD@D@B@@@BB@@DBB@BBD@D@@@@@BBDB@@@BBBBB@@B@@@BBB@B@B@B@B@@@BA@@DAB@B@B@B@BBB@@BABAB@BAB@B@B@@BB@BBBBF@@BDBDBBBB@@B@B@@@@@D@@@@@DBB@B@B@BADABABA@@@@@AB@@@BA@@BA@A@@@@@AB@@A@@@@@AB@@@B@@BB@@@@@@@B@@@@B@@B@@@B@@@BB@@@@@B@@BB@@@BB@@@@B@@B@@B@@@B@@@B@@AB@@@B@@@B@@@B@@@B@B@@B@@@@B@@B@@@@B@@@@B@@B@@@@@@BB@@B@@@@@BB@@@@B@@@B@@BB@@@BB@@B@@@@BB@@@@@B@@B@@B@@B@@B@@@@B@@B@@B@@B@@BBB@@BB@@@B@@@@BB@BB@@B@@@B@BB@AB@@BB@B@@@BB@@B@@@BD@BBB@BD@B@B@BCD@@@BB@@B@@DADAB@B@@@BBBB@@BBB@B@@@B@@@B@@B@B@@B@@B@@@B@@@BAB@B@@@@@B@B@@@B@B@@@B@B@@@B@B@B@@@B@@DDBDBBABA@ABCBAB@BAB@@@BA@@@@BA@@B@@ABAB@B@B@@@BB@DBBB@BBDB@@BABCAC@C@@B@@AB@@@@AB@@A@@@@@C@A@@BA@@@A@A@AB@@A@@B@@AB@@BB@@@@BB@@@@@@BB@@F@B@B@@@@B@@@@@@@B@@BB@@AD@B@@B@@@BB@@DB@@DBBBB@@@BBB@B@@BB@B@@@BB@@B@B@BBD@B@BBB@B@B@@@BB@@B@BBDBB@B@BB@@@@B@@@BBBB@@@@@B@@BB@@@BB@@B@@@BBB@@@@BBB@JAF@D@B@DB@@DD@B@B@@@B@B@B@B@BDBDDDBDDFB@@B@B@@BB@@@BBB@@B@@BB@@@B@@@B@@@B@B@@@@@B@@AB@@@B@@@B@@AB@B@BB@@@@B@@B@@B@@@@@BB@@@BBB@@@B@@@@@B@B@@@B@BA@@B@@@@@BABC@A@ABABA@@B@BB@B@DBB@@B@@@B@B@@@B@@@B@@BB@@@B@@@@BD@@@B@@BB@@@@BB@@@@BB@@B@@@@@@BBFDFBB@B@@@BB@@@@@B@D@@B@@BB@BA@@@@B@@@B@@@@AB@@@B@@@BA@@@@B@B@B@BA@@@@B@@@@@B@B@@AB@@@@@BA@@@@B@@A@@BBBFB@@B@BBB@D@@@@BHB@@B@@@@DBBBBBB@@@@@B@B@@BBB@B@F@BAF@@@DBB@@@BCDCLEJ@FAFCN@DB@BBDBDBB@B@B@DCBEBEDCHAHCDAF@@B@@@B@FBDBDB@BDDBB@D@D@@ABABAD@@ABBB@B@@@FDBDB@DBB@H@B@B@B@@@@B@@@@AB@D@B@B@BA@@B@@@B@@@B@@@@AB@@@B@B@@@B@@@B@@@@BB@@@B@@B@@B@@BB@@BB@@@@@@B@@@@@BAB@@@@AB@@@BA@@B@@@@AB@@@B@@@@@B@@@BB@@@BB@@B@BB@@@@B@@@BB@@BBB@B@@@BAB@@@BA@A@@BA@@B@@AB@@@B@B@@@B@@BB@B@@@@@BBB@B@BB@@@@DB@@B@BB@@B@@B@@B@@BB@B@@@@B@@BB@@B@@@@BB@@B@@B@@@B@B@@@@AB@@@@A@@@@@A@@@@BA@@B@@@B@B@@@BA@@@@BAB@@AB@@@@AB@@@@@@AB@@BB@@BBB@@@B@@@B@BB@@B@@@B@BB@@B@@@@@DB@@@@BB@B@@@@@BB@@B@@@@@BB@@@@@@BB@@@@BB@@@@@@@BB@@@@B@@@B@@B@@B@@@B@@@@BB@@@@@BBB@@BB@@BB@@@@B@@@B@@@DBB@B@@@BAB@@@@A@@@AB@@AB@D@@ABA@A@A@AA@@ACAAC@AA@@AA@@@A@@@A@@@@@A@AA@@A@A@@AAAA@AA@@AA@@@AAA@AA@@A@@@A@@@A@@@A@A@@@@@A@A@@@CB@@ABAB@@@BA@@B@B@@DFBD@@@@@@BB@@B@@BB@BAFIBA@@DAB@BB@@AB@B@BBF@B@D@B@@@BBBBB@@F@B@@DBDBDHDBD@@@BBBBB@BB@@B@@BB@@BB@@@@B@@@BB@@B@@@@@B@@@B@@@B@@@B@B@B@@@B@B@@@BBB@@@@A@A@CBABA@AF@@@BAA@@@@A@ABE@C@GCEEM@EBC@@H@JBF@HJHFNJPNHJJJFFLBL@DCDEDEFGBAHCJCHAH@BABADC@C@E@EDEHA@@F@FBDDFBHDDAJBD@FBJALBHAH@@@PCLCFALCPGRIHEDEBABEDKAOBMBKBEBABCBCJIB@@@@@LELGDCFCFCJEFANEJAH@D@NDD@@@F@FC@EAGCCACBE@@DAJ@JBJAJAJE@AFEAEAGGEIEKGKEAGBGHIJKJKDCDAJGHCBEBI@GGGKCKEEGEMBIBE@AB@@@@CFODKDEDIBG@ADI@A@C@@AA@CCIA@@AAA@@A@AA@@CA@@AA@@A@AA@@A@@@@AA@A@@AA@A@@@@@A@@@A@C@A@@@A@A@AA@@A@A@A@A@AA@@AA@@AA@AA@@@@AAA@@@A@A@@BA@@@A@@@ABA@@@@@A@@@A@A@@@A@A@@@A@BB@@@@@B@B@GC@@E@C@CB@BBD@H@@A@A@@@A@@AA@A@@@A@@@@AA@@@@@@@AA@A@@@@@A@@@A@@@A@@@A@@@A@@@@@A@A@@@A@@A@@ABC@AA@ABEAG@AB@BBD@BADABCBA@AB@D@@AA@@@@AA@@@@@A@A@@@@AA@A@@@AA@@AA@@@@@A@@@@@A@A@@@A@@@A@@BA@A@@BA@@@A@@B@@A@@@A@AB@@A@A@@BA@A@A@@@A@@@@@A@@@A@A@@@AA@@@@A@@@@@A@@@@AA@@@A@@@A@@@@@AA@@A@A@@@A@@@C@A@A@@@A@@@A@A@A@@@A@@AA@@A@A@@@A@@@A@@@AB@@A@@@A@@@@@A@A@@@@BAKC@@G@A@M@KAM@IA@@A@OGUGO@IDGFADABCHAL@@CLIDGBKEGCGICGGKCKGK@@IKAA@AAAAAA@@AA@@A@AAACA"],"encodeOffsets":[[111832,27759]]}}],"UTF8Encoding":true});}));