<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/1/22 0022
 * Time: 下午 10:28
 */

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class DBSDKRow extends CI_Controller
{

    public function index(){
        $rows = DB::row('yyTest1', ['*'], ['id' => '2']);

        $this->json([
            'code' => 0,
            'data' =>  $rows
        ]);
    }
}