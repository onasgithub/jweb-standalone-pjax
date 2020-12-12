<?php

/*
 *  Author Jakub Radziwon Berryproject
 *  email: jr@berryproject.com
 */

namespace jweb\pjax;

use Yii;
use yii\base\Application;
use yii\base\BootstrapInterface;


class Bootstrap implements BootstrapInterface {

      /**
       * Bootstrap method to be called during application bootstrap stage.
       *
       * @param Application $app the application currently running
       */
      public function bootstrap($app) {
          //print_r($app);die();
          if (!($app->request instanceof \yii\console\Request)){
            if (Yii::$app->getRequest()->getHeaders()->has('X-PJAX')) {
               //   Yii::$app->getResponse()->getHeaders()->set('X-Pjax-Url', Yii::$app->getRequest()->getUrl());
            }
          }
      }
}
      