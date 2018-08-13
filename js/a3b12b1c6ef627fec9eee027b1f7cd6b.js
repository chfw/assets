(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('汤阴县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410523","properties":{"name":"汤阴县","cp":[114.357763,35.924514],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@C@ABC@A@GB@BB@@@CB@@@B@B@@C@A@@@AJB@@BBB@@B@B@J@@F@@AB@@AB@@AB@BAB@@@D@BA@@@E@@@A@@B@@@@@@AB@@@@@B@@@@@D@@@@@BA@A@@@@D@B@@A@A@@@A@A@@@A@A@C@@@A@@@BB@BA@@B@B@F@B@@AB@@A@BB@@@@@@@F@B@@A@CD@@A@A@@BAD@BAF@B@BAB@BBB@@@FAB@@@@@B@@@B@@@@BB@@AB@@@B@@D@@B@B@@A@A@@@ABABA@@BAB@B@@B@@@B@@AB@B@@@@B@B@@@B@AAB@@@FD@@B@@@B@H@B@B@@C@@AA@@@ABA@@B@@BBA@@@@@@@@@@@@@AB@@@@@DB@@BB@B@FDBB@@@@BA@B@@@B@@@@@@BBB@@@@B@@@AB@BB@B@BB@DAF@B@@@@B@D@@B@@B@@@BB@@@@B@@@@CB@B@BA@@@@B@@B@@B@@B@@@@@B@@@@@BB@@@@@@BBB@B@@@B@@@@AB@@@@@B@@@BA@@@@B@@@@@B@@A@@B@@A@@B@@@@B@B@@B@@@D@BBAD@BB@@@BA@@@@@@@B@@B@@@@@BA@@B@@@DBB@@BA@BB@@B@B@@AB@BBA@@B@B@@@@@@@B@@@@D@@B@@BB@@BB@BB@@@B@@B@DD@@@D@A@@BB@@@D@BB@@B@@@@@@B@@DBA@@B@@D@@@@@@DA@@@@@A@@AC@A@@@@B@@A@@@@BC@A@AAAB@AA@A@E@A@A@ADCDA@@B@FBL@BBDBB@BBBD@B@@B@B@D@@@DC@@@BB@B@@@DBB@@BBB@BAD@D@BBD@BF@B@D@B@@@@@@@@BABA@AB@@A@@@@@ABADAB@@@B@@A@A@@B@B@BBB@@@@@@@@BAB@@B@@BB@BB@@@B@@B@B@ADCB@BAA@@AB@@@@@B@@A@@B@@@BAB@@AA@@@BA@E@@@@@@@FDJB@@@@@FBB@@D@B@@@@@@FD@@BD@@@@@BF@B@B@@D@B@@@@@@@ADAB@@@B@B@@@BA@@@A@@@@CC@@DA@@@@B@@AAC@@@A@A@A@@@A@ABA@AA@@AAACA@A@@@@A@A@@@AA@@@@@AA@@@@@A@A@A@AAAA@AD@AAC@@@@A@C@C@A@@BA@@@@@@B@@B@B@@BB@@FAD@@@B@BA@@B@@@@D@@@@B@@@B@@@@@B@@@@@B@@A@C@A@@@@D@DBB@B@@D@AB@@@@@@B@B@BB@@BD@@@BAD@@@B@@@BBB@@@@DA@ABA@@@B@@B@@@B@@@BA@@D@@@BB@@BED@@@@@@@F@@A@@B@@@@B@@DABABA@@@@D@@@@@B@@F@B@@B@B@B@@@@@@A@@B@D@@AB@B@@@@BF@@@@DB@@@@AB@@AB@BCB@@A@@B@@FBAJBB@B@@@@ABA@@@@AGD@D@@A@@B@DC@@@H@@@@BG@BB@BA@@@@BEA@@@B@BAD@B@BB@AB@@@@C@@D@@@LF@@@D@@H@@@@H@@D@@J@@B@H@F@B@@@@@BAF@@AD@@@DB@BF@@@@AB@@BD@@CB@@ED@B@F@@ABB@A@@D@B@@BFA@B@@@B@BF@@@FB@C@A@@B@@D@@F@@@@AD@B@@@B@L@@@@DD@@F@@@BB@@@B@@BBBBB@@F@@@@@@B@D@@D@@@@H@@FBBAHA@AF@@AD@H@@B@@H@@@@BF@JF@@@@ABBBDABD@@@@D@B@D@@@D@BB@@B@@@@A@@B@@@F@BBB@B@@@B@DD@@@@BAB@@@@@B@B@BB@AB@@@F@@@@@BDBAB@B@B@B@@BBAB@@F@@B@@@B@@A@@@AB@@@@@BDDCBA@@BAH@@@BAB@B@B@B@B@B@@@@@B@@B@@@@D@D@JAB@@@D@@@@@BB@DBD@@@@B@B@@@BD@B@@@@TCB@LA@BHAB@@@@@BD@@B@DAFCB@DADBDBFBB@BB@@D@B@B@B@FBD@B@B@B@B@F@@C@@@@@B@@B@@@B@BBB@@@@@@AH@@@HA@CBAB@A@BA@@@@D@BB@@@@HAB@@BFA@BE@@@BBDA@B@@@BBF@@FA@BD@@@D@@BB@@AHA@DB@@@@DFA@B@BAL@@B@B@F@CIHA@FBB@DB@@@JAB@B@AC@@AG@@@@@A@A@@@@B@@C@@@@B@@@@BF@@A@@@@@@B@@BBABBB@@B@BBA@C@@@@BF@BA@BDA@@DB@DL@@@@B@BB@@DAB@DAD@@@AGD@AAAG@AC@@A@@F@@@JA@DB@@C@@BB@@@@BB@BBFB@B@@CL@@BJAXELAH@@@@C@A@CB@@@AA@@C@@G@@B@AC@@B@B@BA@@@@@@@@@A@@BA@@GBAED@@A@@AACACCAAIE@A@@A@AA@@@@@AB@@@@AIACAAA@@@@BABA@ABA@A@A@@ACAAAA@AACCC@ACE@@FAA@@@C@@AA@AC@@A@CAA@AAF@@AGB@@@@AC@@@AAA@@@A@@FACEEB@AAABA@@CG@A@A@@@@@AAB@@A@AB@@AAA@@A@@@A@@BCBA@@@C@@AAAA@A@@@A@A@@CAGM@@CBA@@@ACA@AAC@AAA@AA@@AA@@AAAAB@@@ACDA@ABAAGACA@@CAA@@AB@B@@@@@@A@AB@@AAAA@AA@@@A@@@EK@@ABAE@@A@@@BBA@AC@A@@BA@@@A@@@@AA@@C@C@@@@AAA@GD@@@B@AE@EA@@AA@CBA@AAAAA@AAA@@@A@AB@B@@AB@B@@ABA@AAA@AAAABA@@BA@A@@@AAA@@@@A@E@EBC@@@A@AA@ABE@@@@BAB@B@BB@@BB@BB@@@BAB@B@@@B@@BBB@@BBB@B@@@BAB@@A@@@A@ACAA@AAC@GAEACAEAC@CB@@ABA@AB@@A@AA@@AAB@@AB@@@@AC@AAGAC@A@CAA@A@CB@@CAA@EACA@@@@IG@A@@BA@@BAA@@A@@AAA@A@A@AAC@@AA@ACAA@@@JA@EA@@@@@F@@A@KBKDABE@@@ABCBABA@ABA@ABA@GAA@@@A@ABA@E@A@CBABC@E@@@E@C@A@@@AA@@E@A@@A@AA@A@A@ABA@@@A@@@@@@@@AA@@@A@A@AAGA@A@@BCAEAC@@@@E@E@AAC@CAA@E@A@@@A@C@A@C@ABA@@@@B@@A@A@@@@C@@@AA@@@@BAB@B@@@@A@@@@I@A@@A@@@A@@A@@A@@@AA@@@C@@@@AA@@CB@@CB@B@@CBA@@@@@@ACBAA@@A@@@@BB@@@A@A@@@@BA@A@@@A@BBA@@B@@A@@B@@AB@@@@G@A@C@E@E@A@@@@C@A@@@@EAA@C@AB@A@@@A@@@A@@@@B@B@@@@A@A@@A@GA@@@A@A@@A@@AA@@@A@@@CBA@E@@AA@@@E@G@A@@@@@CBCBCD@@A@@@ACA@C@A@A@A@A@E@C@C@I@A@@@@A@@A@@@E@A@@BB@@@ABA@E@C@C@A@AAAA@@A@@@@C@C@A@@A@AA@@@AAA@A@@@@A@@@@@@A@A@A@A@@AA@E@AA@CBA@@@@A@@AC@@@AA@E@AB@@@@@B@B@@@@G@A@A@C@A@@@@@@E@AA@EA@@EDA@E@@@@@@AA@A@A@@BA@M@@@A@@AAC@@A@@@@A@@BA@AA@@@@@AC@@A@A@A@@@@AAA@A@@A@C@@@@@A@@@A@A@@A@@AA@@AA@@@@A@@@A@@@@@AA@AA@ABA@@@@AA@@AA@@@@@B@@ADAD@F@BAB@@@B@B@@@@@AA@@BA@CBA@@@@D@@@@@@A@A@@@@AAA@@A@@A@@B@B@@@@A@A@@@A@@AA@@A@A@@@C@@@@@A@AA@@@@@A@ADAB@@A@@@@ACC@A@A@@CB"],"encodeOffsets":[[117013,36620]]}}],"UTF8Encoding":true});}));