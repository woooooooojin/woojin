// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/onepage.js":[function(require,module,exports) {
var swiper = new Swiper('.swiper01', {
  loop: false,
  slidesPerView: 3,
  // slidesPerGroup:1,
  spaceBetween: 20
});
var swiper2 = new Swiper('.swiper02', {
  loop: false,
  slidesPerView: 3,
  // slidesPerGroup:1,
  spaceBetween: 20
});
var radio01 = document.getElementById('radio01');
var radio02 = document.getElementById('radio02');
var swiper01 = document.querySelector('.swiper01');
var swiper02 = document.querySelector('.swiper02');
radio01.addEventListener('click', function () {
  if (radio01.checked) {
    swiper01.style.display = 'block';
    swiper02.style.display = 'none';
  }
});
radio02.addEventListener('click', function () {
  if (radio02.checked) {
    swiper02.style.display = 'block';
    swiper01.style.display = 'none';
  }
});
$(function () {
  $('.pagebtn').css('top', $(window).height() / 2 - $('.pagebtn').height() / 2);
  $(window).scroll(function () {
    var point = $(this).scrollTop() + ($(window).height() / 2 - $('.pagebtn').height() / 2);
    $('.pagebtn').stop().animate({
      top: point
    }, 300);
  });

  // const btn = $('.pagebtn ul li');
  // const page = $('section');

  // let index = 0;
  // let top = 0; //각페이지의 맨위 좌표

  // btn.click(function () {

  //     index = $(this).index();

  //     top = page.eq(index).offset().top;

  //     $('html, body').stop().animate({
  //         scrollTop: top
  //     }, 1000, 'easeOutBounce');
  // })

  $('.lnb_women').click(function () {
    $('.drop_women').slideToggle(300);
    $('.drop_men').css('display', 'none');
    $('.drop_kids').css('display', 'none');
    $('.drop_brand').css('display', 'none');
    // $('header').css('backgroundColor','#fff')
    // $('.head_lnb ul li a').css('color','black')
    // $('.head_logo .imgwrap img').attr('src','./img/LOGO/01(1).png')
  });

  $('.lnb_men').click(function () {
    $('.drop_men').slideToggle(300);
    $('.drop_women').css('display', 'none');
    $('.drop_kids').css('display', 'none');
    $('.drop_brand').css('display', 'none');
    // $('header').css('backgroundColor','#fff')
    // $('.head_lnb ul li a').css('color','black')
  });

  $('.lnb_kids').click(function () {
    $('.drop_kids').slideToggle(300);
    $('.drop_women').css('display', 'none');
    $('.drop_men').css('display', 'none');
    $('.drop_brand').css('display', 'none');
    // $('header').css('backgroundColor','#fff')
    // $('.head_lnb ul li a').css('color','black')
  });

  $('.lnb_brand').click(function () {
    $('.drop_brand').slideToggle(300);
    $('.drop_women').css('display', 'none');
    $('.drop_men').css('display', 'none');
    $('.drop_kids').css('display', 'none');
    // $('header').css('backgroundColor','#fff')
    // $('.head_lnb ul li a').css('color','black')
  });
});

window.addEventListener('mouseover', function () {
  var mainLogo = document.querySelector('.logoimg');
  var lnbA = document.querySelectorAll('.head_lnb li');
  var head = document.querySelector('header');
  var aTag = document.querySelectorAll('.head_lnb li a');
  var gnbI = document.querySelectorAll('.head_gnb li a i');
  if (window.scrollY === 0) {
    // head.style.backgroundColor = '#fff'

    mainLogo.setAttribute('src', '../img/LOGO/logo01.png');
  }
});
window.addEventListener('scroll', function (e) {
  var mainLnb = document.querySelectorAll('.head_lnb ul li a');
  var mainGnb = document.querySelectorAll('.head_gnb ul li a');
  var mainLogo = document.querySelector('.head_logo .imgwrap img');
  if (window.scrollY > 100) {
    document.querySelector('header').style.backgroundColor = '#fff';
    mainLogo.setAttribute('src', '../img/LOGO/logo01.png');
    for (var i = 0; i < mainLnb.length; i++) {
      mainLnb[i].style.color = 'black';
    }
    for (var _i = 0; _i < mainGnb.length; _i++) {
      mainGnb[_i].style.color = 'black';
    }
  } else if (window.scrollY <= 100) {
    document.querySelector('header').style.backgroundColor = '';
    mainLogo.setAttribute('src', '../img/LOGO/logo03.png');
    for (var _i2 = 0; _i2 < mainLnb.length; _i2++) {
      mainLnb[_i2].style.color = '#fff';
    }
    for (var _i3 = 0; _i3 < mainGnb.length; _i3++) {
      mainGnb[_i3].style.color = '#fff';
    }
  }
});

