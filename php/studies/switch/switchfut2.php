<!DocType html>
//<html>
 <head>
  <title>Testando o SWITCH - Método POST e ISSET</title>
 </head>
 <body>
  <form action="teste_switch.php" method="GET">
   Que time você torce:  <input type="text" name="time" /><br />
   <input type="submit" name="submit" value="Testar" />
 </form> 
 <?php 
   if (isset($_GET['time'])) 
    {
    $time = $_GET['time'];
    
   switch($time){
   case 'Corinthians':
    echo "Vai Timão!";
    break;
   case 'Palmeiras':
    echo "Não tem mundial ? - Mas a FIFA reconhece ";
    break;
   case 'Flamengo':
    echo "Flamíííídia";
    break;
   case 'São Paulo':
    echo "O campeão voltou..oooo";
    break;
   case 'Atlético':
    echo "A Galoucura é Galôôôôô, ôôôô, ôôôô, ôôôÔ, Galo!";
    
    }
 }
 ?>
 </body>
</html>