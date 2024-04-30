const _0x3267af = _0x2d1a;
(function(_0x4bb8a9, _0x1e117b) {
    const _0x475811 = _0x2d1a
      , _0x28f3f8 = _0x4bb8a9();
    while (!![]) {
        try {
            const _0x102de6 = parseInt(_0x475811(0x18f)) / 0x1 + parseInt(_0x475811(0x1a2)) / 0x2 * (-parseInt(_0x475811(0x186)) / 0x3) + -parseInt(_0x475811(0x199)) / 0x4 + parseInt(_0x475811(0x194)) / 0x5 * (parseInt(_0x475811(0x185)) / 0x6) + -parseInt(_0x475811(0x197)) / 0x7 + -parseInt(_0x475811(0x19c)) / 0x8 + parseInt(_0x475811(0x193)) / 0x9;
            if (_0x102de6 === _0x1e117b)
                break;
            else
                _0x28f3f8['push'](_0x28f3f8['shift']());
        } catch (_0x58c64f) {
            _0x28f3f8['push'](_0x28f3f8['shift']());
        }
    }
}(_0x5958, 0xf0bda));
function generateRandomNumber() {
    const _0x3cee72 = _0x2d1a;
    return Math[_0x3cee72(0x18d)](Math['random']() * 0x3e8) + 0x1;
}
let randomNumber = generateRandomNumber()
  , adivino = ![];
function _0x5958() {
    const _0x43b12e = ['°\x20Ingresaste', 'blue', 'DOMContentLoaded', 'addEventListener', '¡Has\x20adivinado\x20el\x20número!', '4078dFbsnJ', '294xQedWG', '30EnGrzt', '\x20intentos', 'style', 'preventDefault', 'El\x20número\x20que\x20ingresaste\x20es\x20mayor', 'El\x20Numero\x20era\x20', '</p>', 'floor', '<p>', '1786976SGaWJZ', 'number-input', 'innerHTML', 'El\x20número\x20que\x20ingresaste\x20es\x20menor', '18026820jSgWyH', '49135ZywXQs', 'Lo\x20adivinaste\x20en\x20', 'getElementById', '6487971ROTPdH', 'attempts', '4475912gcylJU', 'textContent', 'El\x20número\x20debe\x20ser\x20mayor\x20que\x200', '9753472NdOzix'];
    _0x5958 = function() {
        return _0x43b12e;
    }
    ;
    return _0x5958();
}
function _0x2d1a(_0x4ae358, _0x7fbfa1) {
    const _0x5958ee = _0x5958();
    return _0x2d1a = function(_0x2d1ab0, _0x3d8d7a) {
        _0x2d1ab0 = _0x2d1ab0 - 0x185;
        let _0x2a955c = _0x5958ee[_0x2d1ab0];
        return _0x2a955c;
    }
    ,
    _0x2d1a(_0x4ae358, _0x7fbfa1);
}
document[_0x3267af(0x1a0)](_0x3267af(0x19f), function() {
    const _0x2d58c2 = _0x3267af
      , _0x3e4a68 = document['getElementById']('guess-form')
      , _0x410da4 = document[_0x2d58c2(0x196)]('result-message')
      , _0x4810ed = document['getElementById']('attempts-message')
      , _0x195d87 = document[_0x2d58c2(0x196)](_0x2d58c2(0x198))
      , _0x3db41d = document[_0x2d58c2(0x196)]('restart-button')
      , _0x5c3e2b = '';
    let _0x273260 = 0x1;
    _0x3e4a68[_0x2d58c2(0x1a0)]('submit', function(_0x503d32) {
        const _0x2b1557 = _0x2d58c2;
        _0x503d32[_0x2b1557(0x189)]();
        const _0x1cf5cd = parseInt(document[_0x2b1557(0x196)](_0x2b1557(0x190))['value']);
        if (_0x1cf5cd <= 0x0)
            _0x410da4[_0x2b1557(0x19a)] = _0x2b1557(0x19b);
        else {
            if (_0x1cf5cd === randomNumber)
                adivino != !![] && (adivino = !![],
                _0x410da4[_0x2b1557(0x19a)] = _0x2b1557(0x1a1),
                _0x4810ed[_0x2b1557(0x19a)] = _0x2b1557(0x195) + _0x273260 + _0x2b1557(0x187),
                _0x195d87[_0x2b1557(0x191)] += _0x2b1557(0x18e) + _0x273260 + _0x2b1557(0x19d) + '.\x20' + _0x1cf5cd + _0x2b1557(0x18c));
            else
                _0x1cf5cd > randomNumber ? (_0x410da4[_0x2b1557(0x19a)] = _0x2b1557(0x18a),
                _0x410da4[_0x2b1557(0x188)]['color'] = 'red',
                _0x195d87[_0x2b1557(0x191)] += _0x2b1557(0x18e) + _0x273260 + '°\x20Ingresaste' + '.\x20' + _0x1cf5cd + _0x2b1557(0x18c),
                _0x273260++) : (_0x410da4['textContent'] = _0x2b1557(0x192),
                _0x410da4['style']['color'] = _0x2b1557(0x19e),
                _0x195d87['innerHTML'] += _0x2b1557(0x18e) + _0x273260 + '°\x20Ingresaste' + '.\x20' + _0x1cf5cd + _0x2b1557(0x18c),
                _0x273260++);
        }
    }),
    _0x3db41d[_0x2d58c2(0x1a0)]('click', function() {
        const _0x5ecda0 = _0x2d58c2;
        _0x410da4[_0x5ecda0(0x19a)] = '',
        _0x4810ed[_0x5ecda0(0x19a)] = '',
        _0x195d87[_0x5ecda0(0x191)] = '',
        adivino == ![] && alert(_0x5ecda0(0x18b) + randomNumber),
        adivino = ![],
        _0x273260 = 0x1,
        randomNumber = generateRandomNumber(),
        _0x3e4a68['reset']();
    });
});