// header wheel, add remove class event
window.addEventListener('wheel', function (e) {
  var headFix = document.querySelector('header');
  var dropDown = document.querySelector('.dropdown_menu');
  if (e.deltaY > 10) {
    headFix.classList.remove("head_up");
    headFix.classList.add("head_down");
  } else if (e.deltaY == 0) {
    headFix.classList.add("head_down");
  } else if (e.deltaY < -10) {
    headFix.classList.remove("head_down");
    headFix.classList.add("head_up");
  }
});

//gnb search box  click event
document.addEventListener('DOMContentLoaded', function () {
  var searchClose = document.querySelector('.search_close');
  var searchBox = document.querySelector('.search_box');
  searchClose.addEventListener('click', function () {
    searchBox.style.display = 'none';
  });
  var gnbSearch = document.querySelector('.gnb_search');
  gnbSearch.addEventListener('click', function () {
    searchBox.style.display = 'block';
  });
  var searchInput = document.getElementById('searchbox');
  var recentList = document.querySelector('.recent_search ul');
  var recentNo = document.querySelector('.noresearch');

  //검색창 검색어 추가/삭제
  searchInput.addEventListener('change', function () {
    recentNo.style.display = 'none';
    var searchLi = document.createElement('li');
    searchLi.setAttribute('class', 'searchli');
    recentList.appendChild(searchLi);
    searchLi.innerHTML = searchInput.value;
    searchInput.value = '';
    searchInput.focus();
    var liDel = document.createElement('span');
    liDel.setAttribute('class', 'lidel');
    searchLi.appendChild(liDel);
    liDel.innerHTML = 'X';
    liDel.addEventListener('click', function () {
      recentList.removeChild(searchLi);
    });
    var researchAllDel = document.querySelector('.delete_history');
    researchAllDel.addEventListener('click', function () {
      recentList.innerHTML = '';
      recentNo.style.display = 'block';
    });
  });
});

//장바구니 카트 클릭이벤트
var cart2 = document.querySelectorAll('.fa-shopping-cart');
var cartCount = document.querySelector('.count');
var cnt = 0;
cart2.forEach(function (value) {
  value.addEventListener('click', function () {
    cnt++;
    cartCount.innerHTML = cnt;
  });
});
var bgcChange = document.querySelector('.pagebtn ul li');
var bgcChangeA = document.querySelectorAll('.pagebtn ul li a');
var _loop = function _loop(i) {
  bgcChangeA[i].addEventListener('click', function () {
    bgcChangeA[0].classList.remove('on');
    bgcChangeA[1].classList.remove('on');
    bgcChangeA[2].classList.remove('on');
    bgcChangeA[3].classList.remove('on');
    bgcChangeA[i].classList.add('on');
  });
};
for (var i = 0; i < bgcChangeA.length; i++) {
  _loop(i);
}

// topBtn.addEventListener('click',()=>{
//     gsap.to(window,0.3,{
//         scrollTo: 0,
//     })
// })

var btn01 = document.getElementById('btn01');
var btn02 = document.getElementById('btn02');
var btn03 = document.getElementById('btn03');
var btn04 = document.getElementById('btn04');
var section01 = document.querySelector('.section01');
var section02 = document.querySelector('.section02');
var section03 = document.querySelector('.section03');
var section04 = document.querySelector('.section04');
btn01.addEventListener('click', function () {
  gsap.to(window, 0.3, {
    scrollTo: section01
  });
});
btn02.addEventListener('click', function () {
  gsap.to(window, 0.3, {
    scrollTo: section02
  });
});
btn03.addEventListener('click', function () {
  gsap.to(window, 0.3, {
    scrollTo: section03
  });
});
btn04.addEventListener('click', function () {
  gsap.to(window, 0.3, {
    scrollTo: section04
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53065" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/onepage.js"], null)
//# sourceMappingURL=/onepage.4d6eef85.js.map