let heroText = ['Python Programmer', 'Full Stack Developer', 'Data Analyst', 'Database Management', 'Strategy Gamer'];
let heroWord = heroText.length;
let x = 0;


function heroTextDisplay() {
    setTimeout(function () {
        let title = heroText[x];
        let interval = 50;
        let wait = interval + (interval * title.length);

        $.each(title.split(''), function (i, letter) {
            setTimeout(function () {
                $('.hero-insert').html($('.hero-insert').html() + letter);
            }, interval * i);
        });
        let i = title.length;
        while (i >= 0) {
            setTimeout(function () {
                let text = $('.hero-insert').html();
                let length = text.length - 1;
                $('.hero-insert').html(text.substring(0, length));
            }, wait + (interval * i + 2000));
            i--;
        }
        x++;
        if (x >= heroWord) {
            x = 0;
            heroTextDisplay();
        } else {
            heroTextDisplay();
        }
    }, 6300);
}



heroTextDisplay();