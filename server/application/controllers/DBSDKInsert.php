<?php
/**
 * Created by PhpStorm.
 * User: yy
 * Date: 2018/1/22
 * Time: 11:14
 */

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class DBSDKInsert extends CI_Controller {
    public function index()
    {
        $resultCol = DB::insert('yyTest1', [
            'id' => '2',
            'name' => 'yuyi2'
        ]);
        $this->json([
            'code' => 0,
            'data' => [
                '$resultCol' => $resultCol
            ]
        ]);
    }
}