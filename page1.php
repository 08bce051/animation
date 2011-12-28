<html>
<head>
		<link href="./$fx - JavaScript animation library_files/starfield.css" rel="stylesheet">
		
<script type="text/javascript">
var i=0;
var t=new Array();

<?php
$i=0;
$cname=$_GET['cname'];
$dir = opendir("$cname");
while (($file = readdir($dir)) !== false)
  {
  if(!is_dir($file))
  {
  $images[$i]=$file;
  $file1="$cname/".$file;
  $index=getimagesize($file1);
	if($index[0]<=400)
		{
		if($index[1]<=500){$t[$i]='q';?>
			t[i++]='q';
		<?php }if ($index[1]>500){$t[$i]='v';?>
			t[i++]='v';
		<?php
		}}
	if($index[0]>400)
		{
		if($index[1]<=500){$t[$i]='h';?>
			t[i++]='h';
		<?php }else if($index[1]>500){$t[$i]='f';?>
			t[i++]='f';
		<?php
		}}
	$i=$i+1;
 }
 }
 $no=$i;
closedir($dir);
?>
var no=<?php echo $no;?>;




</script>
</head>
<body>
<div class="starfield" id="sample1">
	<?php
	$x=0;
	for($i=0;$i<$no;$i++)
	{
	?>
	<img src="<?php echo "$cname/$images[$i]";?>" id="img<?php echo $i;?>" style="
	<?php 	if($t[$i]=='q')echo "width:300;height:400;";
			else if($t[$i]=='h')echo "width:600;height:400;";
			else if($t[$i]=='v')echo "width:300;height:1000;";
			else echo "width:600;height:1000;";
	?>
			position:absolute;left:<?php echo $x;?>;top:0;z-index:1;">
	<?php
	$x=$x+300;
	}
	?>
	
</div>
<script src="./$fx - JavaScript animation library_files/fx-m.js"></script>
<script src="./$fx - JavaScript animation library_files/jquery-1.7.1.min.js"></script>
<script src="./$fx - JavaScript animation library_files/animation.js"></script>
</body>
		</html>