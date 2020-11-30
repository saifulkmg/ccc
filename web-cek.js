var rdrectURL = 'https://www.kangrian.net/p/aktivasi-lisensi-website.html',
    hst_nme = window.location.hostname;
function prompt_license(_0x30cb21) {
    $('body').append('    <div style="position: fixed!important;z-index:999999!important;top:0!important;left: 0!important;width: 100%!important;height: 100%!important;display: flex!important;background: rgba(0,0,0,.4)!important;">        <div style="display: block!important;margin: auto!important;width: 600px!important;max-width:90%!important;text-align: center!important;background: #fff!important; padding: 40px!important;border-radius: 8px!important;">            Lisensi Template untuk website "' + hst_nme + '" belum Aktif..<br/><br/><a href="' + _0x30cb21 + '" target="_blank" rel="nofollow external">Cara Aktivasi?</a>        </div>    </div>');
}
function cekDB(_0x221685, _0x38b813) {
    var _0x2e73e0 = false;
    for (var _0x4a48d5 = 0; _0x4a48d5 < _0x38b813.length; _0x4a48d5++) {
        var _0x1de8d7 = _0x38b813[_0x4a48d5];
        if (_0x1de8d7 == _0x221685) {
            _0x2e73e0 = true;
            break;
        }
    }
    return _0x2e73e0;
}
$(window).on('load', function () {
    typeof arrWEB === 'undefined' ? prompt_license(rdrectURL) : cekDB(hst_nme, arrWEB) === false && prompt_license(rdrectURL);
});
// JavaScript Document