<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql as MySQL;

class DBSDK extends CI_Controller {
    public function index() {
        $dbInstance = MySQL::getInstance();
        $this->json([
            'code' => 0,
            'data' => [
                'msg' => 'Hello World'
            ],
            'dbInstance' => $dbInstance
        ]);
    }
}
{

}