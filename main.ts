/*
Q20. Think of something you could store in a array. For example, you could make a list of mountains, 
rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.
*/

let languages: string[] = ["Engilish","Urdu","Panjabi","Sindhi","Pashto"];
languages.forEach((list)=>
    {
        console.log(list);
    })

    languages.map((a)=>
        {
            console.log(a);
        })