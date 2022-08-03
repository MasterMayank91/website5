/*
    Website 5 Annapurna Bhojnalaya
    All right reserved by Mayank
    js: script/data
*/ 
try
{
    var data = [
        ["Burger",30,3],
        ["Noodles",20,3],
        ["Micronice",10,2],
        ["Pizza",50,4],
        ["Samosa",15,5],
        ["Frenchfry",10,2],
        ["Chole & Puri",50,5],
        ["Dal & Chawal",60,3],
        ["Paneer & roti",100,4],
        ["Paratha",10,5],
        ["Prath",15,5],
        ["Gajar Ka Halva",25,4],
        ["Green Tea",20,5],
        ["Tea",5,3],
        ["Cold Coffee",20,3],
        ["Juices & Shakes",10,4]
    ];

    for (let i = 0; i < data.length; i++)
    {
        document.write("<figure>");
        document.write("<img src='food/"+data[i][0]+".jpeg'>");
        document.write("<div class='property'><b>"+data[i][0]+"</b><i> &#128178;"+data[i][1]+"</i></div>");
        document.write("<div>"+set_star(data[i][2])+"</div>");
        document.write("</figure>");
    }

    function set_star(data)
    {
        for(var i=0; i < data; i++)
            document.write("&#11088;");
    }
    

}
catch (error)
{
    alert(error);    
}