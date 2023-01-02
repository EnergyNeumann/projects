<?php

$n1 = 3;

$n2 = 2;

$n3 = 1;

if ($n1 > $n2) {

    $m1 = $n1;

    $m2 = $n2;

} else {

    $m1 = $n2;

    $m2 = $n1;

}

if ($n3 < $m1) {

    $mx = $n3;

    $m3 = $m1;

} else {

    $my = $m1;

    $m3 = $n3;

}

if ($m2 > $m3) {

    $ix = $m2;

    $mm = $m3;

} else {

    $ix = $m3;

    $mm = $m2;

}

echo $mm . " < " . $ix . " < " . $mm;

?>