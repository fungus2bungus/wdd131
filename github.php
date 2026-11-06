<?php 
use GithubWebhook\Handler;

$handler = new Handler("l&*^~Y4-OqXS");
if ($hander->handle()) {
    exec("git pull");
}
else {
    echo "Wrong secret";
}
