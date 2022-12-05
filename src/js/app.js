const list_music = [
    {
        'name': "lucky",
        'author': 'phucanh',
        'src': './src/music/y2mate.com - LUCKY TWICE REMIX Vinz x Nam Milano Exclusive Nhạc Hot TikTok Hay Nhất 2022 TannHee Music.mp3',
        'img': '../img/music/f11.jpg'
    },
    {
        'name': "some thing",
        'author': "phucanh",
        'src': './src/music/y2mate.com - The Chainsmokers Coldplay Something Just Like This Asher Remix Cover.mp3',
        'img': '../img/music/f11.jpg'
    },
    {
        'name': "thái bình mồ hôi rơi",
        'author': "phucanh",
        'src': './src/music/y2mate.com - Thái Bình Mồ Hôi Rơi Remix Vinz Mix Nhạc Hot Tik Tok.mp3',
        'img': '../img/music/f11.jpg'
    },
    {
        'name': "3107",
        'author': 'phucanh',
        'src': './src/music/y2mate.com - 3107 2 Remix Chỉ cần ai đó cạnh bên dừng lại Nhạc Hot Tiktok hay nhất 2022.mp3',
        'img': '../img/music/f11.jpg'
    },
    {
        'name': "HEATHENS REMIX",
        'author': 'phucanh',
        'src': './src/music/y2mate.com - HEATHENS REMIX TIKTOK NHẠC CHIẾN ĐÉT HOT TREND TIKTOK.mp3',
        'img': '../img/music/f11.jpg'
    },
    {
        'name': "vẫn vương",
        'author': 'phucanh',
        'src': './src/music/y2mate.com - Vương Vấn x Chưa Chắc Đã Giống Đâu Beat Remix Nhạc Hot Tik Tok 2022.mp3',
        'img': '../img/music/f11.jpg'
    },
    {
        'name': "lovely dog remix",
        'author': 'phucanh',
        'src': './src/music/y2mate.com - Lovely Dog Remix TikTok ARS Remix Nhạc Toàn Mùi MIKENCO MIKENCO Trend Remix.mp3',
        'img': '../img/music/f11.jpg'
    },
    {
        'name': "Trang Trại Cần Sa",
        'author': "phucanh",
        'src': './src/music/y2mate.com - 3 IN 1 X FEEL TRANG TRẠI CẦN REMIX NHẠC HOT TIK TOK 2022.mp3',
        'img': '../img/music/f11.jpg'
    },
];

window.onload = (e) => {
    audio_action(0, true);
}

const soundOnChange = (e) => {
    const el = e;
    el.style.setProperty("--value", el.value);
    el.style.setProperty("--min", el.min === "" ? "0" : el.min);
    el.style.setProperty("--max", el.max === "" ? "100" : el.max);

    var volume = el.value;

    var audio = document.getElementById('music_file');

    audio.volume = volume;
};

const timelineOnChange = (e) => {
    const el = e;
    el.style.setProperty("--value", el.value);
    el.style.setProperty("--min", el.min === "" ? "0" : el.min);

    var time = el.value;

    var audio = document.getElementById('music_file');

    audio.currentTime = time;
}

const createAlert = (message) => {
    var alert_ = document.createElement('div');

    alert_.classList.add('alert');

    alert_.innerHTML = message;

    document.body.append(alert_);

    setTimeout(function () {
        alert_.classList.add('active');

        setTimeout(function () {
            alert_.classList.remove('active');

            setTimeout(function () {
                alert_.remove();
            }, 200);
        }, 1000);
    }, 1);
};

const audio_is_end = () => {
    var current_audio = document.getElementById('audio_playing');

    var get_current_audio = parseInt(current_audio.getAttribute('audio'));

    var count_audio = list_music.length;

    if (get_current_audio >= count_audio - 1) {
        audio_action(0);
    } else {
        audio_action(get_current_audio + 1);
    }
}

const play_audio = () => {
    var play_button = document.getElementById('play');

    var audio = document.getElementById('music_file');

    if (audio.duration > 0 && !audio.paused) {
        audio.pause();
        play_button.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        play_button.innerHTML = '<i class="fas fa-pause"></i>';

        if (document.getElementById('if_first_play').innerHTML == '1') {
            document.getElementById('timeline_setting').disabled = false;
            document.getElementById('if_first_play').innerHTML = '0';
        }

        const el = document.getElementById('timeline_setting');

        var set = setInterval(function () {
            if (document.getElementById('timer').innerHTML == 'broken') {
                document.getElementById('timer').innerHTML = '';

                clearInterval(set);
            }

            if (audio.currentTime >= audio.duration) {
                clearInterval(set);
            }

            audio = document.getElementById('music_file');

            el.setAttribute('value', audio.currentTime);
            el.setAttribute('max', audio.duration);
            el.style.setProperty("--value", audio.currentTime);
            el.style.setProperty("--min", 0);
            el.style.setProperty("--max", audio.duration);

        }, 1);

        audio.addEventListener('ended', audio_is_end);
    }
}

