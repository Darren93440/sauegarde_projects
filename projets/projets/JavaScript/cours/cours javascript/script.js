function dog(name, color, age)
{
    this.name = name;
    this.color = color;
    this.age = age;
    this.aboie = function()
    {
        console.log("wouaf " + this.name);
    }
}

var caniche = new dog("chouppette", "white", 4);

var pit = new dog("rex", "noir", 2);

caniche.aboie()
pit.aboie()

console.log(caniche);
console.log(pit);