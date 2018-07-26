var month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
var today = new Date();
var akt = today.getMonth();
var actMonth = month[akt];
var el = document.getElementById('act');
el.innerHTML = '<p>Акция действует до 30 ' + actMonth + '!</p>';

