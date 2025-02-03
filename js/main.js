$(function () {
    // resize window
    $(window).resize(function () {
        if ($(window).width() < 1280 && $(window).width()>540) {
            $(".page").css({"width": $(window).width() - $(".side-card").width() - 90, "float": "left"})
        } else {
            $(".page").removeAttr("style")
        }
    });

    // menu
    $(".menus_icon").click(function () {
        if ($(".header_wrap").hasClass("menus-open")) {
            $(".header_wrap").removeClass("menus-open").addClass("menus-close")
        } else {
            $(".header_wrap").removeClass("menus-close").addClass("menus-open")
        }
    })

    $(".m-social-links").click(function () {
        if ($(".author-links").hasClass("is-open")) {
            $(".author-links").removeClass("is-open").addClass("is-close")
        } else {
            $(".author-links").removeClass("is-close").addClass("is-open")
        }
    })

    $(".site-nav").click(function () {
        if ($(".nav").hasClass("nav-open")) {
            $(".nav").removeClass("nav-open").addClass("nav-close")
        } else {
            $(".nav").removeClass("nav-close").addClass("nav-open")
        }
    })

    $(document).click(function(e){
        var target = $(e.target);
        if(target.closest(".nav").length != 0) return;
        $(".nav").removeClass("nav-open").addClass("nav-close")
        if(target.closest(".author-links").length != 0) return;
        $(".author-links").removeClass("is-open").addClass("is-close")
        if((target.closest(".menus_icon").length != 0) || (target.closest(".menus_items").length != 0)) return;
        $(".header_wrap").removeClass("menus-open").addClass("menus-close")
    })

    // 显示 cdtop
    $(document).ready(function ($) {
        var offset = 100,
            scroll_top_duration = 700,
            $back_to_top = $('.nav-wrap');

        $(window).scroll(function () {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible');
        });

        $(".cd-top").on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
        });
    });

    // pjax
    $(document).pjax('a[target!=_blank]','.page', {
        fragment: '.page',
        timeout: 5000
    });
    $(document).on({
        'pjax:click': function() {
            $('body,html').animate({
                scrollTop: 0,
            }, 700);
        },
        'pjax:end': function() {
            if ($(".header_wrap").hasClass("menus-open")) {
                $(".header_wrap").removeClass("menus-open").addClass("menus-close")
            }
            if ($(".author-links").hasClass("is-open")) {
                $(".author-links").removeClass("is-open").addClass("is-close")
            }
            if ($(".nav").hasClass("nav-open")) {
                $(".nav").removeClass("nav-open").addClass("nav-close")
            }
        }
    });

    // smooth scroll
    $(function () {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 700);
                    return false;
                }
            }
        });
    });

})

// 获取按钮元素
const themeToggleButton = document.getElementById('theme-toggle-btn');
const body = document.body;

// 判断本地存储中是否有用户的主题偏好
const savedMode = localStorage.getItem('theme');
if (savedMode) {
  body.className = savedMode; // 设置页面模式
}

// 切换模式函数
function toggleTheme() {
  if (body.classList.contains('day-mode')) {
    body.className = 'night-mode';  // 切换到黑夜模式
    localStorage.setItem('theme', 'night-mode'); // 保存到本地存储
  } else {
    body.className = 'day-mode';   // 切换到白天模式
    localStorage.setItem('theme', 'day-mode'); // 保存到本地存储
  }
}

// 为按钮添加点击事件
themeToggleButton.addEventListener('click', toggleTheme);



(function() {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const lines = [];
  const maxLines = 10;

  function Line(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.alpha = 1;
  }

  Line.prototype.draw = function() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
  };

  function createLine() {
    const x1 = Math.random() * canvas.width;
    const y1 = Math.random() * canvas.height;
    const x2 = Math.random() * canvas.width;
    const y2 = Math.random() * canvas.height;
    lines.push(new Line(x1, y1, x2, y2));
    if (lines.length > maxLines) {
      lines.shift();
    }
  }

  function updateLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(function(line) {
      line.draw();
    });
    createLine();
    requestAnimationFrame(updateLines);
  }

  // 鼠标移动事件
  window.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lines.forEach(function(line) {
      line.x1 = x;
      line.y1 = y;
    });
  });

  updateLines();
})();