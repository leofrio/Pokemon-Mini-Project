function loadPokemon() {
    $.get("https://pokeapi.co/api/v2/pokemon?limit=1118", function(data) { 
    var pokedex=document.getElementById("pokedex") 

    var pokemons=""; 
    for(var pokemon of data.results) {  

        var aux=pokemon.url.split("/")
        var id=aux[aux.length-2]
        pokemons += "<option>" + id +" "+pokemon.name + "</option>";
    } 
    pokedex.innerHTML=pokemons;
}) 
}   
function loadData() { 
    var pokedex=document.getElementById("pokedex"); 
    var pokemonid=pokedex.options[pokedex.selectedIndex].value.split(" ")[1]
    $.get("https://pokeapi.co/api/v2/pokemon/" +pokemonid +"/",function(data) { 
        var table=document.getElementById("pokemonTable") 
        var pokemonstr="<tr><th>Name</th><th>Abilties</th><th>Height</th><th>Types</th><th>Sprite</th></tr>"; 
        var name =data.forms[0].name 
        var ablitiestr="" 
        for(var i of data.abilities) { 
            ablitiestr+= i.ability.name +" "
        }
        var height=data.height 
        var typestr="" 
        for(var i of data.types) {
            typestr +=i.type.name +" "
        }
        var img=data.sprites.front_default 
        pokemonstr += "<tr><td>" + name + "</td><td>" + ablitiestr + "</td><td>"+height +"</td><td>"+typestr+"</td><td><img src ='" +img +"'></img></td></tr>";
        table.innerHTML=pokemonstr
    })
}
