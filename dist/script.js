var perso = document.getElementById('perso');
var objet = document.getElementById('objet');
var boutton = document.getElementById('boutton');



new Parallax(perso,{
  scalarX: 10,
  scalarY: 10,
});


new Parallax(objet,{
  scalarX: 20,
  scalarY: 20,
});
