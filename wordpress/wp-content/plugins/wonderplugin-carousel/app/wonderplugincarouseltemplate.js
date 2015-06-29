/** Wonderplugin Carousel Plugin Free Version
 * Copyright 2015 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://www.wonderplugin.com
 * Version 4.5 
 */
var WONDERPLUGIN_CAROUSEL_SKIN_TEMPLATE={classic:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-title">__TITLE__</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n #amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 4px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n\t-moz-box-shadow:  0 1px 4px rgba(0, 0, 0, 0.2);\n\t-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n\tbox-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont:14px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:center;\n\ttext-shadow:0px 1px 1px #fff;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 4px;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n\t-moz-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\t-webkit-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\tbox-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 50%;\n\tmargin-left: -48px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 50%;\n\tmargin-right: -48px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}'},
gallery:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-title">__TITLE__</div>\n<div class="amazingcarousel-description">__DESCRIPTION__</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 4px;\n\tbackground-color: #fff;\n\t-moz-box-shadow:  0 1px 4px rgba(0, 0, 0, 0.2);\n\t-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n\tbox-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont: bold 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 14px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-description {\n\tposition:relative;\n\tfont: 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 14px;\t\t\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 8px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 4px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 50%;\n\tmargin-left: -60px;\n\tmargin-top: -24px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 50%;\n\tmargin-right: -60px;\n\tmargin-top: -24px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}'},
highlight:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-title">__TITLE__</div>\n<div class="amazingcarousel-description">__DESCRIPTION__</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont: bold 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 14px;\n\theight: 14px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-description {\n\tposition:relative;\n\tfont: 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 14px;\t\t\n\theight: 28px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 4px;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n\t-moz-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\t-webkit-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\tbox-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 50%;\n\tmargin-left: -60px;\n\tmargin-top: -24px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 50%;\n\tmargin-right: -60px;\n\tmargin-top: -24px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}'},
list:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-text">\n\t<div class="amazingcarousel-title">__TITLE__</div>\n\t<div class="amazingcarousel-description">__DESCRIPTION__</div>\n</div>\n<div style="clear:both;"></div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n\twidth: 40%;\n\tfloat: left;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text {\n\twidth: 60%;\n\tfloat: left;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont: bold 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 16px;\n\theight: 16px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-description {\n\tposition:relative;\n\tfont: 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 15px;\t\t\n\theight: 30px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 4px;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n\t-moz-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\t-webkit-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\tbox-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tright: 0%;\n\ttop: 100%;\n\tmargin-right: 32px;\n\tmargin-top: 8px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 100%;\n\tmargin-right: 0px;\n\tmargin-top: 8px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\ttop: 100%;\n\tright: 0%;\n\tmargin-right: 64px;\n\tmargin-top: 14px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 0;\n}\n\n'},
navigator:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-text">\n\t<div class="amazingcarousel-title">__TITLE__</div>\n\t<div class="amazingcarousel-description">__DESCRIPTION__</div>\n</div>\n<div style="clear:both;"></div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n\twidth: 40%;\n\tfloat: left;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text {\n\twidth: 60%;\n\tfloat: left;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont: bold 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 16px;\n\theight: 16px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-description {\n\tposition:relative;\n\tfont: 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 15px;\t\t\n\theight: 30px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 4px;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n\t-moz-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\t-webkit-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\tbox-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tright: 0%;\n\ttop: 0%;\n\tmargin-right: 32px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 0%;\n\tmargin-right: 0px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\ttop: 0%;\n\tright: 0%;\n\tmargin-right: 72px;\n\tmargin-top: -8px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 0;\n}\n\n'},
showcase:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-title">__TITLE__</div>\n<div class="amazingcarousel-description">__DESCRIPTION__</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont: bold 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 14px;\n\theight: 14px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-description {\n\tposition:relative;\n\tfont: 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 14px;\t\t\n\theight: 28px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 4px;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n\t-moz-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\t-webkit-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\tbox-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 50%;\n\ttop: 0%;\n\tmargin-left: -16px;\n\tmargin-top: -36px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tleft: 50%;\n\tbottom: 0%;\n\tmargin-left: -16px;\n\tmargin-bottom: -36px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\ttop: 0%;\n\tleft: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 0 16px;\n}'},
simplicity:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-title">__TITLE__</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 4px;\n\t-webkit-border-radius: 4px;\n\tborder-radius: 4px;\n\t-moz-box-shadow:  0 1px 4px rgba(0, 0, 0, 0.2);\n\t-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n\tbox-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont:14px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:center;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 4px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 45%;\n\tmargin-left: -48px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 45%;\n\tmargin-right: -48px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}'},
scroller:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-title">__TITLE__</div>\n<div class="amazingcarousel-description">__DESCRIPTION__</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont:14px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:center;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 4px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 45%;\n\tmargin-left: -48px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 45%;\n\tmargin-right: -48px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}'},
stylish:{skintemplate:'<div class="amazingcarousel-image">\n\t__IMAGE__\n\t<div class="amazingcarousel-text">\n\t\t<div class="amazingcarousel-text-bg"></div>\n\t\t<div class="amazingcarousel-title">__TITLE__</div>\n\t</div>\n</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n\t-moz-box-shadow:  0 1px 4px rgba(0, 0, 0, 0.2);\n\t-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n\tbox-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text {\n\tposition:absolute;\n\tleft: 0px;\n\tbottom: 0px;\n\ttext-align:center;\n\twidth: 100%;\n\tdisplay: none;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image:hover div.amazingcarousel-text {\t\n\tdisplay: block;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text-bg {\n\tposition:absolute;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: #333333;\n\topacity: 0.5;\n\tfilter: alpha(opacity=50);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont:14px "Open Sans", sans-serif;\n\tcolor:#ffffff;\n\ttext-align:center;\n\twidth: 100%;\n\tpadding: 10px 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 8px 4px;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 50%;\n\tmargin-left: -48px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 50%;\n\tmargin-right: -48px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 16px auto;\n}'},
thumbnail:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-text">\n\t<div class="amazingcarousel-title">__TITLE__</div>\n\t<div class="amazingcarousel-description">__DESCRIPTION__</div>\n</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 8px;\n\tbackground-color: #fff;\n\t-moz-box-shadow:  0 1px 4px rgba(0, 0, 0, 0.2);\n\t-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n\tbox-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text {\n\tpadding-right: 64px;\n}\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont: bold 14px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 16px;\n\theight: 16px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-description {\n\tposition:relative;\n\tfont: 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 16px;\t\t\n\theight: 32px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tright: 0%;\n\ttop: 100%;\n\tmargin-right: 32px;\n\tmargin-top: -64px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 100%;\n\tmargin-right: 0px;\n\tmargin-top: -64px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}'},
vertical:{skintemplate:'<div class="amazingcarousel-image">\n\t__IMAGE__\n\t<div class="amazingcarousel-text">\n\t\t<div class="amazingcarousel-text-bg"></div>\n\t\t<div class="amazingcarousel-title">__TITLE__</div>\n\t</div>\n</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n\t-moz-box-shadow:  0 1px 4px rgba(0, 0, 0, 0.2);\n\t-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n\tbox-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text {\n\tposition:absolute;\n\tleft: 0px;\n\tbottom: 0px;\n\ttext-align:center;\n\twidth: 100%;\n\tdisplay: none;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image:hover div.amazingcarousel-text {\t\n\tdisplay: block;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text:hover {\n\tdisplay: block;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text-bg {\n\tposition:absolute;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: #333333;\n\topacity: 0.5;\n\tfilter: alpha(opacity=50);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont:14px "Open Sans", sans-serif;\n\tcolor:#ffffff;\n\ttext-align:center;\n\twidth: 100%;\n\tpadding: 10px 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 8px;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n\t-moz-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\t-webkit-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\tbox-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 50%;\n\ttop: 0%;\n\tmargin-left: -16px;\n\tmargin-top: -36px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tleft: 50%;\n\tbottom: 0%;\n\tmargin-left: -16px;\n\tmargin-bottom: -36px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\ttop: 0%;\n\tleft: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 16px;\n}'},
testimonial:{skintemplate:'<div class="amazingcarousel-text">\n\t<blockquote>__DESCRIPTION__</blockquote>\n\t<cite>__TITLE__</cite>\n</div>\n<div class="amazingcarousel-image">__IMAGE__</div>\n<div style="clear:both;"></div>',skincss:'#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 50%;\n\tmargin-left: 4px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 50%;\n\tmargin-right: 4px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}\n\n@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n\twidth: 40%;\n\tfloat: left;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text {\n\twidth: 60%;\n\tfloat: left;\n}\n\n#amazingcarousel-CAROUSELID blockquote {\n\tfont: italic 14px Georgia, serif;\n\tposition: relative;\n\tcolor: #333333;\n\ttext-align: left;\n\tmargin: 8px 18px 8px 24px;\n}\n\n#amazingcarousel-CAROUSELID  blockquote:before {\n\tdisplay: block;\n\tcontent: "\\201C";\n\tfont-size: 48px;\n\tposition: absolute;\n\tleft: -24px;\n\ttop: -8px;\n\tcolor: #666666;\n}\n\n#amazingcarousel-CAROUSELID  cite {\n\tcolor: #999999;\n\tfont: italic 14px Georgia, serif;\n\tdisplay: block;\n\tposition: relative;\n\tmargin: 4px 18px;\n\ttext-align: right;\n}\n\n#amazingcarousel-CAROUSELID cite:before {\n\tcontent: "\\2014 \\2009";\n}\n\n#amazingcarousel-container-CAROUSELID {\n\tpadding: 32px 0px; \n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 6px;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n\t-moz-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\t-webkit-box-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n\tbox-shadow: 0px 0px 5px 1px rgba(96, 96, 96, 0.1);\n}'},
fashion:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>',skincss:"@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n}\n\n#amazingcarousel-container-1 {\n\tpadding: 32px 48px; \n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container:hover {\n\topacity: 0.7;\n\tfilter: alpha(opacity=70);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 50%;\n\tmargin-left: 0px;\n\tmargin-top: -30px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 50%;\n\tmargin-right: 0px;\n\tmargin-top: -30px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}\n\n\n\n"},
rotator:{skintemplate:'<div class="amazingcarousel-image">\n\t__IMAGE__\n</div>',skincss:"@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n#amazingcarousel-container-1 {\n\tpadding: 8px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 1px;\n\tbackground-color: #fff;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 50%;\n\ttop: 0%;\n\tmargin-left: -18px;\n\tmargin-top: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tleft: 50%;\n\tbottom: 0%;\n\tmargin-left: -18px;\n\tmargin-bottom: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\ttop: 0%;\n\tleft: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 16px;\n}"},
testimonialcarousel:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-text">\n\t<blockquote>__DESCRIPTION__</blockquote>\n\t<cite>__TITLE__</cite>\n</div>\n<div style="clear:both;"></div>',skincss:"@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n\tmargin: 0 auto;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 120px;\n      margin: 0 auto;\n\tborder: 0;\n\tpadding: 0;\n\t-moz-border-radius: 60px;\n\t-webkit-border-radius: 60px;\n\tborder-radius: 60px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text {\n}\n\n#amazingcarousel-CAROUSELID blockquote {\n\tfont: italic 14px Georgia, serif;\n\tposition: relative;\n\tcolor: #333;\n\ttext-align: center;\n\tmargin: 8px 18px 8px 24px;\n}\n\n#amazingcarousel-CAROUSELID  cite {\n\tcolor: #666;\n\tfont: italic 14px Georgia, serif;\n\tdisplay: block;\n\tposition: relative;\n\tmargin: 4px 18px;\n\ttext-align: center;\n}\n\n#amazingcarousel-container-1 {\n\tpadding: 10px 10px 20px 10px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 6px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 50%;\n\tmargin-left: 4px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 50%;\n\tmargin-right: 4px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}"},
tworows:{skintemplate:'<div class="amazingcarousel-image">__IMAGE__</div>\n<div class="amazingcarousel-title">__TITLE__</div>',skincss:'@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 4px;\n\tbackground-color: #fff;\n\t-moz-box-shadow:  0 1px 4px rgba(0, 0, 0, 0.2);\n\t-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n\tbox-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder: 0;\n\tmargin: 0;\n\tpadding: 0;\n\t-moz-border-radius: 0px;\n\t-webkit-border-radius: 0px;\n\tborder-radius: 0px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-title {\n\tposition:relative;\n\tfont: bold 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:center;\n\tline-height: 14px;\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-description {\n\tposition:relative;\n\tfont: 12px "Open Sans", sans-serif;\n\tcolor:#333333;\n\tmargin:6px;\n\ttext-align:left;\n\tline-height: 14px;\t\t\n\toverflow: hidden;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 8px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 4px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 50%;\n\tmargin-left: -60px;\n\tmargin-top: -24px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 50%;\n\tmargin-right: -60px;\n\tmargin-top: -24px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}'},
textonly:{skintemplate:'<div class="amazingcarousel-text">\n\t<blockquote>__DESCRIPTION__</blockquote>\n\t<cite>__TITLE__</cite>\n</div>\n<div style="clear:both;"></div>',skincss:"@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image {\t\n\tposition: relative;\n\tpadding: 0px;\n\tmargin: 0 auto;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-image img {\n\tdisplay: block;\n\twidth: 120px;\n      margin: 0 auto;\n\tborder: 0;\n\tpadding: 0;\n\t-moz-border-radius: 60px;\n\t-webkit-border-radius: 60px;\n\tborder-radius: 60px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-text {\n}\n\n#amazingcarousel-CAROUSELID blockquote {\n\tfont: italic 14px Georgia, serif;\n\tposition: relative;\n\tcolor: #333;\n\ttext-align: center;\n\tmargin: 8px 18px 8px 24px;\n}\n\n#amazingcarousel-CAROUSELID  cite {\n\tcolor: #666;\n\tfont: italic 14px Georgia, serif;\n\tdisplay: block;\n\tposition: relative;\n\tmargin: 4px 18px;\n\ttext-align: center;\n}\n\n#amazingcarousel-container-1 {\n\tpadding: 10px 10px 20px 10px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-list-container { \n\tpadding: 16px 0;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-item-container {\n\ttext-align: center;\n\tpadding: 6px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-prev {\n\tleft: 0%;\n\ttop: 50%;\n\tmargin-left: 4px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-next {\n\tright: 0%;\n\ttop: 50%;\n\tmargin-right: 4px;\n\tmargin-top: -16px;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-nav {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 100%;\n}\n\n#amazingcarousel-CAROUSELID .amazingcarousel-bullet-wrapper {\n\tmargin: 4px auto;\n}"}};