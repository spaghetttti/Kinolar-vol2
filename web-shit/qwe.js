//alert("fuck you");
//window.alert("suckdick");
    document.write("yeah");
    console.log(" bitch");
    var x;
    x=3;
    //document.write(2*x);
    var poop=5;
    var name = "John";
    var lastname = "Fucker";
    document.write(name + " " + lastname + "</br>" + poop);
    document.write("</br>");
    var y=69;
    document.write(y + "<br/>");
    var y;
    document.write(y + "<br/>");
    document.write("Fuck" + " " + "me" + "<br/>");
    var x = ["one","two",",","three"];
    for (var i=0; i<4;i++)
    {
        document.write(x[i]);
        document.write(" ");
    }

    var student =
    {
      Name : "Will",
      Grade : 8,
      school : "Funkfunk",
      score : 96,


    };
    var poopo;
    print("<br>" + typeof student.Name);
    document.write("</br>");
      print(student.Name +"("+ student.Name.length + ")" + "[" + typeof student.Name + "]"  + " ");
      print(student.Grade + "[" + typeof student.Grade + "]" + " ");
     print(student.school +"("+ student.school.length + ")" + "[" + typeof student.school + "]" + " ");
     print(student.score + + "[" + typeof student.score + "]" + "</br>");
    // document.write(typeof student.Name + "</br>");
    // document.write(typeof student.score + "</br>" + poopo + "</br>");
     var t=5;
     //var y = new student.Name;
     // print(typeof y + "<br>");
     document.write(t + "  (" + typeof t + ") nulling ->");
     t=null;
     document.write(t + "(" + typeof t + ")" + "</br>" );
     function print(text)
     {
       document.write(text);
       return 0;
     }
     //print("Hello, my frineds, how are you doing?" + "<br>");
     print(50 + "<br>");
     print(student["Name"]);
     var person =
     {
       firstName: "John",
       lastName : "Doe",
       id       : 5566,
       line : "Hello, dear frineds, how are you doing this evening ?",
       fullName : function()
       {
          return person.firstName + " " + person.lastName;
       }
     };

      print("<br>" + person.fullName() +"\n ");
      var x = person.line.indexOf("dear");
      var y = person.line.search("dear");
      print(x+"<br>");
      y = "1goat";
      print(person.line.slice(7,11) + "<br>");
      print(person.line.slice(-46)+ "<br>");
      print(person.line.substring(44,51)+ "<br>"  );
      print(person.line.substr(-7)+ "<br>");
      //alert(y.trim());
      print(y.charAt(0));
      print("<br>" +"y[0]="+ y[0] + " y.charCodeAt(0)=" + y.charCodeAt(0) + "<br>");
      for (var i = 0; i < person.line.length; i++)
      {
        print(person.line[i] + " ");

      }
      print("<br>");
      print(isNaN("lola"/2));
      x=12;
      y=12;
      print((x+y).valueOf()) + "<br>";
      //alert(Number.MAX_VALUE);
      print("<br>");
      let a = 3.1415;
      print(typeof a.toFixed(3) + "<br>");
      print(typeof a.toFixed(3)-0 + "<br>");
      a = 10.12345;
      //print( +a.toFixed(2));
      let arr = [ "Hello", " my" , " frined", " how", " are u doing", " these days" ];
      //document.write(arr);
      print(arr[2] + "\n");
      let text ;
      console.log(text);
      for (let i = 0; i<arr.length ; i++)
      {
        text += arr[i] + " ";

      }
      print(text);
      let arr1 = [20];
      //console.log("sarvin loh");
      for ( var i = 0; i < 20 ; i++)
      {
          arr1[i] = Math.floor(100*Math.random()) + " ";
      }
      console.log(arr1);
      arr1.sort(function(a,b){return a - b});
      console.log(arr1);
      var points = [40, 100, 1, 5, 25, 10];
      console.log(points);
      for (i = points.length -1; i > 0; i--)
      {
        j = Math.floor(Math.random() * i)
        k = points[i]
        points[i] = points[j]
        points[j] = k
      }
      console.log(points);
      let max=0;
      let min=10
      for (i = 0; i <6; i++)
      {
        if (points[i]>=max)
        {
          max = points[i];
        }
        if (points[i]<=min)
        {
          min = points[i];
        }
      }
      console.log("My way:");
      console.log("The biggest number:"+max);
      console.log("The smallest number:"+min);
      console.log("Stupid machine way:");
      console.log("The biggest number:"+Math.max.apply(null,points));
      console.log("The smallest number:"+Math.min.apply(null,points));

      function times10(value)
      {
        return  value*10;

      }
      var txt = "";
      var numbers = [45, 4, 9, 16, 25];
      numbers.forEach(myFunction);

      function myFunction(value)
      {
        txt = txt + value + "<br>";
      }
      function settle(value,index)
      {
        return ((index%2)==0);
      }
      var numbers1 = [45, 5, 6, 16, 21];
      let sum = numbers1.reduce(myFunction);

      function myFunction1(total, value, index, array)
      {
        return total + value;
      }
      console.log(sum);
      let product = numbers1.reduce(productF);

      function productF(total,value,index)
      {

          return total * value;

      }
      console.log(product);


      console.log("sameshit");
      let d1 = new Date("2069-04-20T09:59:59Z");
      let d2 = new Date("03/11/2010");
      let d3 = new Date("11 Mar 2000");
      x = Date.parse("11 Mar 2000");
      y = Math.sqrt(x);
      var cars = ["BMW", "Volvo", "Saab", "Ford"];
      var i = 0;
      var text1 = "";
      for (;cars[i];)
      {
        text1 += cars[i] + "<br>";
        i++;
      }
      renata :
      {
        console.log("Renata" );
        console.log("is" );
        console.log("best");
        break renata;
        console.log("среди нас!");
      }

      






      //
