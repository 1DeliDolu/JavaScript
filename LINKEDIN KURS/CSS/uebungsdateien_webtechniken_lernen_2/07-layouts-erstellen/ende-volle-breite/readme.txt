2018-11-02, pm  

Kapitel 07 - Layouts erstellen  

Layout über volle Breite der Seite (mit Druckversion)
- body mit weißem Hintergrund  
- Navi, Footer und Infoboxen mit Farbstreifen

- Klasse .wrapper  
-- Begrenzung der Breite auf 320px bis 720px 
-- padding 0 1rem
-- margin 0 auto 

- .wrapper wird Layoutbereichen oder <div> zugewiesen 

-- Header und Inhaltsbereich haben gleiche Farbe wie <body>
-- bekommen den Wrapper zur Begrenzung der Breite 
-- z. B. <header class="site-header wrapper"> 

-- Navi und Footer benötigten eine Dopplung per <div> 
-- <nav site="site-nav"> 
-- <div class="wrapper"> 

- Ausnahme: Inhaltsbereich auf der Startseite 
-- Intro ist weiß, daher direkt im Element
-- <section class="content-intro wrapper"> 

-- Infoboxen sind hellgrau, Dopplung per <div> 
-- <section class="infoboxen"> 
-- <div class="wrapper"> 

-- Kundenstimmen sind wieder weiß 
-- <section class="kundenstimmen wrapper"> 



--- eof --- 