(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('梁园区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411402","properties":{"name":"梁园区","cp":[115.613965,34.443893],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@@@@ABAACB@FA@@ACB@BD@@@A@@@A@AA@@@@@@@A@@CA@AAEBAEA@@@@A@@A@BD@BA@@@ABA@@ACB@BA@@ABA@@A@AC@@CB@CCBBD@@BB@@EBBFGB@DC@@DE@@B@BA@@@@B@@@B@@A@@A@AA@@B@F@@@@A@A@A@C@IB@CC@BDC@AB@CCBAEABA@CCA@BBAB@AABACGDDH@@CBAAABBBBA@D@@@@@B@BGDABGD@ACDCB@AABBBABA@@@AAA@@B@@@BA@@@@@I@@DE@ABC@BBA@@@C@C@@@AC@@G@@AOB@@AGJA@A@@AC@@@ACB@ACB@CB@@@@A@@@@EBAAB@AC@@ACA@AC@@A@A@ABKD@@ABGBFH@JBLDBF@@F@@@@DBDB@B@@A@ABIBAB@@CDAD@@@BB@@BDBFD@B@@@@ADEF@BEDAD@@@B@D@BDB@BOC@D@@A@@B@@@@A@BDK@@@@BKB@BAD@A@B@FCAAH@@B@PBN@ADF@ANE@@B@@B@@@@@@B@B@B@B@D@B@@A@@@GAC@EAGAC@A@GA@DD@B@@B@BEA@B@@K@@@E@A@E@CB@@A@A@IBA@@@G@E@C@M@@DA@CDE@A@G@SA@@AEM@OAA@@@@@@ABADG@A@ABGAC@@AAA@A@CBCBA@A@A@A@KEA@@AACCCCGECC@@A@ACC@@@AKBAAAAECCE@C@@BADAB@BA@A@AA@BAD@B@BA@@B@B@B@BCACAAAA@@IAMB@@CACACACAACCCAA@EAA@@@@ABEDEDADADAF@@AB@DABEFEDA@QI@@A@GD@@A@@@CLA@GD@AAAA@ECC@E@ODK@ADBH@@A@AAAAAAAA@@AAABC@CBCBCBCBADCBABG@A@AAC@AAAAA@CBEBA@A@@@@@A@AACCCAAAACCAAACAAAC@GCC@A@CBA@EB@BD@@AB@@B@@@AD@@@@@@B@@@DA@@@A@@@CBBB@@@DF@@FC@@D@@C@@B@BBB@@@D@@@@JA@DB@@BD@B@@BA@BD@@@DBHC@@@C@@BD@@B@@A@@DA@@BB@DN@BD@@@@BBFD@@DC@@@@D@H@@@@BD@BC@AD@@@@@BADF@@@C@DJB@DNDA@BHABFFA@@@A@@BB@@D@BBF@@BA@BFD@@C@@@@@@@BBDBABB@@@@@@B@@@@BB@BBCBBD@@B@@@@@BFE@AE@@CBA@BDC@BH@@ACB@BJDH@B@@D@@B@BBH@DB@BAFC@@BAB@F@BF@@BDJA@@D@ACB@@A@@@B@@D@@B@BBAB@@D@@@DAB@D@BA@@@@DAB@BI@FL@@B@DDIDAADAA@CBAA@@C@@DFABDBABBABFFAB@@FD@BC@DDCBAECBA@@@A@BD@@BBABBB@B@@A@@AA@A@@@@@@@@@A@@BA@@@@B@@EFBDBDGDA@@@@BA@BDBA@B@@FF@A@B@@@@F@@@@@CB@DDA@BBBC@@@@D@@AA@@@AEBBF@@BNC@AG@@@@@CC@@B@@@AA@@BAA@BC@BC@@ADAC@ACB@@@@CBB@ABBBAB@AA@BL@B@B@FD@@@B@@BA@@@AB@DD@@@@@C@@@A@@D@@C@@F@@E@@@A@@BH@BHA@@EE@@A@@E@ADA@@F@J@@@J@@A@@KGBBF@BA@@CCBAEA@@B@@@@@DA@BBDA@BC@@BA@@B@@@@FABBC@@BEBBHJA@@@H@F@@R@B@@D@@B@@DN@@AFB@@@@DB@FD@CB@@@@B@B@@B@DB@@B@@@DD@@AF@NBN@ADB@B@FB@DF@AJC@CJC@@@BD@B@DBHFBF@HAHAFEFGDG@CBC@GDEDCJMFEBAHGBADC@@HGDCDGDA@AFA@@FEB@BAJCB@FADAB@DAB@H@DAB@F@@A@A@@BA@@B@F@B@D@BBB@HDBBD@F@B@DAF@B@DAB@D@B@B@B@B@@@B@B@B@B@BBD@B@BBB@B@F@B@B@BA@@D@H@B@BB@@DAD@FBDBDBB@B@B@B@B@DAB@B@B@DA@@BABBBA@@D@DAB@BA@@B@B@@BA@@@@@@@@B@@@@B@@ADABCB@@@DAB@BADA@@B@JABA@@B@BC@@BAB@@@B@DAFA@AD@B@B@F@B@B@F@D@@@BAB@B@BA@@BBB@@B@@@B@@BB@BB@BBD@BD@BDB@@@BDB@BB@@BB@@B@J@R@B@J@J@FBB@BJBDAF@F@DCBEBAFCJCB@@@D@F@L@D@F@@@B@F@JA@@B@D@B@B@FAB@BBHAHAFAB@DAB@BAFAHAB@D@B@@@B@DAJAHADABA@A@@BCACAAAB@AC@@A@@@AA@@AC@@GC@@AE@AACB@@AA@@AE@B@DE@@@A@@@C@A@@BE@A@@BC@@@C@@AA@@@@ECA@AEAAAC@AEF@AAB@@C@@AAK@@@@A@A@@@@@CAA@B@BABEBA@@A@A@AA@@FA@@A@@A@@A@ABABA@A@@@CAAB@@AA@AEBADBBABC@@@BB@B@@CF@JA@A@GB@B@@AA@@AB@AAB@@AABA@A@@C@ED@AC@CC@BDA@GB@@A@@@BA@AF@@ACAC@ACG@@BA@BCCA@CA@@B@@@BABB@AFAB@BC@BE@@BAAABGA@AB@@@@AFB@AD@@AFCA@BADB@@B@DN@@DLB@@@@ADB@@FA@@BG@@A@@@D@@A@C@@D@BCA@CC@@C@AG@@EG@@C@@CA@D@BA@@@@AA@@E@@@C@AAA@@A@AGC@@AA@@A@@B@@A@@B@@A@A@@@ABA@@@@@CB@F@@A@AB@@ABAB@@CA@@BE@@@A@@CEA@@DAAA@C@@@@@GBAA@@@A@@E@@@@@A@AB@@A@ABB@A@@B@BABAH@@A@AF@@EC@@CC@@A@EA@@@@@@AB@HAD@DA@FB@DDB@@DD@@BB@@BB@BB@B@@BBF@F@@B@@D@D@BBB@D@BE@@AAAA@AA@@AB@@CD@@EJ@@AI@@AJ@@@@CG@@AH@@A@G@EE@@CCC@C@@@AACD@@AD@@@@@BA@AA@BA@A@A@@@ADBBCEA@ABABA@@D@BA@@DCAA@@BAAABADABA@@BBBA@@BA@AJCD@AABA@BB@@@@CDA@C@@@@FA@@@@BA@C@A@@A@@E@@CB@IB@@@@CF@A@@I@@C@@CA@@CC@@C@@@BC@@@BC@ED@@AD@@A@A@IB@F@@AH@@@AIB@@C@@@DB@@CB@@ED@@C@EB@@C@@D@@CA@@C@AA@@@A@@AB@@CCA@AAB@E@CAB@CA@@C@@A@@CA@@A@@@@AEH@@C@@@EB@@@@AB@@A"],"encodeOffsets":[[118582,35156]]}}],"UTF8Encoding":true});}));