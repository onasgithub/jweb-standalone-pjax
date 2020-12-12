<?php

namespace jweb\pjax;

use Yii;
use yii\helpers\Json;
use yii\widgets\Pjax as YiiPjax;

class Pjax extends YiiPjax {

    /**
     * Registers the needed JavaScript.
     */
    public function registerClientScript() {



        $id = $this->options['id'];
        $this->clientOptions['push'] = $this->enablePushState;
        $this->clientOptions['replace'] = $this->enableReplaceState;
        $this->clientOptions['timeout'] = $this->timeout;
        $this->clientOptions['scrollTo'] = $this->scrollTo;
        $options = Json::encode($this->clientOptions);
        $linkSelector = Json::encode($this->linkSelector !== null ? $this->linkSelector : '#' . $id . ' a');
        $formSelector = Json::encode($this->formSelector !== null ? $this->formSelector : '#' . $id . ' form[data-pjax]');
        $view = $this->getView();
        PjaxAsset::register($view);

        $js = "jQuery(document).pjax($linkSelector, \"#$id\", $options);";
        $js .= "\njQuery(document).on('submit', $formSelector, function (event) {jQuery.pjax.submit(event, '#$id', $options);});";
        if (Yii::$app->getRequest()->getHeaders()->has('X-PJAX')) {
            echo '<script>' . $js . '</script>';
        } else
            $view->registerJs($js);
    }

    public function init() {
        if (Yii::$app->getRequest()->getHeaders()->has('X-PJAX')) {
            Yii::$app->getResponse()->getHeaders()->set('X-Pjax-Url', Yii::$app->getRequest()->getUrl());
        }
        parent::init();
    }

}
