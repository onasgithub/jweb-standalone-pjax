<?php

namespace jweb\pjax;


use Yii;

class PjaxAsset extends  yii\web\AssetBundle {

      public $sourcePath = '@vendor/jweb/pjax';
      public $js = [
          'js/spin.js',
          'js/jquery.pjax.js',
          'js/custom.js',
      ];
      public $depends = [
          'yii\web\YiiAsset',
      ];


}
