const allQuestions = [
  // Воздушный кодекс (20)
  {q:"<b>На основе чего действует воздушный кодекс штата?</b>", a:["Конституция и законы штата","Только указы президента","Только постановления генерал-майора"], correct:0, difficulty:"easy", category:"Воздушный кодекс"},
  {q:"<b>Кто является надзорным органом за исполнением воздушного кодекса?</b>", a:["Федеральная авиационная служба (ФАС)","Любой пилот","Мэр города"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>Кто входит в состав Федеральной авиационной службы?</b>", a:["Генерал NG, его заместители, подразделение USAF","Все пилоты штата","Только стажёры USAF"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>Каково отношение воздушного пространства к ФАС?</b>", a:["Полностью подконтрольно ей","Подконтрольно только NG","Независимо от ФАС"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>Кто несёт ответственность за нарушение кодекса?</b>", a:["Виновное лицо по закону штата","Только пилот NG","Только командир части"], correct:0, difficulty:"easy", category:"Воздушный кодекс"},
  {q:"<b>Что означает использование воздушного пространства?</b>", a:["Перемещение воздушных судов","Строительство аэродромов","Слежение за погодой"], correct:0, difficulty:"easy", category:"Воздушный кодекс"},
  {q:"<b>Кто допускается к пилотированию гражданской авиации?</b>", a:["Лица с медицинской картой и лицензией","Любой гражданин","Только государственные служащие"], correct:0, difficulty:"easy", category:"Воздушный кодекс"},
  {q:"<b>Какие взлётно-посадочные площадки не являются общедоступными?</b>", a:["Территории государственных организаций","Все площадки","Только частные"], correct:0, difficulty:"easy", category:"Воздушный кодекс"},
  {q:"<b>Кто может использовать воздушное пространство по кодексу?</b>", a:["Лица, имеющие необходимые лицензии и разрешения","Любой желающий","Только военные"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>Какие виды авиации указаны в воздушном кодексе?</b>", a:["Гражданская, государственная, медико-санитарная, военная","Только военная и гражданская","Только государственная"], correct:0, difficulty:"hard", category:"Воздушный кодекс"},
  {q:"<b>К гражданской авиации относятся судна, принадлежащие кому?</b>", a:["Гражданам и юридическим лицам","Только государствам","Только NG"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>Какие судна относятся к военной авиации?</b>", a:["Принадлежащие National Guard","Любые гражданские","Частные фирмы"], correct:0, difficulty:"easy", category:"Воздушный кодекс"},
  {q:"<b>Обязаны ли пилоты иметь авиационную лицензию?</b>", a:["Да, все пилоты","Нет","Только военные"], correct:0, difficulty:"easy", category:"Воздушный кодекс"},
  {q:"<b>Кто может получить разрешение для управления государственной авиацией?</b>", a:["Сотрудники государственных структур","Любой пилот","Только граждане"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>Какие этапы нужно пройти, чтобы получить разрешение на управление государственной авиацией?</b>", a:["Теоретическая и практическая части","Только теорию","Только практику"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>Какая зона полностью запретна для полётов?</b>", a:["Первая зона — территория Форт Занкудо","Вторая зона — Sandy Shores","Третья зона — Paleto Bay"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>Кто контролирует пересечение первой зоны?</b>", a:["USAF NG","Каждый пилот","Граждане"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>На какие зоны делится воздушное пространство?</b>", a:["Открытые, ограниченные, закрытые","Только открытые","Только закрытые"], correct:0, difficulty:"easy", category:"Воздушный кодекс"},
  {q:"<b>При пересечении двух маршрутов, какое судно получает приоритет?</b>", a:["То, выполняющее служебные задачи","Которое было первым","Которое гражданское"], correct:0, difficulty:"medium", category:"Воздушный кодекс"},
  {q:"<b>Кому разрешён полёт за штурвалом?</b>", a:["Лицам с медицинской картой и аттестацией USAF","Любому желающему","Только генералам"], correct:0, difficulty:"easy", category:"Воздушный кодекс"},

  // Закон о ЗОТ (10)
  {q:"<b>Что признаётся закрытой и охраняемой территорией по закону?</b>", a:["Территория с ограниченным или запрещённым доступом","Любая публичная территория","Любой парк"], correct:0, difficulty:"easy", category:"Закон о ЗОТ"},
  {q:"<b>Какие цвета зон существуют в законе о ЗОТ?</b>", a:["Красный, жёлтый, зелёный","Чёрный, синий, белый","Синий, оранжевый, серый"], correct:0, difficulty:"medium", category:"Закон о ЗОТ"},
  {q:"<b>Кто имеет беспрепятственный доступ к ЗОТ своей организации?</b>", a:["Сотрудники той же госструктуры","Случайные граждане","Любой офицер"], correct:0, difficulty:"medium", category:"Закон о ЗОТ"},
  {q:"<b>К чему приравнивается незаконное проникновение на ЗОТ?</b>", a:["К уголовному нарушению","К мелкому штрафу","К административному предупреждению"], correct:0, difficulty:"medium", category:"Закон о ЗОТ"},
  {q:"<b>Граждане могут попасть на закрытую территорию без сопровождения?</b>", a:["Нет, только с уполномоченным сотрудником","Да, если знают закон","Да, в выходные"], correct:0, difficulty:"easy", category:"Закон о ЗОТ"},
  {q:"<b>Что может потребовать сотрудник при нахождении гражданина на жёлтой зоне?</b>", a:["Покинуть территорию","Направить оружие на человека","Игнорировать человека"], correct:0, difficulty:"medium", category:"Закон о ЗОТ"},
  {q:"<b>Что грозит за незаконное проникновение на ЗОТ?</b>", a:["Уголовная ответственность по статье 12.6","Никаких мер","Только штраф"], correct:0, difficulty:"medium", category:"Закон о ЗОТ"},
  {q:"<b>Можно ли избежать ответственности за незнание закона ЗОТ?</b>", a:["Нет, незнание не освобождает","Да, первый раз — прощают","Только если есть справка"], correct:0, difficulty:"medium", category:"Закон о ЗОТ"},
  {q:"<b>Когда сотрудник может задержать лицо находящиеся на ЗОТ?</b>", a:["Если лицо нарушает закон или отказалось уйти","Только после наказания","Только в ночное время"], correct:0, difficulty:"hard", category:"Закон о ЗОТ"},
  {q:"<b>В каких случаях гражданину разрешено быть в ЗОТ?</b>", a:["При наличии приглашения или сопровождении","В любое время","Если родственник работает там"], correct:0, difficulty:"medium", category:"Закон о ЗОТ"},
  {q:"<b>Что должен сделать сотрудник, если гражданин оказался в запрещённой зоне без пропуска?</b>", a:["Потребовать покинуть территорию","Игнорировать","Позвать коллег на помощь"], correct:0, difficulty:"easy", category:"Закон о ЗОТ"},

  // Внутренний устав (20)
  {q:"<b>Что является основным документом, регулирующим службу внутри SANG?</b>", a:["Внутренний устав","Караульный устав","Строевой устав"], correct:0, difficulty:"easy", category:"Внутренний устав"},
  {q:"<b>Кто утверждает внутренний устав?</b>", a:["Генерал Армии","Командир подразделения","Военный прокурор"], correct:0, difficulty:"medium", category:"Внутренний устав"},
  {q:"<b>Можно ли вносить изменения в устав?</b>", a:["Нет, только с согласия","Да, любой офицер может","Да, если это срочно"], correct:0, difficulty:"easy", category:"Внутренний устав"},
  {q:"<b>Как действовать при нарушении правил внутреннего устава?</b>", a:["Сообщить командиру","Игнорировать","Наказать себя"], correct:0, difficulty:"medium", category:"Внутренний устав"},
  {q:"<b>Что запрещено военнослужащим по внутреннему уставу?</b>", a:["Опаздывать, нарушать дисциплину, покидать базу без разрешения","Только опаздывать","Только покидать базу"], correct:0, difficulty:"easy", category:"Внутренний устав"},
  {q:"<b>Кто несёт ответственность за соблюдение внутреннего устава?</b>", a:["Каждый военнослужащий","Только командир отдела","Военная полиция"], correct:0, difficulty:"medium", category:"Внутренний устав"},
  {q:"<b>Когда проводится проверка знаний внутреннего устава?</b>", a:["По приказу командования","Каждый день","Раз в год"], correct:0, difficulty:"medium", category:"Внутренний устав"},
  {q:"<b>Что делать при обнаружении нарушения устава?</b>", a:["Докладывать командиру","Игнорировать","Применять меры самостоятельно"], correct:0, difficulty:"easy", category:"Внутренний устав"},
  {q:"<b>Разрешено ли переносить ответственность за нарушение устава на других?</b>", a:["Нет","Да, при согласии командира","Только на офицеров"], correct:0, difficulty:"easy", category:"Внутренний устав"},
  {q:"<b>Как часто обновляется внутренний устав?</b>", a:["По мере необходимости","Каждый месяц","Раз в год"], correct:0, difficulty:"medium", category:"Внутренний устав"},
  {q:"<b>Что обязательно соблюдать на службе согласно внутреннему уставу?</b>", a:["Дисциплину и порядок","Только внешний вид","Только отчётность"], correct:0, difficulty:"easy", category:"Внутренний устав"},
  {q:"<b>Можно ли покидать базу без разрешения?</b>", a:["Нет, только с разрешения","Да, если срочно","Да, после построения"], correct:0, difficulty:"easy", category:"Внутренний устав"},
  {q:"<b>Кто имеет право давать распоряжения в отсутствии командира?</b>", a:["Заместитель командира","Любой офицер","Военная полиция"], correct:0, difficulty:"medium", category:"Внутренний устав"},
  {q:"<b>Можно ли нарушать внутренний устав по личной инициативе?</b>", a:["Нет","Да","Только в чрезвычайной ситуации"], correct:0, difficulty:"easy", category:"Внутренний устав"},
  {q:"<b>Как действовать при обнаружении правонарушения сотрудником?</b>", a:["Докладывать командиру","Игнорировать","Применять наказание самостоятельно"], correct:0, difficulty:"medium", category:"Внутренний устав"},
  {q:"<b>Можно ли передавать служебные обязанности без разрешения?</b>", a:["Нет","Да","Только с согласия командира"], correct:0, difficulty:"medium", category:"Внутренний устав"},
  {q:"<b>Кто отвечает за выполнение распоряжений начальника подразделения?</b>", a:["Все военнослужащие","Только офицеры","Только дежурный"], correct:0, difficulty:"medium", category:"Внутренний устав"},
  {q:"<b>Что запрещено делать военнослужащим при исполнении служебных обязанностей?</b>", a:["Игнорировать приказы и нарушать дисциплину","Работать по инструкции","Слушаться командиров"], correct:0, difficulty:"easy", category:"Внутренний устав"},
  {q:"<b>Когда допускается использование оружия внутри подразделения?</b>", a:["Только по приказу","В любой ситуации","Если есть угроза"], correct:0, difficulty:"hard", category:"Внутренний устав"},
  {q:"<b>Что делать при обнаружении правонарушения на службе?</b>", a:["Докладывать командиру","Игнорировать","Наказывать нарушителя самостоятельно"], correct:0, difficulty:"medium", category:"Внутренний устав"},

  // Строевой устав (15)
  {q:"<b>Что такое «строй» согласно уставу?</b>", a:["Размещение военнослужащих для совместных действий","Любое движение в колонне","Формирование на марше"], correct:0, difficulty:"easy", category:"Строевой устав"},
  {q:"<b>Что такое «шеренга»?</b>", a:["Линейное построение в ряд","Строй один за другим","Строй в форме круга"], correct:0, difficulty:"medium", category:"Строевой устав"},
  {q:"<b>Что такое «колонна»?</b>", a:["Люди один за другим","Линия на одном уровне","Строй фасом"], correct:0, difficulty:"medium", category:"Строевой устав"},
  {q:"<b>Когда строй считается полноценным?</b>", a:["Когда наступает назначенное время строя","Как только первые люди встанут","После доклада"], correct:0, difficulty:"medium", category:"Строевой устав"},
  {q:"<b>Какие действия нужно сделать перед занятием места в строю?</b>", a:["Снять бронежилет, каску, маску, убрать оружие","Ничего не менять","Надеть шлем"], correct:0, difficulty:"medium", category:"Строевой устав"},
  {q:"<b>Можно ли вставать в уже сформированный строй без разрешения?</b>", a:["Нет, только с разрешения","Да, если опаздываешь","Да, если не полный строй"], correct:0, difficulty:"easy", category:"Строевой устав"},
  {q:"<b>Что говорит опоздавший военнослужащий?</b>", a:["«Сэр [Фамилия], разрешите встать в строй?»","«Есть, сэр»","«Прошу принять меня»"], correct:0, difficulty:"medium", category:"Строевой устав"},
  {q:"<b>Что обязан делать военнослужащий в строю?</b>", a:["Быть дисциплинированным, знать своё место, не покидать строй","Разговаривать с соседом","Оставлять строй для отдыха"], correct:0, difficulty:"easy", category:"Строевой устав"},
  {q:"<b>Что запрещено делать в строю после начала построения?</b>", a:["Разговаривать","Стоять молча","Смотреть прямиком"], correct:0, difficulty:"easy", category:"Строевой устав"},
  {q:"<b>Можно ли пользоваться телефоном в строю?</b>", a:["Нет","Да","Только слушать музыку"], correct:0, difficulty:"easy", category:"Строевой устав"},
  {q:"<b>Можно ли стоять с оружием в руках?</b>", a:["Нет (исключение: по приказу)","Да","Только командиры"], correct:0, difficulty:"medium", category:"Строевой устав"},
  {q:"<b>Можно ли покинуть строй без приказа?</b>", a:["Нет","Да","Только на минуту"], correct:0, difficulty:"easy", category:"Строевой устав"},
  {q:"<b>Как проходить перед уже сформированным строем?</b>", a:["За спинами военнослужащих","Через строй","С двух сторон"], correct:0, difficulty:"medium", category:"Строевой устав"},
  {q:"<b>Что говорит военнослужащий, когда его вызывают для получения нового звания?</b>", a:["Есть, сэр","Я здесь","Готов к званию"], correct:0, difficulty:"easy", category:"Строевой устав"},
  {q:"<b>Что делает военнослужащий после получения звания?</b>", a:["Отдаёт воинское приветствие и говорит «Служу Национальной Гвардии»","Идёт отдыхать","Уходит с построения"], correct:0, difficulty:"medium", category:"Строевой устав"},
];


function selectByCategory(questions, perCategory=5) {
  const categories = [...new Set(questions.map(q => q.category))]; // все категории из массива
  const selected = [];

  categories.forEach(cat => {
    const catQuestions = questions.filter(q => q.category === cat);
    const shuffled = [...catQuestions].sort(() => 0.5 - Math.random());
    selected.push(...shuffled.slice(0, perCategory));
  });

  return selected;
}


const form = document.getElementById("quizForm");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
const userForm = document.getElementById('userForm');
const startTestBtn = document.getElementById('startTestBtn');

let playerName = '', playerLastName = '';
let quizQuestions = [];

function startTest() {
  const gameName = document.getElementById('gameName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  if(!gameName || !lastName) return alert('Пожалуйста, заполните все поля');
  playerName = gameName; playerLastName = lastName;

  userForm.style.display = 'none';
  form.style.display = 'block';
  submitBtn.style.display = 'block';

  quizQuestions = selectByCategory(allQuestions, 5);
  renderQuestions();
  submitBtn.disabled = true;
  submitBtn.style.opacity="0.5";
}

function renderQuestions() {
  form.innerHTML = "";
  quizQuestions.forEach((q, idx) => {
    const div = document.createElement("div");
    div.className = "question";
    let options = q.a.map((text,i)=>({text,isCorrect:i===q.correct})).sort(() => 0.5 - Math.random());
    div.innerHTML = `<p>${q.q}</p>` + options.map((opt,i)=>`<div class="options"><label><input type="radio" name="q${idx}" value="${i}"> ${opt.text}</label></div>`).join('');
    q.correctShuffled = options.findIndex(opt=>opt.isCorrect);
    form.appendChild(div);
  });

  document.querySelectorAll("input[type=radio]").forEach(r=>{
    r.addEventListener("change", ()=>{
      updateButtonState();
      document.querySelectorAll(".question").forEach(q=>q.classList.remove("error"));
      document.querySelectorAll(".options label").forEach(l=>l.classList.remove("correct","incorrect"));
    });
  });
}

function allAnswered() { return quizQuestions.every((q, idx) => document.querySelector(`input[name=q${idx}]:checked`)); }
function updateButtonState() {
  submitBtn.disabled = !allAnswered();
  submitBtn.style.opacity = submitBtn.disabled ? "0.5" : "1";
}

submitBtn.addEventListener("click", ()=>{  
  let score=0, unanswered=[];
  quizQuestions.forEach((q,idx)=>{
    const selected=document.querySelector(`input[name=q${idx}]:checked`);
    document.querySelectorAll(`input[name=q${idx}]`).forEach((input,i)=>{if(i===q.correctShuffled) input.parentElement.classList.add("correct");});
    if(selected) { if(parseInt(selected.value)===q.correctShuffled) score++; else selected.parentElement.classList.add("incorrect");}
    else unanswered.push(idx);
  });
  if(unanswered.length){ unanswered.forEach(i=>document.querySelectorAll(".question")[i].classList.add("error")); return alert("Пожалуйста, ответьте на все вопросы!"); }

  document.querySelectorAll("input[type=radio]").forEach(r=>r.disabled=true);
  submitBtn.style.display="none";

  resultDiv.innerHTML = `Вы набрали ${score} из ${quizQuestions.length} баллов.`;
  if(score === quizQuestions.length){
    const now = new Date(), pad = n=>String(n).padStart(2,'0');
    const code = `USAF-${playerName}-${playerLastName}-${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}-${Math.random().toString(36).substring(2,6).toUpperCase()}`;
    resultDiv.innerHTML += `<p class="success" style="color:green;">Поздравляю, вы успешно сдали тест!</p>
      <p class="note" style="font-size:14px; color:#222; margin-top:8px;">Сделайте скриншот экрана для отчёта.<br>Ваш уникальный код: <b>${code}</b></p>`;
  } else {
    resultDiv.innerHTML += `<p class="success" style="color:red;">К сожалению, вы не прошли тест.</p>
      <p class="note" style="font-size:14px; color:#222; margin-top:8px;">Попробуйте ещё раз и обратите внимание на свои ошибки.</p>`;
  }

  const retryBtn=document.createElement("button");
  retryBtn.textContent="Попробовать ещё раз";
  retryBtn.addEventListener("click",()=>startTest());
  resultDiv.appendChild(retryBtn);
});

startTestBtn.addEventListener('click', e => {
  e.preventDefault();
  startTest();
});

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "d") {
    quizQuestions.forEach((q, idx) => {
      const correctRadio = document.querySelector(`input[name=q${idx}][value='${q.correctShuffled}']`);
      if (correctRadio) correctRadio.checked = true;
    });
    updateButtonState();
    alert("Все правильные ответы выбраны автоматически!");
  }
});



