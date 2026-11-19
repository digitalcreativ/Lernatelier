/* GZ-Basics-Check: kleines Quiz wie die Word-Basics-Checks der Office Academy.
   Aufruf auf einer GZ-Seite: GZBasicsCheck({ host: "#gz-check", questions: [...], task: "..." })
   Frage = [Frage, [Antwort A, Antwort B, Antwort C], Index der richtigen Antwort, Erklärung]
   Es wird nichts gespeichert. Im Druck/PDF ist der Check ausgeblendet. */
(function () {
  var css =
    ".gz-check{background:var(--surface,#fff);border:1px solid var(--line,#dde3ea);border-top:3px solid var(--accent,#2a55c0);border-radius:10px;padding:14px 18px}" +
    ".gz-check summary{cursor:pointer;font-weight:700;color:var(--accent-ink,var(--accent,#1f449f));font-size:17px}" +
    ".gz-check[open] summary{margin-bottom:10px}" +
    ".gz-check p{margin:0 0 10px}" +
    ".gz-check fieldset{border:1px solid var(--line,#dde3ea);border-radius:8px;margin:0 0 10px;padding:10px 12px}" +
    ".gz-check legend{font-weight:600;padding:0 4px}" +
    ".gz-check label{display:flex;gap:8px;align-items:flex-start;margin:4px 0;cursor:pointer}" +
    ".gz-check input{margin-top:4px;accent-color:var(--accent,#2a55c0)}" +
    ".gz-check .fb{margin:6px 0 0;font-size:14px;padding:6px 10px;border-radius:6px;background:var(--accent-tint,#eef2fb)}" +
    ".gz-check .fb.ok{border-left:3px solid #2e7d32}.gz-check .fb.no{border-left:3px solid #c0482a}" +
    ".gz-check button{font:inherit;font-weight:600;color:#fff;background:var(--accent,#2a55c0);border:0;border-radius:8px;padding:8px 14px;cursor:pointer}" +
    ".gz-check button:focus-visible,.gz-check summary:focus-visible{outline:2px solid var(--accent,#2a55c0);outline-offset:2px}" +
    ".gz-check .status{margin-top:8px;font-weight:600}" +
    ".gz-check h3{margin:14px 0 6px;font-size:15px}" +
    ".gz-check .small{font-size:13px;color:var(--muted,#5e6573)}" +
    "@media print{.gz-check,.gz-check-host{display:none}}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  window.GZBasicsCheck = function (cfg) {
    var host = document.querySelector(cfg.host);
    if (!host) return;
    host.classList.add("gz-check-host");
    var n = cfg.questions.length, id = "gz" + Math.random().toString(36).slice(2, 7);
    var d = document.createElement("details");
    d.className = "gz-check";
    var s = document.createElement("summary");
    s.textContent = "GZ-Basics-Check · " + n + " Fragen";
    d.appendChild(s);
    var intro = document.createElement("p");
    intro.textContent = "Wärme dein Wissen auf. Wähle pro Frage eine Antwort und prüfe danach deine Lösungen.";
    d.appendChild(intro);
    var form = document.createElement("form"), fb = [];
    cfg.questions.forEach(function (q, i) {
      var fs = document.createElement("fieldset"), lg = document.createElement("legend");
      lg.textContent = (i + 1) + ". " + q[0];
      fs.appendChild(lg);
      q[1].forEach(function (a, j) {
        var l = document.createElement("label"), r = document.createElement("input");
        r.type = "radio"; r.name = id + "-" + i; r.value = String(j);
        l.appendChild(r); l.appendChild(document.createTextNode(" " + a));
        fs.appendChild(l);
      });
      var h = document.createElement("p"); h.className = "fb"; h.hidden = true;
      fs.appendChild(h); fb.push(h); form.appendChild(fs);
    });
    var b = document.createElement("button"); b.type = "submit"; b.textContent = "Antworten prüfen";
    var status = document.createElement("p"); status.className = "status"; status.setAttribute("role", "status");
    form.appendChild(b); form.appendChild(status);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form), score = 0;
      for (var i = 0; i < n; i++) if (!data.has(id + "-" + i)) { status.textContent = "Bitte beantworte zuerst alle " + n + " Fragen."; return; }
      cfg.questions.forEach(function (q, i) {
        var ok = Number(data.get(id + "-" + i)) === q[2];
        if (ok) score++;
        fb[i].textContent = (ok ? "Richtig. " : "Die richtige Antwort: " + q[1][q[2]] + ". ") + q[3];
        fb[i].className = "fb " + (ok ? "ok" : "no");
        fb[i].hidden = false;
      });
      status.textContent = score + " von " + n + " richtig. Du kannst die Antworten ändern und erneut prüfen.";
    });
    form.addEventListener("change", function () { status.textContent = ""; fb.forEach(function (h) { h.hidden = true; }); });
    d.appendChild(form);
    if (cfg.task) {
      var h3 = document.createElement("h3"); h3.textContent = "Jetzt direkt am Zeichenbrett ausprobieren";
      var t = document.createElement("p"); t.textContent = cfg.task;
      d.appendChild(h3); d.appendChild(t);
    }
    var note = document.createElement("p"); note.className = "small";
    note.textContent = "Die Rückmeldung bewertet nur die Quizantworten. Es werden keine Ergebnisse gespeichert.";
    d.appendChild(note);
    host.appendChild(d);
  };
})();
