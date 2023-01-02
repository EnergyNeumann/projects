<!DocType html>
<html>
 <head>
  <title>Testando o SWITCH - Método POST e ISSET</title>
 </head>
 <body>
  <form action="teste_switch_post.php" method="post">
   Que time você torce:  <input type="text" name="time" /><br />
   <input type="submit" name="submit" value="Testar" />
 </form> 
 <?php 
if (isset($_POST['submit'])) 
{
  $time = $_POST['time'];
    
  switch($time){
   case 'Corinthians':
    echo "Vai Timão!";
   case 'Palmeiras':
    echo "Não tem mundial - Mas a FIFA reconhece ";
   case 'Flamengo':
    echo "Flamíííídia";
   case 'São Paulo':
    echo "O campeão voltou..oooo";
   case 'Athlético':
    echo "A Galoucura é Galôôôôô, ôôôô, ôôôô, ôôôÔ, Galo!";
    }
}
 ?>
 </body>
</html>