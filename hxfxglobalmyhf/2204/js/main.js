const translate = {
  en: {
    title: 'Let your money worth more',
    nav: [{
      name: 'About Us',
      page: 'about-us'
    }, {
      name: 'Market analysis',
      page: 'news'
    }, {
      name: 'Help Center',
      page: 'help_center'
    }],
    openAccountBtn: 'Open account for free',
    moreDetailBtn: 'For more details?',
    downloadBtn: 'Download app',
    why: {
      title: 'Why should we invest in <span>Gold?</span>',
      content: [
        'Rose <span>6%</span> in a single month in <span>2022</span> Obvious volatility, lots of profit opportunities',
        'Investors prefer to treat gold as a safe-haven tool in times of crisis or economic downturn.',
        'With geopolitical turmoil, gold has historically been seen as a safe haven for investment.',
        'The Best Investments in  Age of Inflation'
      ]
    },
    steps: {
      title: '4 STEPS TO GET <span>BONUS</span>',
      titlem: '4 STEPS TO GET <span>BONUS</span>',
      list: [
        'Contact us',
        'Download APP',
        'Login account',
        'Receive Bonus'
      ]
    },
    trade: {
      title: 'HXFX <span>Trade</span>',
      list: [
        'International majors trading platform',
        'Millisecond order execution speed',
        'Available for various devices (PC & Mobile)'
      ]
    },
    awards: [
      "Golden Bridge Awards -2018 Financial Growth Enterprise \"Gold Award\"",
      "Best innovation in the financial industry Asia Pacific Stevie Silver Award",
      "Best foreign exchange investment Service Platform",
      "Anugerah \"Golden Bridge\"",
      "Best mobile transaction Platform organization",
      "Most trustworthy Foreign exchange trading platform",
      "Most growth brokers",
    ],
    riskWarning: "Risk Warning: Investment is risky, financial management needs to be cautious Risk Disclosure | Disclaimer | Privacy Policy | Client Agreement",
    bottom: ['Contact Us', 'Download App']

  },
  my: {
    title: 'Jadikan wang anda lebih bernilai',
    nav: [{
      name: 'Tentang Kami',
      page: 'about-us'
    }, {
      name: 'Trend Pasaran',
      page: 'news'
    }, {
      name: 'Pusat Bantuan',
      page: 'help_center'
    }],
    openAccountBtn: 'Buka akaun dengan percuma',
    moreDetailBtn: 'Untuk butiran lanjut?',
    downloadBtn: 'Muat turun APP',
    why: {
      title: 'Kenapa melabur dengan <span>emas?</span>',
      content: [
        'Meningkat <span>6%</span> dalam sebulan pada <span>2022</span> Kemeruapan yang jelas, banyak peluang keuntungan',
        'Pelabur suka menggunakan emas sebagai alat selamat ketika krisis atau kegawatan ekonomi.',
        'Dengan kegawatan geopolitik, emas secara sejarah dilihat sebagai alat selamat untuk pelaburan.',
        'Pelaburan Terbaik dalam Zaman Inflasi'
      ]
    },
    steps: {
      title: '4 LANGKAH UNTUK MENERIMA <span>BONUS</span>',
      titlem: '4 LANGKAH<br/> UNTUK MENERIMA <span>BONUS</span>',
      list: [
        'Hubungi kami',
        'Muat turun APP',
        'Log masuk akaun',
        'Dapatkan bonus'
      ]
    },
    trade: {
      title: 'HXFX <span>Trade</span>',
      list: [
        'Platform perdagangan utama antarabangsa',
        'Pelaksanaan pesanan milisaat',
        'Tersedia untuk pelbagai peranti anda (PC & Phone)'
      ]
    },
    riskWarning: "Amaran Risiko: Perdagangan Margin amat berisiko, pelabur perlu mempertimbangkan kemampuan mereka sendiri semasa membuat keputusan jumlah yang didagang. Perdagangan ada keuntungan dan kerugian, kehilangan semua dana didepositkan boleh berlaku. Dagangan margin tidak semestinya sesuai untuk semua pelabur. Sila sahkan bahawa anda menyedari sepenuhnya risiko sebelum berdagang. Polisi Risiko | Penafian | Polisi Persendirian | Perjanjian Pelanggan",
    bottom: ['Hubungi kami', 'Muat turun App']
  }
};

$(function () {
  new Vue({
    el: "#hd-box",
    data: {
      lang: "",
      t: {},
      is_mobile: false,
      from_app: false,
      urser_type: "0",
    },
    created() {
      switch (QueryString("lang")) {
        case 'my':
          this.lang = 'my'
          break;
        default:
          this.lang = 'en'
          break;
      }
      this.t = translate[this.lang];
      this.from_app = QueryString("from") == "app" ? true : false;
      this.is_mobile = isMobileAccess();
      if (this.from_app) {
        this.urser_type = accountApp().accountType;
      }
      $(document).prop("title", this.t.title);
      $("head").append(`<meta name="keywords" content="${this.t.key}" />`);
      $("head").append(`<meta name="description" content="${this.t.description}" />`);
    },
    methods: {
      goHXFX(page) {
        let domain = window.innerWidth >= 768 ? 'www' : 'm';
        window.open(`https://${domain}.hxfxglobal.com/${this.lang}/${page}.html`, '_blank'
        );
      },
      goOpenAccount() {
        window.open(`https://account.hxfxglobal.com/cn/newAccount.html?action=0&utm_source=82&utm_medium=POST&lang=${this.lang}`, '_blank'
        );
      },
      goDownloadApp() {
        window.open(`https://app.hxfxglobal.com/download.html?appType=custom`, '_blank');
      },
    }
  });

  // arrow element generator
  let stepsEles = Array.from(document.querySelectorAll('.steps > .content > .block'));
  if (window.innerWidth >= 768) {
    $(stepsEles).append(`<img class="arrow" src="./img/general/arrow.png" alt="" />`);
  } else {
    $(stepsEles).append(`<img class="arrow" src="./img/general/arrowleft.png" alt="" />`);
  }
  $(stepsEles[stepsEles.length - 1]).children()[1].remove();
  $(stepsEles[0]).click(() => {
    window.chat.cs()
  })
  if (QueryString("lang") === 'my') {
    stepsEles[2].querySelector('.img-hover').src = './img/general/imgh3_1.png';
  }

  var swiper = new Swiper(".awardSwiper", {
    slidesPerGroup: 1,
    slidesPerView: 4,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
      // 425: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  $('.navbar-toggler').click(() => {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  })

  // rezise window by css while using vw as unit
  const windowRatio = 1 / window.devicePixelRatio;
  $(window).resize(async () => {
    if (window.devicePixelRatio * windowRatio === 1) {
      $('#hd-box').css('transform', 'none');
      $('.rule').css('top', '0');
      return;
    }
    $('#hd-box').css('transform', `scale(${window.devicePixelRatio * windowRatio})`);
    $('#hd-box').css('transformOrigin', 'top');
  });

  $(window).scroll(function (e) {
    if ($(window).scrollTop() >= 100) {
      $(".bottom").css("display", "flex");
    } else {
      $(".bottom").css("display", "none");
    }
  });
});
