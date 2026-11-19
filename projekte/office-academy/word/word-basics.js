(() => {
  const rounds = [
    { task: 'Schreibe eine Überschrift und zwei kurze Absätze über ein Hobby. Gestalte die Überschrift mit einer Überschriften-Formatvorlage und hebe ein Wort fett hervor.', questions: [
      ['Was musst du tun, bevor du ein einzelnes Wort formatierst?', ['Das Wort markieren', 'Das Dokument schliessen', 'Die Seite drehen'], 0, 'Eine Formatierung wirkt auf die markierte Textstelle.'],
      ['Welche Änderung ist eine Zeichenformatierung?', ['Seitenrand ändern', 'Ein Wort fett darstellen', 'Einen Absatz zentrieren'], 1, 'Fett, kursiv und Schriftfarbe betreffen Zeichen.'],
      ['Womit beendest du einen Absatz?', ['Leertaste', 'Tabulatortaste', 'Eingabetaste (Enter)'], 2, 'Enter erzeugt eine Absatzmarke.'],
      ['Wozu dienen Formatierungszeichen?', ['Sie machen etwa Absatzmarken und Leerzeichen sichtbar', 'Sie übersetzen den Text', 'Sie ersetzen Bilder'], 0, 'So erkennst du unsichtbare Zeichen und findest Layoutfehler.'],
      ['Wie gestaltest du mehrere Überschriften einheitlich?', ['Mit vielen Leerzeichen', 'Mit passenden Formatvorlagen', 'Mit einem Bildschirmfoto'], 1, 'Formatvorlagen bündeln Einstellungen und halten die Gestaltung einheitlich.']
    ]},
    { task: 'Schreibe einen kurzen Einladungstext. Ersetze darin einen mehrfach vorkommenden Begriff mit «Suchen und Ersetzen», füge ein Bild ein und prüfe das Dokument in der Druckvorschau.', questions: [
      ['Wie ersetzt du denselben Begriff an mehreren Stellen?', ['Mit Suchen und Ersetzen', 'Durch Ändern der Schriftgrösse', 'Mit Seitenzahlen'], 0, 'Prüfe vor «Alle ersetzen», ob der Begriff wirklich überall geändert werden soll.'],
      ['Welche Einstellung betrifft das Seitenlayout?', ['Schriftfarbe', 'Seitenränder', 'Fettdruck'], 1, 'Seitenränder bestimmen den nutzbaren Bereich der Seite.'],
      ['Was prüfst du vor dem Drucken?', ['Nur den Dateinamen', 'Nur die Anzahl Wörter', 'Seitenumbrüche und Anordnung in der Druckvorschau'], 2, 'Die Druckvorschau zeigt, wie der Inhalt auf den Seiten verteilt ist.'],
      ['Was beeinflusst die Anordnung von Text um ein Bild?', ['Der Textumbruch des Bildes', 'Die Rechtschreibsprache', 'Die Zoomstufe'], 0, 'Mit dem Textumbruch bestimmst du das Zusammenspiel von Bild und Text.'],
      ['Was ist beim Ändern der Bildgrösse sinnvoll?', ['Das Bild beliebig verzerren', 'Das Seitenverhältnis beibehalten', 'Den Text löschen'], 1, 'So bleibt das Bild proportional.']
    ]},
    { task: 'Erstelle eine Tabelle mit den Spalten «Material», «Anzahl» und «Preis» sowie drei Materialzeilen. Formatiere die Kopfzeile und sortiere die Materialien alphabetisch.', questions: [
      ['Was ist eine Zelle?', ['Der Schnittpunkt einer Zeile und einer Spalte', 'Der Rand des Dokuments', 'Ein Seitenumbruch'], 0, 'In einer Zelle stehen einzelne Tabelleninhalte.'],
      ['Was bewirkt «Zellen verbinden»?', ['Die Tabelle wird gelöscht', 'Mehrere markierte Zellen werden zu einer', 'Alle Zeilen werden sortiert'], 1, 'Verbinden fasst ausgewählte Zellen zusammen.'],
      ['Was hilft bei einer Tabelle über mehrere Seiten?', ['Eine grössere Zoomstufe', 'Leerzeilen vor jeder Seite', 'Eine wiederholte Überschriftszeile'], 2, 'Die wiederholte Kopfzeile erleichtert das Lesen auf Folgeseiten.'],
      ['Wie ordnest du Namen alphabetisch?', ['Mit der Sortierfunktion', 'Mit einem Seitenrahmen', 'Mit der Schriftfarbe'], 0, 'Sortiere die zusammengehörigen Tabellenzeilen anhand der Namensspalte.'],
      ['Was brauchst du beim Umwandeln von Text in eine Tabelle?', ['Ein Foto', 'Eindeutige Trennzeichen, etwa Tabulatoren', 'Eine Fussnote'], 1, 'An den Trennzeichen erkennt Word die Spaltengrenzen.']
    ]},
    { task: 'Erstelle einen kurzen Text mit zwei Überschriften. Weise beiden eine Überschriften-Formatvorlage zu, füge ein automatisches Inhaltsverzeichnis und eine Fussnote ein.', questions: [
      ['Wo erscheint eine Fussnote normalerweise?', ['Am unteren Rand der zugehörigen Seite', 'Im Dateinamen', 'Nur auf dem Deckblatt'], 0, 'Fussnoten erläutern eine Textstelle am Seitenende.'],
      ['Wo stehen Endnoten normalerweise?', ['Neben jedem Bild', 'Am Ende des Dokuments oder Abschnitts', 'In jeder Tabellenzelle'], 1, 'Endnoten sammeln Erläuterungen am Dokument- oder Abschnittsende.'],
      ['Worauf basiert ein automatisches Inhaltsverzeichnis üblicherweise?', ['Auf allen fett gedruckten Wörtern', 'Auf den Bildfarben', 'Auf Überschriften mit zugewiesenen Gliederungsebenen'], 2, 'Nutze beispielsweise die Formatvorlagen «Überschrift 1» und «Überschrift 2».'],
      ['Was enthält ein Index?', ['Stichwörter mit Fundstellen', 'Nur die Namen der Bilder', 'Alle Schriftarten'], 0, 'Ein Index hilft, Begriffe im Dokument zu finden.'],
      ['Was tust du nach grösseren Änderungen am Dokument?', ['Das Inhaltsverzeichnis abfotografieren', 'Das Inhaltsverzeichnis aktualisieren', 'Alle Überschriften entfernen'], 1, 'Aktualisieren übernimmt geänderte Überschriften und Seitenzahlen.']
    ]},
    { task: 'Füge ein Bild mit Beschriftung in dein Dokument ein. Erstelle ein Abbildungsverzeichnis und einen Querverweis auf die Abbildung. Verschiebe das Bild und aktualisiere anschliessend die Verweise.', questions: [
      ['Was benötigt ein automatisches Abbildungsverzeichnis üblicherweise?', ['Mit Words Beschriftungsfunktion eingefügte Bildbeschriftungen', 'Nur besonders grosse Bilder', 'Ein farbiges Deckblatt'], 0, 'Die Beschriftungen liefern die Einträge für das Verzeichnis.'],
      ['Wozu dient eine Textmarke?', ['Sie ändert die Schriftart', 'Sie kennzeichnet eine bestimmte Stelle im Dokument', 'Sie prüft die Rechtschreibung'], 1, 'Eine Textmarke kann etwa als Sprungziel oder Verweisziel dienen.'],
      ['Was ist ein Querverweis?', ['Eine manuell getippte Seitenzahl', 'Eine neue Schriftart', 'Ein Verweis auf ein anderes Element im Dokument'], 2, 'Ein Querverweis kann beispielsweise auf eine Überschrift oder Abbildung zeigen.'],
      ['Warum ist ein Querverweis hilfreicher als eine getippte Seitenzahl?', ['Er kann nach Änderungen aktualisiert werden', 'Er braucht keine Zielstelle', 'Er löscht alte Seiten'], 0, 'Nach dem Verschieben von Inhalten musst du die Felder gegebenenfalls aktualisieren.'],
      ['Was kontrollierst du vor der Abgabe?', ['Nur die Zoomstufe', 'Ob Verzeichnisse und Verweise aktuell und korrekt sind', 'Nur das Änderungsdatum'], 1, 'Prüfe die Einträge und Verweisziele auch nach dem Aktualisieren.']
    ]}
  ];
  rounds.forEach((round, index) => {
    const section = document.getElementById('challenge-' + (index + 1));
    if (!section) return;
    const details = document.createElement('details');
    details.className = 'tester basics-check';
    const summary = document.createElement('summary');
    summary.textContent = 'Word-Basics-Check · 5 Fragen';
    details.append(summary);
    const intro = document.createElement('p');
    intro.textContent = 'Wärme dein Wissen auf. Wähle pro Frage eine Antwort und prüfe danach deine Lösungen.';
    details.append(intro);
    const form = document.createElement('form');
    const feedback = [];
    round.questions.forEach(([question, answers], q) => {
      const field = document.createElement('fieldset');
      const legend = document.createElement('legend');
      legend.textContent = (q + 1) + '. ' + question;
      field.append(legend);
      answers.forEach((answer, a) => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio'; radio.name = 'basic-' + index + '-' + q; radio.value = String(a);
        label.append(radio, document.createTextNode(' ' + answer)); field.append(label);
      });
      const hint = document.createElement('p'); hint.hidden = true; field.append(hint);
      feedback.push(hint); form.append(field);
    });
    const button = document.createElement('button'); button.type = 'submit'; button.textContent = 'Antworten prüfen';
    const status = document.createElement('p'); status.setAttribute('role', 'status');
    form.append(button, status);
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      if (round.questions.some((_, q) => !data.has('basic-' + index + '-' + q))) {
        status.textContent = 'Bitte beantworte zuerst alle fünf Fragen.'; return;
      }
      let score = 0;
      round.questions.forEach(([, answers, correct, explanation], q) => {
        const right = Number(data.get('basic-' + index + '-' + q)) === correct;
        if (right) score++;
        feedback[q].textContent = (right ? 'Richtig. ' : 'Die richtige Antwort: ' + answers[correct] + '. ') + explanation;
        feedback[q].hidden = false;
      });
      status.textContent = score + ' von 5 richtig. Du kannst die Antworten ändern und erneut prüfen.';
    });
    form.addEventListener('change', () => { status.textContent = ''; feedback.forEach(hint => { hint.hidden = true; }); });
    details.append(form);
    const heading = document.createElement('h3'); heading.textContent = 'Jetzt direkt in Word ausprobieren';
    const task = document.createElement('p'); task.textContent = round.task;
    const note = document.createElement('p'); note.textContent = 'Die Rückmeldung bewertet die Quizantworten. Prüfe deine praktische Word-Aufgabe mit den Lernzielen. Es werden keine Ergebnisse dauerhaft gespeichert.';
    details.append(heading, task, note);
    section.querySelector('h2').after(details);
  });
})();
