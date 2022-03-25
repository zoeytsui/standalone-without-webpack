//GA 统计代码
try {
    var analysis_GA = document.createElement('script');
    analysis_GA.type = 'text/javascript';
    analysis_GA.async = true;
    analysis_GA.src = "https://www.googletagmanager.com/gtag/js?id=UA-207017208-1";
    var gs = document.getElementsByTagName('script')[0];
    gs.parentNode.insertBefore(analysis_GA, gs);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-207017208-1');
    gtag('config', 'G-3C8R9HN8KT');


    // Google Tag Manager
    let gtm_tracking_id = "GTM-WFMQ4VV";

    (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
            'gtm.start':
                new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', gtm_tracking_id);

    // Google Tag Manager <noscript>
    function gtm() {
        let gtm_noscript = document.createElement('noscript'),
            gtm_iframe = document.createElement('iframe');
        gtm_iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtm_tracking_id}`;
        gtm_iframe.height = '0';
        gtm_iframe.width = '0';
        gtm_iframe.style = 'display:none;visibility:hidden';

        document.body.appendChild(gtm_noscript);
        gtm_noscript.appendChild(gtm_iframe);
    }
    setTimeout(() => {
        gtm();
    }, 100);

} catch (i) {
    console.log("GA fail " + i);
}