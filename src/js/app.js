window.onload = (e) => {
    var audio_element = document.createElement('audio');

    var source_in_audio = document.createElement('source');

    var source_element = document.getElementById('music_source');

    audio_element.setAttribute('controls', 'controls');

    audio_element.style.opacity = 0;

    audio_element.style.position = 'fixed';

    audio_element.style.top = 0;

    audio_element.style.pointerEvents = 'none';

    audio_element.id = 'music_file';

    source_in_audio.id = 'music_file_src';

    source_in_audio.setAttribute('src', list_music[0].src);

    source_in_audio.setAttribute('type', 'audio/mp3');

    document.getElementById('music_name').innerHTML = list_music[0].name;

    document.getElementById('author').innerHTML = list_music[0].author;

    document.getElementById('music_image').style.setProperty("--music-img", 'url(\'' + list_music[0].img + '\')');

    document.getElementById('audio_playing').setAttribute('audio', '0');

    audio_element.append(source_in_audio);

    source_element.append(audio_element);
}

const list_music = [
    {
        'name': 'Chỉ cần ai đó cạnh bên dừng lại',
        'author': 'Nhạc Hot Tiktok',
        'src': './src/music/y2mate.com - 3107 2 Remix  Chỉ cần ai đó cạnh bên dừng lại  Nhạc Hot Tiktok hay nhất 2022.mp3',
        'img': '../img/music/ff1.jpg'
    },
    {
        'name': 'Vương Vấn x Chưa Chắc Đã Giống Đâu',
        'author': 'Beat Remix',
        'src': './src/music/y2mate.com - Vương Vấn x Chưa Chắc Đã Giống Đâu Beat Remix  Nhạc Hot Tik Tok 2022.mp3',
        'img': '../img/music/tải xuống.jpg'
    },
    {
        'name': "Something Just Like ",
        'author': 'Asher',
        'src': './src/music/y2mate.com - The Chainsmokers  Coldplay  Something Just Like This Asher Remix Cover.mp3',
        'img': '../img/music/a26bd3b88f30608733ab7cdc630066e6.jpg'
    }
];

const soundOnChange = (e) => {
    const el = e;
    el.style.setProperty("--value", el.value);
    el.style.setProperty("--min", el.min === "" ? "0" : el.min);
    el.style.setProperty("--max", el.max === "" ? "100" : el.max);
    el.style.setProperty("--value", el.value);

    var volume = el.value;

    var audio = document.getElementById('music_file');

    audio.volume = volume;
};

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
    var play_button = document.getElementById('play');

    var current_audio = document.getElementById('audio_playing');

    var get_current_audio = parseInt(current_audio.getAttribute('audio'));

    var count_audio = list_music.length;

    if (get_current_audio >= count_audio - 1) {
        document.getElementById('music_file').remove();

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
    
        source_in_audio.setAttribute('src', list_music[0].src);
    
        source_in_audio.setAttribute('type', 'audio/mp3');
    
        document.getElementById('music_name').innerHTML = list_music[0].name;
    
        document.getElementById('author').innerHTML = list_music[0].author;
    
        document.getElementById('music_image').style.setProperty("--music-img", 'url(\'' + list_music[0].img + '\')');
    
        document.getElementById('audio_playing').setAttribute('audio', '0');
    
        audio_element.append(source_in_audio);
    
        source_element.append(audio_element);
    
        audio_element.volume = volume_setting.value;

        audio_element.addEventListener('ended', audio_is_end);
    
        play_button.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        document.getElementById('music_file').remove();

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
    
        source_in_audio.setAttribute('src', list_music[get_current_audio + 1].src);
    
        source_in_audio.setAttribute('type', 'audio/mp3');
    
        document.getElementById('music_name').innerHTML = list_music[get_current_audio + 1].name;
    
        document.getElementById('author').innerHTML = list_music[get_current_audio + 1].author;
    
        document.getElementById('music_image').style.setProperty("--music-img", 'url(\'' + list_music[get_current_audio + 1].img + '\')');
    
        document.getElementById('audio_playing').setAttribute('audio', get_current_audio + 1);
    
        audio_element.append(source_in_audio);
    
        source_element.append(audio_element);
    
        audio_element.volume = volume_setting.value;
    
        audio_element.play();

        audio_element.addEventListener('ended', audio_is_end);
    
        play_button.innerHTML = '<i class="fas fa-pause"></i>';
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

        audio.addEventListener('ended', audio_is_end);
    }
}

const next_audio = () => {
    var play_button = document.getElementById('play');

    var current_audio = document.getElementById('audio_playing');

    var get_current_audio = parseInt(current_audio.getAttribute('audio'));

    var count_audio = list_music.length;

    if (get_current_audio >= count_audio - 1) {
        createAlert('Bản nhạc hiện tại là cuối cùng.');
    } else {
        document.getElementById('music_file').remove();

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
    
        source_in_audio.setAttribute('src', list_music[get_current_audio + 1].src);
    
        source_in_audio.setAttribute('type', 'audio/mp3');
    
        document.getElementById('music_name').innerHTML = list_music[get_current_audio + 1].name;
    
        document.getElementById('author').innerHTML = list_music[get_current_audio + 1].author;
    
        document.getElementById('music_image').style.setProperty("--music-img", 'url(\'' + list_music[get_current_audio + 1].img + '\')');
    
        document.getElementById('audio_playing').setAttribute('audio', get_current_audio + 1);
    
        audio_element.append(source_in_audio);
    
        source_element.append(audio_element);
    
        audio_element.volume = volume_setting.value;
    
        audio_element.play();

        audio_element.addEventListener('ended', audio_is_end);
    
        play_button.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

const previous_audio = () => {
    var play_button = document.getElementById('play');

    var current_audio = document.getElementById('audio_playing');

    var get_current_audio = parseInt(current_audio.getAttribute('audio'));

    if (get_current_audio == 0) {
        createAlert('Bản nhạc hiện tại là đầu tiên.');
    } else {
        document.getElementById('music_file').remove();

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
    
        source_in_audio.setAttribute('src', list_music[get_current_audio - 1].src);
    
        source_in_audio.setAttribute('type', 'audio/mp3');
    
        document.getElementById('music_name').innerHTML = list_music[get_current_audio - 1].name;
    
        document.getElementById('author').innerHTML = list_music[get_current_audio - 1].author;
    
        document.getElementById('music_image').style.setProperty("--music-img", 'url(\'' + list_music[get_current_audio - 1].img + '\')');
    
        document.getElementById('audio_playing').setAttribute('audio', get_current_audio - 1);
    
        audio_element.append(source_in_audio);
    
        source_element.append(audio_element);
    
        audio_element.volume = volume_setting.value;
    
        audio_element.play();

        audio_element.addEventListener('ended', audio_is_end);
    
        play_button.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

document.getElementById('play').addEventListener('click', play_audio);

document.getElementById('next').addEventListener('click', next_audio);

document.getElementById('previous').addEventListener('click', previous_audio);