const next_audio = () => {
    var if_first_play = document.getElementById('if_first_play').innerHTML;

    if (if_first_play == '0') {
        document.getElementById('timer').innerHTML = 'broken';
    }

    var current_audio = document.getElementById('audio_playing');

    var get_current_audio = parseInt(current_audio.getAttribute('audio'));

    var count_audio = list_music.length;

    if (get_current_audio >= count_audio - 1) {
        createAlert('Bản nhạc hiện tại là cuối cùng.');
    } else {
        audio_action(get_current_audio + 1);
    }
}

const previous_audio = () => {
    var if_first_play = document.getElementById('if_first_play').innerHTML;

    if (if_first_play == '0') {
        document.getElementById('timer').innerHTML = 'broken';
    }

    var current_audio = document.getElementById('audio_playing');

    var get_current_audio = parseInt(current_audio.getAttribute('audio'));

    if (get_current_audio == 0) {
        createAlert('Bản nhạc hiện tại là đầu tiên.');
    } else {
        audio_action(get_current_audio - 1);
    }
}

document.getElementById('play').addEventListener('click', play_audio);

document.getElementById('next').addEventListener('click', next_audio);

document.getElementById('previous').addEventListener('click', previous_audio);

var list_html = ``;

for (var i = 1; i <= list_music.length; i++) {
    list_html += `
    <div class="music_box" music="${i - 1}">
        <div class="img" style="--img:url('${list_music[i - 1]['img']}');"></div>
        <div>
            <div class="name">${list_music[i - 1]['name']}</div>
            <div class="author">by <strong>${list_music[i - 1]['author']}</strong></div>
        </div>
    </div>
    `;

    document.getElementById('playlist').innerHTML = `
        ${list_html}
    `;
}

var list_music_in_playlist = document.getElementsByClassName('music_box');

for (var i = 0; i < list_music_in_playlist.length; i++) {

    list_music_in_playlist[i].addEventListener('click', function () {

        var current_audio = document.getElementById('audio_playing');

        var get_current_audio = parseInt(current_audio.getAttribute('audio'));

        var music_choose = parseInt(this.getAttribute('music'));

        if (music_choose == get_current_audio) {
            createAlert('Bản nhạc này đang được phát !');
        } else {
            var if_first_play = document.getElementById('if_first_play').innerHTML;

            if (if_first_play == '0') {
                document.getElementById('timer').innerHTML = 'broken';
            }

            audio_action(music_choose);
        }
    });
}

function audio_action(what_to_play, if_first_play) {
    var play_button = document.getElementById('play');

    if (!if_first_play) {
        document.getElementById('music_file').remove();
    }

    var audio_element = document.createElement('audio');
        
    var source_in_audio = document.createElement('source');
        
    var source_element = document.getElementById('music_source');
        
    var volume_setting = document.getElementById('volume_setting');
        
    audio_element.setAttribute('controls', 'controls');
        
    audio_element.style.opacity = 0;
        
    audio_element.style.position = 'fixed';
        
    audio_element.style.top = 0;
        
    audio_element.style.pointerEvents = 'none';
        
    audio_element.id = 'music_file';
        
    source_in_audio.id = 'music_file_src';
        
    source_in_audio.setAttribute('src', list_music[what_to_play].src);
        
    source_in_audio.setAttribute('type', 'audio/mp3');
        
    document.getElementById('music_name').innerHTML = list_music[what_to_play].name;
        
    document.getElementById('author').innerHTML = list_music[what_to_play].author;
        
    document.getElementById('music_image').style.setProperty("--music-img", 'url(\'' + list_music[what_to_play].img + '\')');
        
    document.getElementById('audio_playing').setAttribute('audio', what_to_play);
        
    audio_element.append(source_in_audio);
        
    source_element.append(audio_element);

    audio_element.volume = volume_setting.value;
        
    if (!if_first_play) {
        play_audio();
    } else {
        document.getElementById('timeline_setting').disabled = true;

        document.getElementById('if_first_play').innerHTML = '1';
    }

    audio_element.addEventListener('ended', audio_is_end);

    if (!if_first_play) {
        play_button.innerHTML = '<i class="fas fa-pause"></i>';

        var list_playlist = document.querySelectorAll('[music]');

        for (var i = 0; i < list_playlist.length; i++) {
            list_playlist[i].classList.remove('is_playing');
        }
    } else {
        play_button.innerHTML = '<i class="fas fa-play"></i>';
    }

    document.querySelector(`[music="${what_to_play}"]`).classList.add('is_playing');

    return true;
}
